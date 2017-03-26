'use strict';

const router = require('express').Router();

const HttpError = require('../HttpError');
const Note = require('./note.model');
const User = require('../users/user.model')

router.param('id', function (req, res, next, id) {
  Note.findById(id)
  .then(function (note) {
    if (!note) throw HttpError(404);
    req.note = note;
    next();
  })
  .catch(next);
});

router.get('/', function (req, res, next) {
  Note.findAll({ include: [{model: User, as: 'author'}] })
  .then(function (notes) {
    res.json(notes);
  })
  .catch(next);
});

router.post('/', function (req, res, next) {
  console.log('gonna creat this note', req.body)
  Note.create(req.body)
  .then(function (note) {
    return note.reload({include: [{model: User, as: 'author'}]});
  })
  .then(function (note) {
    res.status(201).json(note);
  })
  .catch(next);
});

router.get('/:id', function (req, res, next) {
  req.note.reload({include: [{model: User, as: 'author'}]})
  .then(function (note) {
    res.json(note);
  })
  .catch(next);
});

router.put('/:id', function (req, res, next) {
  req.note.update(req.body)
  .then(function (note) {
    return note.reload({include: [{model: User, as: 'author'}]});
  })
  .then(function (note) {
    res.json(note);
  })
  .catch(next);
});

router.delete('/:id', function (req, res, next) {
  req.note.destroy()
  .then(function () {
    res.status(204).end();
  })
  .catch(next);
});

module.exports = router;
