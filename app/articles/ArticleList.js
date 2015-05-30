import React, {ListView, Text} from 'react-native';
import ArticleListStyleSheet from './ArticleListStyleSheet';
import HackerNews from '../api/HackerNews';

import ArticleStore from './ArticleStore';

console.log('ArticleStore', ArticleStore);


class ArticleList extends React.Component {

  constructor(props) {
    super(props);

    this.articlesDataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });



    this.updateArticles();
    // HackerNews
    //   .topStories()
    //   .on('value', (stories) => this.onStoriesUpdate(stories.val()))

  }

  updateArticles() {
    console.log('Update articles', ArticleStore.getArticles());
    this.setState({
      articles: this.articlesDataSource.cloneWithRows(ArticleStore.getArticles())
    });
  }

  onStoriesUpdate(stories) {
    this.setState({
      stories: this.DataSource.cloneWithRows(stories)
    });
  }

  render() {

    if (!this.state) return (<Text>Loading...</Text>);

    return (
      <ListView
        dataSource={this.state.stories}
        initialListSize="36"
        renderRow={(rowData) => <Text>{rowData}</Text>} />
    )

  }


}


module.exports = ArticleList;
