import React, {View, Text} from 'react-native';


class ArticleRow extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View>
        <Text>{this.props.articleId}</Text>
      </View>
    );

  }

}

ArticleRow.propTypes = {
  articleId: React.PropTypes.number
}

export default ArticleRow;
