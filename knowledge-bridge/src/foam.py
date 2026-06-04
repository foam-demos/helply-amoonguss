import foam
import os

foam.init(
    service_name='knowledge-bridge',
    is_production=os.getenv('ENV') == 'production',
    api_key=f"Bearer {os.getenv('FOAM_API_KEY')}"
)