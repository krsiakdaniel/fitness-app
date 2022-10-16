import pino from "pino";

export const logger = pino({
  name: 'fitness-tracker-api',
  level: 'debug'
});