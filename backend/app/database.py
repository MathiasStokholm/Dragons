# coding=utf-8
"""
Database initialization code
"""
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import declarative_base
from app import app

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.sqlite'
db = SQLAlchemy(app)


Base = declarative_base()
Base.query = db.session.query_property()


def init_db():
    # Uncomment to write fixtures to DB
    from .models import Character, Encounter
    
    with app.app_context():
        Base.metadata.create_all(bind=db.engine)

        for character in [Character(name='char_{}'.format(i), initiative=i, secret_initiative=False) for i in range(1, 20, 4)]:
          db.session.add(character)
          db.session.commit()
        
        characters = db.session.query(Character).order_by(Character.initiative.desc()).all()
        encounter = Encounter(characters=characters, running=False, current_character_id=characters[0].id)
        db.session.add(encounter)
        db.session.commit()
        
        #encounter = Encounter(characters=[], running=False)
        #db.session.add(encounter)
        #db.session.commit()
