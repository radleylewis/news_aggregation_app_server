import express from 'express';

const register = (app: express.Application) => {
  app.get('/', (req, res, next) => {
    res.status(200).render(`<p>hello world</p>`)
  });
};

module.exports = register;