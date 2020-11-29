from wtforms import Form, BooleanField, StringField, PasswordField, validators


class RegistrationRequestForm(Form):
    email = StringField('email', [validators.DataRequired()])
    password = StringField('password', [validators.DataRequired()])

class LoginRequestForm(Form):
    email = StringField('email', [validators.DataRequired()])
    password = StringField('password', [validators.DataRequired()])

class FreshTokenRequestForm(Form):
    token = StringField('token', [validators.DataRequired()])