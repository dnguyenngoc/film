from app.api.resources.test_resources import router as test_api
from app.api.resources.account_resources import router as accounts

router = []

# TEST API ROUTNG
router.append(test_api)
router.append(accounts)