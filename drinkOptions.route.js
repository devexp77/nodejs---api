const express = require('express');
const { getRules, updateRules, createRules } = require('../middlewares/rules/drinkOptions');
const validator = require('../middlewares/validator');
const DrinkOptionsController = require('../controllers/DrinkOptionsController');

const router = express.Router();

router.route('/').get(
    getRules,
    validator.errorsCheck,
    DrinkOptionsController.get
);

router.route('/create').post(
    createRules,
    validator.errorsCheck,
    DrinkOptionsController.create
);
router.route('/update/:id').patch(
    validator.idCheck('DrinkOption'),
    updateRules,
    validator.errorsCheck,
    DrinkOptionsController.update
);

router.route('/delete/:id').delete(
    validator.idCheck('DrinkOption'),
    validator.errorsCheck,
    DrinkOptionsController.remove
);

module.exports = router;
