import json
from flask import Flask
from flask import request
import flask_sqlalchemy

#DATABASE_CONNECTION_URI = f'postgresql+psycopg2://{user}:{password}@{host}:{port}/{database}'
DATABASE_CONNECTION_URI = 'postgresql+psycopg2://root:4006@host.docker.internal:5432/db_grade'

db = flask_sqlalchemy.SQLAlchemy()

class Student(db.Model):
    __tablename__ = 'student'
    id = db.Column(db.Integer, primary_key = True)
    email_student = db.Column(db.String(100), nullable=False, unique=True)
    name_student = db.Column(db.String(100), nullable=False,)
    id_faculty = db.Column(db.Integer, nullable=False, unique=True)
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

# fetch info
@app.route('/', methods=['GET'])
def fetch():
    student = db.get_all(Student)
    all_student = []
    for e in student:
        new_student = {
            "id_student": e.id,
            "email_student": e.email_student,
            "name_student": e.name_student,
            "id_faculty": e.id_faculty
        }

        all_student.append(new_student)
    return json.dumps(all_student), 200

# Add new student
@app.route('/add', methods=['POST'])
def add():
    data = request.get_json()
    email_student = data['email_student']
    name_student = data['name_student']
    id_faculty = data['id_faculty']

    db.add_instance(Student, email_student=email_student, name_student=name_student, id_faculty=id_faculty)
    return json.dumps("Added"), 200

# Eliminar student
@app.route('/delete/<id_student>', methods=['DELETE'])
def remove(id_student):
    Student.db.delete_instance(Student, id=id_student)
    return json.dumps("Deleted"), 200

# Editar student
@app.route('/edit/<id_student>', methods=['PATCH'])
def edit(id_student):
    data = request.get_json()
    new_email_student = data['email_student']
    new_name_student = data['nombre_estudiante']
    new_id_faculty = data['id_faculty']
    db.edit_instance(Student, id=id_student, email_student=new_email_student)
    db.edit_instance(Student, id=id_student, name_student=new_name_student)
    db.edit_instance(Student, id=id_student, id_faculty=new_id_faculty)
    return json.dumps("Edited"), 200
