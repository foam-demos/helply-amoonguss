# Inference Service

Python/Django microservice handling AI model inference, resolution confidence scoring, and ML pipeline orchestration. Consumes classification requests from Kafka and returns predictions.

**Stack:** Python 3.11, Django 4.2, Celery, PyTorch, Transformers

**Local setup:** `pip install -r requirements.txt && python manage.py migrate && python manage.py runserver`