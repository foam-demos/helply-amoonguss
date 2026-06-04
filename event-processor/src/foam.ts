import * as foam from '@foam-ai/node-opentelemetry';
import type { InstrumentationBase } from '@opentelemetry/instrumentation';

const isProduction = process.env.NODE_ENV === 'production';
const apiKey = `Bearer ${process.env.FOAM_API_KEY}`;

foam.init({
  serviceName: 'event-processor',
  isProduction,
  apiKey,
  additionalInstrumentations: [],
});