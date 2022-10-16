import sys
sys.dont_write_bytecode = True

from decouple import config
class Config:
    SECRET_KEY = config('SECRET_KEY')
class DevelopmentConfig(Config):
    DEBUG = True

config = {
    'development': DevelopmentConfig
}