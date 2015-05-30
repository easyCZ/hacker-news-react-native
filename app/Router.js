import React, {NavigatorIOS, StyleSheet} from 'react-native';

import ArticleList from './articles/ArticleList';
import ArticleActions from './articles/ArticleActions';


let styles = StyleSheet.create({

  navigator: {
    flex: 1
  }

});


class Router extends React.Component {

  render() {

    let initialRoute = {
      title: 'HN - Top Stories',
      component: ArticleList,
      rightButtonTitle: 'Refresh',
      onRightButtonPress: () => ArticleActions.getArticles()
    };

    return (
      <NavigatorIOS
        style={styles.navigator}
        initialRoute={initialRoute}
        barTintColor="#ff6600"
      />
    );

  }

}

module.exports = Router;
