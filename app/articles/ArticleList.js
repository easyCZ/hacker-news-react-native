import React, {ListView, Text} from 'react-native';
import ArticleListStyleSheet from './ArticleListStyleSheet';
import HackerNews from '../api/HackerNews';


class ArticleList extends React.Component {

  constructor(props) {
    super(props);

    this.DataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});



    this.state = {
      stories: this.DataSource.cloneWithRows([])
    };

    HackerNews
      .topStories()
      .on('value', (stories) => this.onStoriesUpdate(stories.val()))

  }

  onStoriesUpdate(stories) {
    this.setState({
      stories: this.DataSource.cloneWithRows(stories)
    });
  }

  render() {

    return (
      <ListView
        dataSource={this.state.stories}
        initialListSize="36"
        renderRow={(rowData) => <Text>{rowData}</Text>} />
    )

  }


}


module.exports = ArticleList;
