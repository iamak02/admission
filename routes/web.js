const express = require('express');
const AdminController = require('../controllers/AdminController');
const FrontController = require('../controllers/FrontController');
const upload = require('../middleware/ImageMiddleware');
const router = express.Router()

// FrontController
router.get("/", FrontController.login);
router.get("/signup", FrontController.signup);
router.post("/user_insert", FrontController.user_insert);
router.post("/verify_login", FrontController.verify_login);

// AdminController
router.get("/dashboard", AdminController.dashboard);
router.get("/registration", AdminController.registration);
router.get("/display", AdminController.display);
router.get("/view/:id", AdminController.view);
router.post("/registration_insert", upload, AdminController.registration_insert);
router.get("/edit/:id", AdminController.registration_edit);
router.post("/registration_update/:id", upload, AdminController.registration_update);

module.exports = router