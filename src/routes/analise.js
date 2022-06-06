var express = require("express");
var router = express.Router();

var analiseController = require("../controllers/analiseController");


router.get("/listar", function (req, res) {
    analiseController.listarUsuario(req, res);
});

router.get("/listarPost", function (req, res) {
    analiseController.listarPosts(req, res);
});

router.get("/mediaPost", function (req, res) {
    analiseController.mediaPost(req, res);
});

router.get("/maxPost", function (req, res) {
    analiseController.maxPost(req, res);
});

router.get("/maxComent", function (req, res) {
    analiseController.maxComent(req, res);
});



module.exports = router;