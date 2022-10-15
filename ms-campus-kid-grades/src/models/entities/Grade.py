import sys
sys.dont_write_bytecode = True

from utils.DateFormat import DateFormat

class Grades():

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