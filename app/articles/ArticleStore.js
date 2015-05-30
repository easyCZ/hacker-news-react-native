import AppDispatcher from '../AppDispatcher';
import events from 'events';


let _articles = [];
let _articleDetails = {};

class ArticleStore extends events.EventEmitter {

  constructor() {
    super();
  }


  getArticles() {
    return _articles;
  }

  setArticles(articles) {
    _articles = articles;
  }

  emitArticlesChange() {
    this.emit('ARTICLES_CHANGE', this.getArticles());
  }

  addArticlesChangeListener(callback) {
    this.on('ARTICLES_CHANGE', callback);
  }

  removeArticlesChangeListener(callback) {
    this.removeListener('ARTICLES_CHANGE', callback);
  }


  getArticle(id) {
    return _articleDetails[id];
  }

  setArticle(id, article) {
    _articleDetails[id] = article;
  }

  emitArticleChange(id) {
    this.emit('ARTICLE_CHANGE:' + id, this.getArticle(id))
  }

  addArticleChangeListener(id, callback) {
    this.on('ARTICLE_CHANGE:' + id, callback);
  }

  removeArticleChangeListener(id, callback) {
    this.removeListener('ARTICLE_CHANGE:' + id, callback);
  }

}

let articleStore = new ArticleStore();

AppDispatcher.register( ({action, source}) => {

  let {actionType, data} = action;

  switch (actionType) {

    case 'TOP_STORIES:LOADED':
      articleStore.setArticles(data);
      articleStore.emitArticlesChange();
      break;

    case 'TOP_STORY:LOADED':
      articleStore.setArticle(data.id, data);
      articleStore.emitArticleChange(data.id);
      break;

    default:
      return true;

  }

});

export default articleStore;
