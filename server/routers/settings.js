var express = require('express');
const settings = require("../config/settings.json");

module.exports = function (app) {
    var router = express.Router();

    router.get('/', function (req, res, next) {
        var _settings = settings;
        _settings.DASHBOARD_PREFIX = process.env.DASHBOARD_PREFIX || settings.DASHBOARD_PREFIX;
        _settings.DASHBOARD_TITLE = process.env.DASHBOARD_TITLE || settings.DASHBOARD_TITLE;
        _settings.CLOUD_TITLE = process.env.CLOUD_TITLE || settings.CLOUD_TITLE;
        _settings.CLOUD_URL = process.env.CLOUD_URL || settings.CLOUD_URL;
        res.json(_settings);
    });

    app.use("/settings", router);
};


