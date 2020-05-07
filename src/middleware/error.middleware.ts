import { Request, Response, NextFunction, Application } from 'express';

import { IErrorInterface } from '../interfaces';

const catchErrors = (app: Application) => {
  app.use((err: IErrorInterface.ICustomError, req: Request, res: Response, next: NextFunction) => {
    const statusCode: number = err.statusCode || 500;
    const message: string | void = err.message;
    res.status(statusCode).send(message);
  });
};

export default catchErrors;
