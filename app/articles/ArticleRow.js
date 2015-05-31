import React, {ActivityIndicatorIOS, View, Text, TouchableHighlight, TouchableOpacity} from 'react-native';

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

  renderArticle() {
    return (
      <View>
        <Text>{ this.state.article.score }</Text>
        <Text>{ this.state.article.title }</Text>
      </View>
    );
  }

  renderSpinner() {
    return <ActivityIndicatorIOS />;
  }

  render() {

    let hasArticle = this.state && this.state.article;
    console.log('hasarticle', hasArticle);

    if (!hasArticle) { return this.renderSpinner(); }

    // let content = hasArticle ? this.renderArticle() : this.renderSpinner();
    // if (!this.state && !this.state.article) return <ActivityIndicatorIOS />;
    //
    // let content;
    // if (this.state && this.state.article) {
    //
    //   content = [
    //     (
    //       <View>
    //         <Text>{ this.state.article.score }</Text>
    //       </View>
    //     ),
    //
    //     (
    //       <View>
    //         <Text>{ this.state.article.title }</Text>
    //       </View>
    //     )
    //   ];
    //
    // } else {
    //   content = (<Text>{this.props.articleId}</Text>);
    // }


    return (
      <TouchableHighlight
        underlayColor="#fffcfa"
        style={[ArticleRowStyleSheet.container, {backgroundColor: '#fbf7f5'}]}>

        <View style={ArticleRowStyleSheet.score}>
          <Text>{ this.state.article.score }</Text>
        </View>
        <View>
          <Text>{ this.state.article.title }</Text>
        </View>

      </TouchableHighlight>
    );

  }

}

ArticleRow.propTypes = {
  articleId: React.PropTypes.number
}

export default ArticleRow;
