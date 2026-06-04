# Event Processor

Node.js/TypeScript service consuming Kafka events for async ticket enrichment, CRM sync (Stripe, Gong, Salesforce), and outcome reporting.

**Stack:** Node.js 20, TypeScript 5.3, KafkaJS, Bull (Redis queue)

**Local setup:** `npm install && npm run build && npm start`