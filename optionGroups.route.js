const express = require('express');
const { getRules, updateRules, createRules } = require('../middlewares/rules/optionGroups');
const validator = require('../middlewares/validator');
const OptionGroupsController = require('../controllers/OptionGroupsController');
const router = express.Router();

router.route('/').get(
    getRules,
    validator.errorsCheck,
    OptionGroupsController.get
);

router.route('/create').post(
    createRules,
    validator.errorsCheck,
    OptionGroupsController.create
);
router.route('/update/:id').patch(
    validator.idCheck('OptionGroup'),
    updateRules,
    validator.errorsCheck,
    OptionGroupsController.update
);

router.route('/delete/:id').delete(
    validator.idCheck('OptionGroup'),
    validator.errorsCheck,
    OptionGroupsController.remove
);

module.exports = router;
