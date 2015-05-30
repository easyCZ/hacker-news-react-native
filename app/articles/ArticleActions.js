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

let _onStoryReceive = (story) => {
  console.log('Received story', story.id, story);
  AppDispatcher.handleView({
    actionType: 'TOP_STORY:LOADED',
    data: story
  });
}

let _onStoryFail = (id, error) => {
  console.log('Failed to fetch story #' + id, error);
  AppDispatcher.handleView({
    actionType: 'TOP_STORY:FAILED',
    data: error
  });
}

class ArticleActions {

  static getArticles() {
    HackerNews
      .topStories()
      .then(r => r.json(), e => _onStoriesFail(e))
      .then(stories => _onStoriesReceive(stories));
  }

  static getArticle(id) {
    HackerNews
      .article(id)
      .then(r => r.json(), e => _onStoryFail(id, e))
      .then(story => _onStoryReceive(story));
  }




}

export default ArticleActions;
