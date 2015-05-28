import Firebase from 'firebase';


let HACKER_NEWS_API_URL = "https://hacker-news.firebaseio.com";
let TOP_STORIES = 'v0/topstories';
let STORY = 'v0/item/';
let API = new Firebase(HACKER_NEWS_API_URL);

class HackerNews {

    static topStories() {
        return API.child(TOP_STORIES);
    }

    static story(storyId) {
        return API.child(STORY + storyId);
    }

}

export default HackerNews;
