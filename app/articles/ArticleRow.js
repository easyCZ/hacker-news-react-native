import React, {View, Text, TouchableHighlight} from 'react-native';

import ArticleRowStyleSheet from './ArticleRowStyleSheet';
import ArticleActions from './ArticleActions';
import ArticleStore from './ArticleStore';


class ArticleRow extends React.Component {

  constructor(props) {
    super(props);
  }

  onArticleChange() {
    let article = ArticleStore.getArticle(this.props.articleId)
    this.setState({
      article: ArticleStore.getArticle(this.props.articleId)
    });
  }

  componentDidMount() {
    ArticleStore.addArticleChangeListener(this.props.articleId, this.onArticleChange.bind(this));
    ArticleActions.getArticle(this.props.articleId);
  }

  render() {

    let content;
    if (this.state && this.state.article) {
      content = (<Text>{this.state.article.title}</Text>)
    } else {
      content = (<Text>{this.props.articleId}</Text>);
    }

    return (
      <TouchableHighlight
        onPress={this.props.highlightRowFn}
        style={ArticleRowStyleSheet.container}>

        {content}

      </TouchableHighlight>
    );

  }

}

ArticleRow.propTypes = {
  articleId: React.PropTypes.number
}

export default ArticleRow;
