const express = require('express');
const drinksRoutes = require('./drinks.route');
const drinkOptionsRoutes = require('./drinkOptions.route');
const optionGroupsRoutes = require('./optionGroups.route');
const router = express.Router();

router.use('/drinks', drinksRoutes);
router.use('/drink/option-groups', optionGroupsRoutes);
router.use('/drink/option-groups/options', drinkOptionsRoutes);

module.exports = router;
