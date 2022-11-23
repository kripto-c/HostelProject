const { Router} = require('express');
const { postFaq, getFaq, updateFaq, deleteFaq } = require('./controller');
const route = Router();

route.post('/', postFaq);

route.get('/', getFaq)

route.post('/faqEdit', updateFaq)

route.get('/deleteFaq', deleteFaq)

module.exports = route;