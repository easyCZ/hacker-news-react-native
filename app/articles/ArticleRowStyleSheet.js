import {StyleSheet} from 'react-native';
import {vw, vh, vmin, vmax} from 'react-native-viewport-units';


let ArticleRowStyleSheet = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
    height: 10 * vh,
    width: 100 * vw
  }

});

export default ArticleRowStyleSheet;
