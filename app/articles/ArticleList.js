import React, {ListView, Text} from 'react-native';
import ArticleListStyleSheet from './ArticleListStyleSheet';
import HackerNews from '../api/HackerNews';

import ArticleStore from './ArticleStore';
import ArticleActions from './ArticleActions';

console.log('ArticleStore', ArticleStore);


class ArticleList extends React.Component {

  constructor(props) {
    super(props);

    this.articlesDataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
  }

  componentWillMount() {
    this.updateArticles();
  }

  componentDidMount() {
    ArticleStore.addArticlesChangeListener(this.updateArticles.bind(this));
    ArticleActions.subscribeToArticles();
  }

  componentWillUnmount() {
    ArticleStore.removeArticlesChangeListener(this.updateArticles.bind(this));
  }

  updateArticles() {
    console.log('Update articles', ArticleStore.getArticles());
    this.setState({
      articles: this.articlesDataSource.cloneWithRows(ArticleStore.getArticles())
    });
  }

  render() {

    if (!this.state) return (<Text>Loading...</Text>);

    return (
      <ListView
        dataSource={this.state.articles}
        initialListSize={15}
        renderRow={(rowData) => <Text>{rowData}</Text>} />
    )

  }


}


module.exports = ArticleList;
