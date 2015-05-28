import React, {NavigatorIOS} from 'react-native';

import ArticleList from './articles/ArticleList';


class Router extends React.Component {

  render() {

    return (
      <NavigatorIOS
        style={{flex: 1}}
        initialRoute={{
          title: 'UIExplorer',
          component: ArticleList
        }}
        barTintColor="#ff6600"
        itemWrapperStyle={{flex: 1}}
      />
    );

  }

}

module.exports = Router;
