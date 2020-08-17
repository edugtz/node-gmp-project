import userRepository from '../repositories/userRepository';

import Joi from '@hapi/joi';
import { createValidator } from 'express-joi-validation';

const validator = createValidator({});

const userValidationSchema = Joi.object({
    login: Joi.string().required(),
    password: Joi.string()
        .pattern(new RegExp('[^A-Za-z0-9]+'))
        .required(),
    age: Joi.number().integer().min(4).max(130).required()
});

const userValidation = {
    validateExistingUser(req, res, next) {
        const user = userRepository.getUserByLogin(req.body.login);

        if (!user) return next();

        return res.status(400).send('That login is already in use');
    },
    validateBodyParams: validator.body(userValidationSchema)
};

module.exports = userValidation;
