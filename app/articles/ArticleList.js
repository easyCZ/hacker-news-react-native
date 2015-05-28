var React = require('react-native');
var {
  View,
  Text,
  NavigatorIOS,
  Navigator,
} = React;

var TestView = React.createClass({

  render: function render() {
    return <Text>{this.props.test}</Text>;
  }

})

var ArticleList = React.createClass({

  render: function render() {
    return (
      <View style={{backgroundColor: 'red', marginTop: 64}}>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>

      </View>

    )
  }

});

module.exports = ArticleList;
