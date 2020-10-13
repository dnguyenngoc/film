class LoginResponse:
    def __init__(
        self, access_token: str, 
        fresh_token: str, 
        token_type: str = "bearer"
    ):
        self.access_token = access_token
        self.fresh_token = fresh_token
        self.token_type = token_type

    def json(self):
        return dict(
            access_token=self.access_token, 
            fresh_token=self.fresh_token,
            token_type=self.token_type
        )