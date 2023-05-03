const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.student = require("./student.model");
db.faculty = require("./faculty.model");
db.role = require("./role.model");
db.courses = require("./courses.model");
db.requests = require("./requests.model");
db.admin = require("./admin.model");

db.ROLES = ["student", "faculty", "hod", "admin"];

module.exports = db;