const { Router} = require('express');
const { postFaq, getFaq, updateFaq, deleteFaq } = require('./controller');
const route = Router();

route.get('/', getFaq)

route.post('/new', postFaq);

route.post('/faqEdit', updateFaq)

route.get('/deleteFaq', deleteFaq)

module.exports = route;