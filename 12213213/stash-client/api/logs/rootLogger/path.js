"use strict";

// Third Party
const include = require("include")(__dirname);

// Project
const logsPath = include("api/logs/path");

module.exports = levelName => `${logsPath()}/rootLogger/${levelName || ""}`;
