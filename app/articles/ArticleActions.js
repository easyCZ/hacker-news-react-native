import HackerNews from '../api/HackerNews';
import AppDispatcher from '../AppDispatcher';


let _onStoriesReceive = (stories) => {
  console.log('Received stories', stories);
  AppDispatcher.handleView({
    actionType: 'TOP_STORIES:LOADED',
    data: stories
  });
}

let _onStoriesFail = (error) => {
  console.log('Failed to get stories', error);
  AppDispatcher.handleView({
    actionType: 'TOP_STORIES:FAILED',
    data: error
  });
}

class ArticleActions {

  static subscribeToArticles() {
    HackerNews
      .topStories()
      .then(r => r.json(), e => _onStoriesFail(e))
      .then(stories => _onStoriesReceive(stories));
  }


}

export default ArticleActions;
