import {StyleSheet} from 'react-native';
import {vw, vh, vmin, vmax} from 'react-native-viewport-units';


let ArticleRowStyleSheet = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
    height: 10 * vh,
    width: 100 * vw,
    alignItems: 'center',
    padding: 5,
    borderColor: 'orange'
    // justifyContent: 'center',
    // alignSelf: 'center'
  },

  score: {
    width: 5 * vw,
    height: 5 * vw,
    backgroundColor: 'white'
  }

});

export default ArticleRowStyleSheet;
