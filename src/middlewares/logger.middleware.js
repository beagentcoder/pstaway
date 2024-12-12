import winston from "winston";


export const logger =winston.createLogger({
    level: 'info',
    format:winston.format.json(),
    defaultMeta:{service :'request-logging'},
    transports:[
      new winston.transports.File({filename:'log.txt'})
    ]
  })
  const loggerMiddleware = async (req, res, next) => {

    if (req.url === '/api/signin' ||req.url === '/api/signup') {
      return next(); // Skip logging for userRouter requests
  }
    const logData = ` ${new Date().toString()} --${req.url} - ${JSON.stringify(req.body)}`;
    logger.info(logData);
    next();
  };
  export default loggerMiddleware;
  