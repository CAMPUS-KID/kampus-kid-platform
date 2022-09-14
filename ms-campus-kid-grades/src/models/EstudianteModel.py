from database.db import get_connection
from .entities.Estudiante import Estudiante

class EstudianteModel():
    
    @classmethod
    def get_estudiantes(self):
        try:
            connection = get_connection()
            estudiantes = []
            
            with connection.cursor() as cursor:
                cursor.execute("SELECT * FROM student")
                resultset = cursor.fetchall()
                
                for row in resultset:
                    estudiante = Estudiante(row[0], row[1], row[2], row[3]) 
                    estudiantes.append(estudiante.to_JSON())
                    
            connection.close()
            return estudiantes
        except Exception as ex:
            raise Exception(ex)
    
    @classmethod
    def get_estudiante(self, id):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute("SELECT * FROM student WHERE id = %s", (id,))
                row= cursor.fetchone()
                
                estudiante = None
                if row != None:
                    estudiante = Estudiante(row[0], row[1], row[2], row[3]) 
                    estudiante = estudiante.to_JSON()
                    
            connection.close()
            return estudiante
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def add_estudiante(self, estudiante):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute("INSERT INTO student (id, email, name, facultyId) VALUES (%s, %s, %s, %s)", (estudiante.id_estudiante, estudiante.correo_estudiante, estudiante.nombre_estudiante, estudiante.id_facultad))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def update_estudiante(self, estudiante):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute("""UPDATE student SET email = %s, name = %s, facultyId = %s
                                WHERE id = %s""", (estudiante.correo_estudiante, estudiante.nombre_estudiante, estudiante.id_facultad, estudiante.id_estudiante))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)
        
    
    @classmethod
    def delete_estudiante(self, estudiante):
        try:
            connection = get_connection()
            
            with connection.cursor() as cursor:
                cursor.execute("DELETE FROM student WHERE id = %s", (estudiante.id_estudiante,))
                affected_rows= cursor.rowcount
                connection.commit()
                    
            connection.close()
            return affected_rows
        except Exception as ex:
            raise Exception(ex)