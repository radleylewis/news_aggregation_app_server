import { Request, Response, NextFunction, Application } from 'express';

import { ICustomError } from '../interfaces';

const catchErrors = (app: Application) => {
  app.use((err: ICustomError, req: Request, res: Response, next: NextFunction) => {
    const statusCode: number = err.statusCode || 500;
    const message: string | void = err.message;
    res.status(statusCode).send(message);
  });
};

export default catchErrors;
