# coding=utf-8
"""
#TODO
"""
from __future__ import division, print_function, unicode_literals
from app import app, socketio
from app.models import Character, Encounter
from database import db
from flask_socketio import Namespace, emit


class InitiativeNamespace(Namespace):
    @staticmethod
    def on_connect():
        print('Client connected!')
        InitiativeNamespace.emit_new_state(broadcast=False)

    @staticmethod
    def on_disconnect():
        print('Client disconnected!')

    @staticmethod
    def emit_new_state(broadcast=True):
        encounter = db.session.query(Encounter).first()
        emit('new_state', encounter.asdict(follow=dict(characters={})), broadcast=broadcast)

    @staticmethod
    def on_new_character(data):
        name = data['name']

        character = db.session.query(Character).filter_by(name=name).first()
        if character:
            return

        initiative = int(data['initiative'])
        secret_initiative = data.get('secret_initiative', False)
        print('Creating new character: {}/{}'.format(name, initiative))
        encounter = db.session.query(Encounter).first()
        character = Character(name=name, initiative=initiative, secret_initiative=secret_initiative,
                              encounter=encounter)
        db.session.add(character)
        db.session.commit()
        InitiativeNamespace.emit_new_state(broadcast=True)

    @staticmethod
    def on_delete_character(data):
        id = data['id']
        character = db.session.query(Character).filter_by(id=id).first()
        if character:
            print('Deleting: {}'.format(character.name))

            # Check if encounter needs changing
            encounter = db.session.query(Encounter).first()
            if encounter.running and encounter.current_character_id == id:
                if len(encounter.characters) <= 1:
                    # Removing last character
                    encounter.running = False
                else:
                    # Find next character
                    next_character = encounter.characters[0]
                    current_passed = False
                    for char in encounter.characters:
                        if current_passed:
                            next_character = char
                            break

                        if char.id == encounter.current_character_id:
                            current_passed = True
                            continue

                    encounter.current_character_id = next_character.id

            db.session.delete(character)
            db.session.commit()

            # Emit state change
            InitiativeNamespace.emit_new_state(broadcast=True)

    @staticmethod
    def on_set_status(data):
        running = data['running']
        encounter = db.session.query(Encounter).first()
        if encounter.running != running:
            encounter.running = not encounter.running
            if encounter.running:
                # Encounter was just started
                encounter.current_character_id = encounter.characters[0].id
        db.session.commit()
        InitiativeNamespace.emit_new_state(broadcast=True)

    @staticmethod
    def on_next_turn():
        encounter = db.session.query(Encounter).first()
        if not encounter.running:
            return

        if len(encounter.characters) <= 0:
            encounter.running = False
            InitiativeNamespace.emit_new_state(broadcast=True)
            return

        next_character = encounter.characters[0]
        current_passed = False
        for character in encounter.characters:
            if current_passed:
                next_character = character
                break

            if character.id == encounter.current_character_id:
                current_passed = True
                continue

        print('Next turn: {}'.format(next_character.name))
        encounter.current_character_id = next_character.id
        db.session.commit()
        InitiativeNamespace.emit_new_state(broadcast=True)


socketio.on_namespace(InitiativeNamespace('/initiative'))


@app.route('/')
def home():
    return 'Nothing to see here!'
