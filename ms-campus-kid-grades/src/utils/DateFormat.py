import sys
sys.dont_write_bytecode = True

import datetime

class DateFormat():
    
    @classmethod
    def convert_date(self, date):
        return datetime.datetime.strftime(date, '%m-%d-%Y %T:%M%p')