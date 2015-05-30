import {fetch} from 'fetch';

let HACKER_NEWS_API_URL = "https://hacker-news.firebaseio.com";
let TOP_STORIES = '/v0/topstories.json';
let STORY = '/v0/item/';

class HackerNews {

    static topStories() {
        return fetch(HACKER_NEWS_API_URL + TOP_STORIES);
    }

    // static story(storyId) {
    //     return API.child(STORY + storyId);
    // }

}

export default HackerNews;
