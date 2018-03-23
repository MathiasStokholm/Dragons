# coding=utf-8
"""
Database initialization code
"""
from __future__ import division, print_function, unicode_literals

from dictalchemy import DictableModel
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.declarative import declarative_base

from app import app

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.sqlite'
db = SQLAlchemy(app)

Base = declarative_base(cls=DictableModel, bind=db.engine)
Base.query = db.session.query_property()


def init_db():
    pass
    # Uncomment to write fixtures to DB
    # from app.models import Character, Encounter
    # Base.metadata.drop_all()
    # Base.metadata.create_all()
    #
    # for character in [Character(name='char_{}'.format(i), initiative=i, secret_initiative=False) for i in range(1, 20, 4)]:
    #     db.session.add(character)
    # db.session.commit()
    #
    # characters = db.session.query(Character).order_by(Character.initiative.desc()).all()
    # encounter = Encounter(characters=characters, running=False, current_turn=characters[0])
    # db.session.add(encounter)
    # db.session.commit()
    #
    # encounter = Encounter(characters=[], running=False)
    # db.session.add(encounter)
    # db.session.commit()
