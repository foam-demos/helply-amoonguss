# Helply API

Main Rails 7 monolith serving API endpoints, admin dashboard, and core business logic for ticket ingestion, AI orchestration, and outcome tracking. Sidekiq workers handle async processing.

**Stack:** Ruby 3.2, Rails 7.0, PostgreSQL 15, Redis, Sidekiq

**Local setup:** `bundle install && bin/rails db:setup && bin/dev`