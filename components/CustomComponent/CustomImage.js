import {Image, StyleSheet,View} from 'react-native';
const Gambar = (props) => {
  return(
  <View>
     <Image style={props.style} source={props.source} />
  </View>
  );
}

export default Gambar;