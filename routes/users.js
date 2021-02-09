const express = require('express');
const Joi = require('joi');
const router = express.Router();

const users = require('../users');

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  age: Joi.number().greater(0)
});

router.get('/', (req, res) => {
  const {orderBy} = req.query;

  res.send({users, orderBy});
});

router.get('/:id', (req, res) => {
  const {id} = req.params;

  res.send(users.get(id));
});

router.post('/', (req, res) => {
  const {name, age} = req.body;

  const result = schema.validate({name, age});
  if (result.error) return res.status(400).send(result.error.details[0].message);

  const user = users.create(name, age);

  res.send(user);
});

router.put('/:id', (req, res, next) => {
  const {id} = req.params;
  const {name = '', age = ''} = req.body;

  const {user, err} = users.update(id, age, name);
  if (err) return next();

  res.send(user);
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;

  const user = users.delete(id);

  res.send(user);
});

module.exports = router;