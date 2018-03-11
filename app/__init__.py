# coding=utf-8
"""
Application initialization code
"""
from __future__ import division, print_function, unicode_literals

from flask import Flask
from flask_cors import CORS
from flask_socketio import SocketIO

# Create Flask application
app = Flask(__name__)

# FIXME: Configurable CORS more appropriately
CORS(app)
socketio = SocketIO(app)

# Instantiate DB and GraphQL schema
from database import db

# Instantiate views
from app.views import *
