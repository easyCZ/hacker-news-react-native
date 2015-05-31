import React, {View, Text, TouchableHighlight, TouchableOpacity} from 'react-native';

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
      content = this.state.article.title;
    } else {
      content = this.props.articleId;
    }

    return (
      <TouchableHighlight
        underlayColor="#fffcfa"
        style={[ArticleRowStyleSheet.container, {backgroundColor: '#fbf7f5'}]}>

        <Text style={{fontSize: '15'}}>{content}</Text>

      </TouchableHighlight>
    );

  }

}

ArticleRow.propTypes = {
  articleId: React.PropTypes.number
}

export default ArticleRow;
