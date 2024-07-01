import React from 'react';
import { Text, View, StyleSheet, Button, FlatList, Image } from 'react-native';


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KONTAK</Text>
      <Text style={styles.title}>Daftar Teman</Text>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
            <Image source={item.image} style={styles.friendImage} />
            <View style={styles.textContainer}>
              <Text style={styles.friendName}>{item.name}</Text>
              <Button
                title="Lihat"
                onPress={() => navigation.navigate('About', { friend: item })}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};


const friends = [
  { id: '1', name: 'Muhammad Firhan Hidayatulloh', no: '0891354829158', email: 'firhanhidayat@gmail.com', image: require('../assets/Firhan.jpg') },
  { id: '2', name: 'Zaldi Nandika', no: '08577351573', email: 'zaldinandika@gmail.com', image: require('../assets/Zaldi.jpeg') },
  { id: '3', name: 'Hilman Febriansyah', no: '083516241725', email: 'himenfebri@gmail.com', image: require('../assets/Himen.jpeg') },
  { id: '4', name: 'Fauzan Raif Dianto', no: '081236167134', email: 'fauzanraif@gmail.com', image: require('../assets/Fauzan.jpeg') },
  { id: '5', name: 'Ananda Rangga', no: '083825151627', email: 'anandarangga@gmail.com', image: require('../assets/Rangga.jpeg') }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  friendImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
 textContainer: {
    flex: 1
  },
  friendName: {
    fontSize: 18
  }
});

export default Home;