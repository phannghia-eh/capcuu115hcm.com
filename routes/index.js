var express = require('express');
var router = express.Router();

const sidebarItems = [
  {link: "/bac-si-dieu-duong-vat-ly-tri-lieu", active: 1},
  {link: "/xe-cuu-thuong", active: 2},
  {link: "/thue-oxy-may-tho", active: 3},
  {link: "/thu-vien-cong-tac", active: 4},
  {link: "/lien-he-hoi-dap", active: 5},
]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Cấp cứu 115'});
});

router.get('/bac-si-dieu-duong-vat-ly-tri-lieu', function (req, res, next) {
  res.render('bac-si-dieu-duong-vat-ly-tri-lieu', {
    title: 'bac-si-dieu-duong-vat-ly-tri-lieu',
    active: 'bac-si-dieu-duong-vat-ly-tri-lieu'
  })
})

router.get('/xe-cuu-thuong', function (req, res, next) {
  res.render('xe-cuu-thuong', {title: 'xe-cuu-thuong', active: 'xe-cuu-thuong'})
})

router.get('/thue-oxy-may-tho', function (req, res, next) {
  res.render('thue-oxy-may-tho', {title: 'thue-oxy-may-tho', active: 'thue-oxy-may-tho'})
})

router.get('/thu-vien-cong-tac', function (req, res, next) {
  res.render('thu-vien-cong-tac', {title: 'thu-vien-cong-tac', active: 'thu-vien-cong-tac'})
})

router.get('/lien-he-hoi-dap', function (req, res, next) {
  res.render('lien-he-hoi-dap', {title: 'lien-he-hoi-dap', active: 'lien-he-hoi-dap'})
})

module.exports = router;
