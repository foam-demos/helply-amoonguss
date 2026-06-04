# frozen_string_literal: true

require 'foam/opentelemetry'

Foam.init(
  service_name: 'helply-api',
  is_production: Rails.env.production?,
  api_key: "Bearer #{ENV['FOAM_API_KEY']}",
  instrumentations: [
    OpenTelemetry::Instrumentation::Rails,
    OpenTelemetry::Instrumentation::ActiveRecord,
    OpenTelemetry::Instrumentation::Sidekiq
  ]
)