# coding=utf-8
"""
Models
"""
from __future__ import division, print_function, unicode_literals

from sqlalchemy import Column, Integer, String, Text, ForeignKey, Float, Enum, DateTime, Boolean
from sqlalchemy.orm import relationship

from database import Base


class Character(Base):
    __tablename__ = 'character'
    id = Column(Integer, primary_key=True)
    name = Column(String(80), nullable=False)
    initiative = Column(Integer, nullable=False)
    secret_initiative = Column(Boolean, nullable=False, default=False)
    encounter_id = Column(Integer, ForeignKey('encounter.id'))
    encounter = relationship('Encounter', back_populates='characters')


class Encounter(Base):
    __tablename__ = 'encounter'
    id = Column(Integer, primary_key=True)
    characters = relationship('Character', back_populates='encounter', order_by=lambda: Character.initiative.desc(),
                              lazy='immediate')
    running = Column(Boolean, nullable=False, default=False)
    current_character_id = Column(Integer, nullable=True)
