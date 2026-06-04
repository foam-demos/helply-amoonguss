import * as foam from '@foam-ai/node-opentelemetry';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import type { InstrumentationBase } from '@opentelemetry/instrumentation';

const isProduction = process.env.NODE_ENV === 'production';
const apiKey = `Bearer ${process.env.FOAM_API_KEY}`;

foam.init({
  serviceName: 'realtime-gateway',
  isProduction,
  apiKey,
  additionalInstrumentations: [new ExpressInstrumentation({}) as unknown as InstrumentationBase],
});