const router = require('express').Router();
const { body } = require('express-validator/check');
const { errorsCheck } = require('../middlewares/validator');
const Auth = require('../controllers/Auth');

router.route('/login').post([
    body('email')
        .exists().withMessage('Email field is required')
        .isEmail().withMessage('Email field must be a valid email')
        .trim()
        .normalizeEmail(),
    body('password').exists().isString({min: 8, max: 16}).withMessage('Password field is required')
],
    errorsCheck,
    Auth.login
);

module.exports = router;
