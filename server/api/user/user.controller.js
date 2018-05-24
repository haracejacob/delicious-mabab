'use strict';

import { User } from '../../config/db';
import config from '../../config/environment';
import jwt from 'jsonwebtoken';

/**
 * Get list of users
 * restriction: 'admin'
 */
export async function index(req, res) {
  const users = await User.findAll({
    attributes: [
      '_id',
      'name',
      'email',
      'role',
      'provider'
    ]
  });

  res.status(200).json(users);
}

/**
 * Creates a new user
 */
export async function create(req, res) {
  const newUser = User.build(req.body);
  newUser.setDataValue('role', 'user')

  const user = await newUser.save()

  const token = jwt.sign({ _id: user._id }, config.secrets.session, {
    expiresIn: 60 * 60 * 5
  });

  res.status(201).json({ token });
}

/**
 * Get a single user
 */
export async function show(req, res) {
  const userId = req.params.id;

  const user = await User.find({
    where: {
      _id: userId
    }
  })

  if (!user) {
    return res.status(404).end()
  }
  res.json(user.profile)
}

/**
 * Deletes a user
 * restriction: 'admin'
 */
export async function destroy(req, res) {
  await User.destroy({ where: { _id: req.params.id } })

  res.status(204).end();
}

/**
 * Change a users password
 */
export async function changePassword(req, res) {
  const userId = req.user._id;
  const oldPass = String(req.body.oldPassword);
  const newPass = String(req.body.newPassword);

  const user = await User.find({
    where: {
      _id: userId
    }
  })

  const authResult = await user.authenticate(oldPass)
  if (authResult) {
    user.password = newPass
    await user.save()

    res.status(204).end()
  } else {
    res.status(403).end()
  }
}

/**
 * Get my info
 */
export async function me(req, res) {
  const userId = req.user._id;

  const user = await User.find({
    where: {
      _id: userId
    },
    attributes: [
      '_id',
      'name',
      'email',
      'role'
    ]
  })
  if (!user) {
    return res.status(401).end();
  }
  res.json(user);
}

/**
 * Authentication callback
 */
export function authCallback(req, res) {
  res.redirect('/');
}
