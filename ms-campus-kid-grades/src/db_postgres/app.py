import json
from flask import Flask
from flask import request
import flask_sqlalchemy
import os

user = os.environ['postgres']
password = os.environ['test123']
host = os.environ['postgres']
port = os.environ['5432']
database = os.environ['estudiantes_sqlalchemy']

DATABASE_CONNECTION_URI = f'postgresql+psycopg2://{user}:{password}@{host}:{port}/{database}'

db = flask_sqlalchemy.SQLAlchemy()

class Estudiante(db.Model):
    __tablename__ = 'estudiante'
    id = db.Column(db.Integer, primary_key = True)
    correo_estudiante = db.Column(db.String(100), nullable=False, unique=True)
    nombre_estudiante = db.Column(db.String(100), nullable=False,)
    id_facultad = db.Column(db.Integer, nullable=False, unique=True)
    # created_at = db.Column(db.Datetime(), default=datetime.now())

def get_all(model):
    data = model.query.all()
    return data

def add_instance(model, **kwargs):
    instance = model(**kwargs)
    db.session.add(instance)
    commit_changes()

def delete_instance(model, id):
    model.query.filter_by(id=id).delete()
    commit_changes()

def edit_instance(model, id, **kwargs):
    instance = model.query.filter_by(id=id).all()[0]
    for attr, new_value in kwargs.items():
        setattr(instance, attr, new_value)
    commit_changes()

def commit_changes():
    db.session.commit()

def create_app():
    flask_app = Flask(__name__)
    flask_app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_CONNECTION_URI
    flask_app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    flask_app.app_context().push()
    db.init_app(flask_app)
    db.create_all()
    return flask_app


app = create_app()

# Recibir info sobre todos los estudiantes
@app.route('/', methods=['GET'])
def fetch():
    estudiante = db.get_all(Estudiante)
    all_estudiante = []
    for e in estudiante:
        new_estudiante = {
            "id_estudiante": e.id,
            "correo_estudiante": e.correo_estudiante,
            "nombre_estudiante": e.nombre_estudiante,
            "id_facultad": e.id_facultad
        }

        all_estudiante.append(new_estudiante)
    return json.dumps(all_estudiante), 200

# Añadir nuevo estudiante
@app.route('/add', methods=['POST'])
def add():
    data = request.get_json()
    correo_estudiante = data['correo_estudiante']
    nombre_estudiante = data['nombre_estudiante']
    id_facultad = data['id_facultad']

    db.add_instance(Estudiante, correo_estudiante=correo_estudiante, nombre_estudiante=nombre_estudiante, id_facultad=id_facultad)
    return json.dumps("Added"), 200

# Eliminar estudiante
@app.route('/delete/<id_estudiante>', methods=['DELETE'])
def remove(id_estudiante):
    Estudiante.db.delete_instance(Estudiante.Estudiante, id=id_estudiante)
    return json.dumps("Deleted"), 200

# Editar estudiante
@app.route('/edit/<id_estudiante>', methods=['PATCH'])
def edit(id_estudiante):
    data = request.get_json()
    new_correo_estudiante = data['correo_estudiante']
    new_nombre_estudiante = data['nombre_estudiante']
    db.edit_instance(Estudiante, id=id_estudiante, correo_estudiante=new_correo_estudiante)
    db.edit_instance(Estudiante, id=id_estudiante, nombre_estudiante=new_nombre_estudiante)
    return json.dumps("Edited"), 200
