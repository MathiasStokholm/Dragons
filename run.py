# coding=utf-8
"""
Main application entry point
"""
from __future__ import division, print_function, unicode_literals
from app import app, socketio
from app.database import init_db


if __name__ == '__main__':
    init_db()
    socketio.run(app, host='0.0.0.0', port=5000, debug=True)
