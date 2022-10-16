import sys
sys.dont_write_bytecode = True

from database.db import get_connection
from .entities.Grade import Grades

class gradeModel():
    
    @classmethod
    def get_grades(self):
        try:
            connection = get_connection()
            grs = []
            
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM "Grades"')
                resultset = cursor.fetchall()
                
                for row in resultset:
                    gr = Grades(row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7]) 
                    grs.append(gr.to_JSON())
                    
            connection.close()
            return grs
        except Exception as ex:
            raise Exception(ex)
    
    @classmethod
    def get_grade(self, id):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM "Grades" WHERE id = %s', (id,))
                row= cursor.fetchone()
                
                gr = None
                if row != None:
                    gr = Grades(row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7]) 
                    gr = gr.to_JSON()
                    
            connection.close()
            return gr
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def add_grade(self, gr):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('INSERT INTO "Grades" (id, enrollment, description, grade, percentage, "isActive", "createdAt", "updatedAt") VALUES (%s, %s, %s, %s, %s, %s, %s, %s)', (gr.id, gr.enrollment, gr.description, gr.grade, gr.percentage, gr.isActive, gr.createdAt, gr.updatedAt))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def update_grade(self, gr):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('''UPDATE "Grades" SET enrollment= %s, description= %s, grade= %s, percentage= %s, "isActive"= %s, "createdAt"= %s, "updatedAt"= %s
                                WHERE id = %s''', (gr.enrollment, gr.description, gr.grade, gr.percentage, gr.isActive, gr.createdAt, gr.updatedAt, gr.id))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def delete_grade(self, gr):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute('DELETE FROM "Grades" WHERE id = %s', (gr.id,))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)