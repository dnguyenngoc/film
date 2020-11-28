from wtforms import Form, BooleanField, StringField, PasswordField, validators, IntegerField


class FetchByName(Form):
    name = StringField('name', [validators.DataRequired()])

class FetchById(Form):
    id = IntegerField('id', [validators.DataRequired()])

