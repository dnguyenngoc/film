from marshmallow import Schema, fields, validates, ValidationError

def is_interger(s):
    try: 
        int(s)
        return True
    except ValueError:
        return False

def page_validates(page):
    if page == None or is_interger(page) == False:
        return False
    return True

# class FetchPhimLe(Schema):
#     """
#     Parameters:
#      - page (int) not None
#     """
#     page = fields.Int(required=True)

#     @validates('page')
#     def page_not_none(value):
#         if value == None:
#             raise ValidationError("Page not None")