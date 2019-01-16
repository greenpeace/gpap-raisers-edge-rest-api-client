const winston = require('winston');
const { LoggingWinston } = require('@google-cloud/logging-winston');

const { Logger } = winston;
const { Console } = winston.transports;

// Creates a Winston Stackdriver Logging client
const loggingWinston = new LoggingWinston();

const logger = winston.createLogger({
    transports: [
        loggingWinston, // Log to stackdriver
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new Console({
        format: winston.format.simple(),
    }));
}

module.exports = logger;
