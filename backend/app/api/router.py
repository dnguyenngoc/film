from app.api.resources.test_resources import router as test_resources
from app.api.resources.account_resources import router as account_resources

def get_router():
    router = []
    router.append(test_resources)
    router.append(account_resources)
    return router