import {Text, View,StyleSheet} from 'react-native'; 
  const Tulisan = () => {
    return (
    <View>
      <Text style={styles.deskripsi}>
      "Halo, nama saya Surya Bintang, asal banyuwangi. Saya mempunyai passion programming"
      </Text>
    </View>
  );
  }

  const styles = StyleSheet.create({

    deskripsi: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 8,

  },
});

export default Tulisan;