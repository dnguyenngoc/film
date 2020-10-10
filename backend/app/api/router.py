from app.api.resources.test_api import router as test_api
from app.api.resources.accounts import router as accounts


router = []

# TEST API ROUTNG
router.append(test_api)

router.append(accounts)