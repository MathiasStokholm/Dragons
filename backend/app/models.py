# coding=utf-8
"""
Models
"""
import dataclasses
from sqlalchemy import Column, Integer, String, Text, ForeignKey, Float, Enum, DateTime, Boolean
from sqlalchemy.orm import relationship, Mapped
from .database import Base
from typing import List


@dataclasses.dataclass
class Character(Base):
    __tablename__ = 'character'
    id: int = Column(Integer, primary_key=True)
    name: str = Column(String(80), nullable=False)
    initiative: int = Column(Integer, nullable=False)
    secret_initiative: bool = Column(Boolean, nullable=False, default=False)
    encounter_id: int = Column(Integer, ForeignKey('encounter.id'))
    encounter = relationship('Encounter', back_populates='characters')


@dataclasses.dataclass
class Encounter(Base):
    __tablename__ = 'encounter'
    id: int = Column(Integer, primary_key=True)
    characters: Mapped[List["Character"]] = relationship('Character', back_populates='encounter', order_by=lambda: Character.initiative.desc(),
                              lazy='immediate')
    running: bool = Column(Boolean, nullable=False, default=False)
    current_character_id: int = Column(Integer, nullable=True)
