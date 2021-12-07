const express = require('express');
const controller = require('../controllers/emaillist');

const router = express.Router();
router.route('').options((req, res, next) => {
    console.log('options request!!!');

    res
        .set('Access-Control-Allow-Origin', req.headers.origin )
        .set('Access-Control-Allow-Headers', req.get('Access-Control-Request-Headers'))
        .set('Access-Control-Allow-Methods', req.get('Access-Control-Request-Methods'))
        .set('Access-Control-Allow-Credentials', true)
        .send();
});

router.route('').get(controller.readAll);
router.route('').post(controller.create);

module.exports = router;