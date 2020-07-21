import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SectionList,
  Image,
  TouchableOpacity,
} from 'react-native';

const HOST = 'http://192.168.1.105:3000';

const Item = ({item}) => {
  const price =
    item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'đ';
  return (
    <View style={styles.item}>
      <View style={styles.image}>
        <Image
          style={styles.imgStretch}
          source={{
            uri: HOST + '/' + item.img,
          }}
        />
      </View>
      <View style={styles.description}>
        <Text style={styles.desName}>{item.name}</Text>
        <Text style={styles.desPrice}>{price}</Text>
        <TouchableOpacity
          style={styles.cartBtn}
          onPress={() => console.log('Da them')}>
          <Text style={styles.cartText}>Chọn mua</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HomeSectionList = ({data}) => {
  return (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => <Item item={item} />}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#3498db',
    height: 150,
  },
  image: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  imgStretch: {
    width: 70,
    height: 90,
  },
  description: {
    flex: 7,
    justifyContent: 'center',
    height: 120,
  },
  desName: {
    fontSize: 18,
  },
  desPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
  },
  cartBtn: {
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#3498db',
    borderRadius: 5,
    width: 95,
  },
  cartText: {
    fontSize: 15,
    color: 'white',
  },
  header: {
    fontSize: 25,
    color: '#3498db',
    backgroundColor: '#fff',
  },
});

export default HomeSectionList;
