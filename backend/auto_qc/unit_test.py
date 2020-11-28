import requests
import unittest

class TestStringMethods(unittest.TestCase):

    def test_login_access_token(self):
        response = requests.post("http://localhost:4200/accounts/login", data={"email":"duynguyenngoc@hotmail.com", "password":"xxx"})
        data = response.json()
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data["access_token"], "token_is_have_bean_face")
        
if __name__ == "__main__":
    unittest.main(verbosity=2) 