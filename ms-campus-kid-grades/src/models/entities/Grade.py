import sys
sys.dont_write_bytecode = True

from utils.DateFormat import DateFormat
#from datetime import datetime
#import flask_sqlalchemy

#db = flask_sqlalchemy.SQLAlchemy()

class Grades():
#class Grades(db.Model):

    #__tablename__ = 'estudiante'
    #id = db.Column(db.Integer, primary_key = True)
    #enrollment = db.Column(db.Integer, db.ForeignKey('id'))
    #escription = db.Column(db.String(100))
    #grade = db.Column(db.Integer)
    #percentage = db.Column(db.Integer)
    #isActive = db.Column(db.Boolean(), nullable=False)
    #createdAt = db.Column(db.DateTime(), default=datetime.now())
    #updatedAt = db.Column(db.DateTime(), default=datetime.now())
    #CONSTRAINT Grades_enrollment_fkey FOREIGN KEY(enrollment)
    #    REFERENCES Enrollments(id)

    def __init__(self, id, enrollment=None, description=None, grade=None, percentage=None, isActive=None, createdAt=None, updatedAt=None) -> None:
        self.id = id
        self.enrollment = enrollment
        self.description = description
        self.grade = grade
        self.percentage = percentage
        self.isActive = isActive
        self.createdAt = createdAt
        self.updatedAt = updatedAt
        
    def to_JSON(self):
        return {
            'id': self.id,
            'enrollment': self.enrollment,
            'description': self.description,
            'grade': self.grade,
            'percentage': self.percentage, 
            'isActive': self.isActive, 
            'createdAt': DateFormat.convert_date(self.createdAt),
            'updatedAt': DateFormat.convert_date(self.updatedAt)
        }