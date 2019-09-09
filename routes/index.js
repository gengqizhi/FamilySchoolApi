const Router = require('koa-router');
const ArticleController = require('../controllers/article');

const router = new Router({
  prefix: '/api/v1'
});

/**
 * 文章接口
 */
//创建文章: title && author && content && category
router.post('/article/create',ArticleController.create);
//获取文章详情: id
router.get('/article/get/:id',ArticleController.detail);

module.exports = router;