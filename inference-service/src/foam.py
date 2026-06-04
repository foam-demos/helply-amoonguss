import foam
import os

foam.init(
    service_name='inference-service',
    is_production=os.getenv('DJANGO_ENV') == 'production',
    api_key=f"Bearer {os.getenv('FOAM_API_KEY')}"
)