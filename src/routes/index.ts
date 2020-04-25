import express from 'express';

const routeRegistry = (app: express.Application) => {
  app.get('/', (req, res, next) => {
    res.status(200).send(`hello world`)
  });
};

export default routeRegistry;