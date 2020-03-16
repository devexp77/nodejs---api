const express = require('express');
const { getRules, updateRules, createRules } = require('../middlewares/rules/drink');
const validator = require('../middlewares/validator');
const resizeImage = require('../middlewares/resizeImage');
const DrinksController = require('../controllers/DrinksController');
const router = express.Router();

router.route('/').get(
    getRules,
    validator.errorsCheck,
    DrinksController.get
);

router.route('/create').post(
    validator.multerErrorsCheck,
    createRules,
    validator.errorsCheck,
    resizeImage,
    DrinksController.create
);

router.route('/update/:id').patch(
    validator.idCheck('Drink'),
    validator.multerErrorsCheck,
    updateRules,
    validator.errorsCheck,
    resizeImage,
    DrinksController.update
);

router.route('/delete/:id').delete(
    validator.idCheck('Drink'),
    validator.errorsCheck,
    DrinksController.remove
);


module.exports = router;
