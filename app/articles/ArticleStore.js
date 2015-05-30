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

}

let articleStore = new ArticleStore();

AppDispatcher.register( ({action, source}) => {

  let {actionType, actionData} = action;

  switch (actionType) {

    case 'TOP_STORIES:LOADED':
      articleStore.setArticles(actionData);
      articleSstore.emitArticlesChange();
      break;

    default:
      return true;

  }

});

export default articleStore;
