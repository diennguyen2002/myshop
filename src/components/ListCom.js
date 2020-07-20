import React, {Component} from 'react';
import {Text, FlatList, TouchableOpacity, StyleSheet, Image, View} from 'react-native';

const HOST = 'http://192.168.1.105:3000'

const Item = ({item, onPress, style}) =>{
  const price = item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'đ'
  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <View style={styles.image}>
          <Image style={styles.imgStretch} source={{
            uri: HOST+'/'+item.img,
          }} />
      </View>
      <View style={styles.description}>
        <Text style={styles.desName}>{item.name}</Text>
        <Text style={styles.desPrice}>{price}</Text>
        <TouchableOpacity style={styles.cartBtn} onPress={()=>console.log('Da them')}>
          <Text style={styles.cartText}>Chọn mua</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
} 

export default class ListCom extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedId: null};
  }
  renderItem = ({item}) => {
    const backgroundColor =
      item.id === this.state.selectedId ? '' : ''; //#3498db

    return (
      <Item
        item={item}
        onPress={() => this.setState({selectedId: item.id})}
        style={{backgroundColor}}
      />
    );
  };

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.id}
        extraData={this.state.selectedId}
      />
    );
  }
}

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
    height: 150
  },
  image: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  imgStretch:{
    width: 70,
    height: 90,
  },
  description:{
    flex: 7,
    justifyContent: 'center',
    height: 120,
  },
  desName:{
    fontSize: 18,
  },
  desPrice:{
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red'
  },
  cartBtn:{
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#3498db',
    borderRadius: 5,
    width: 100,
  },
  cartText:{
    fontSize: 15,
    color: 'white',
  },
});
