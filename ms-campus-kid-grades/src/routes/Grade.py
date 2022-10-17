import sys
sys.dont_write_bytecode = True

from flask import Blueprint, jsonify, request

# Entities
from models.entities.Grade import Grades
# Models
from models.GradeModel import gradeModel

main = Blueprint('grades_blueprint', __name__)

@main.route('/', methods=['GET'])
def get_grades():
    try:
        grs = gradeModel.get_grades()
        return jsonify(grs)
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    
@main.route('/<id>', methods=['GET'])
def get_grade(id):
    try:
        gr = gradeModel.get_grade(id)
        if gr != None:
            return jsonify(gr)
        else:
            return jsonify({}), 404
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/', methods=['POST'])
def add_grade():
    try:
        id = request.json['id']
        enrollment = request.json['enrollment']
        description = request.json['description']
        grade = request.json['grade']
        percentage = request.json['percentage']
        isActive = request.json['isActive']
        createdAt = request.json['createdAt']
        updatedAt = request.json['updatedAt']
        gr = Grades(id, enrollment, description, grade, percentage, isActive, createdAt,updatedAt)
        
        affected_rows = gradeModel.add_grade(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Error al Insertar"}), 500
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/<id>', methods=['PUT'])
def update_grade(id):
    try:
        enrollment = request.json['enrollment']
        description = request.json['description']
        grade = request.json['grade']
        percentage = request.json['percentage']
        isActive = request.json['isActive']
        createdAt = request.json['createdAt']
        updatedAt = request.json['updatedAt']
        gr = Grades(id, enrollment, description, grade, percentage, isActive, createdAt,updatedAt)
        
        affected_rows = gradeModel.update_grade(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Ningún grade actualizado."}), 404
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
    

@main.route('/<id>', methods=['DELETE'])
def delete_grade(id):
    try:
        gr = Grades(id)
        
        affected_rows = gradeModel.delete_grade(gr)

        if affected_rows == 1:
            return jsonify(gr.id)
        else:
            return jsonify({'message': "Ningún grade borrado."}), 404
        
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500