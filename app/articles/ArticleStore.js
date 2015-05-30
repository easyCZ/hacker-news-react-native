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

}

let articleStore = new ArticleStore();

AppDispatcher.register( ({action, source}) => {

  let {actionType, data} = action;

  switch (actionType) {

    case 'TOP_STORIES:LOADED':
      articleStore.setArticles(data);
      articleStore.emitArticlesChange();
      break;

    default:
      return true;

  }

});

export default articleStore;
