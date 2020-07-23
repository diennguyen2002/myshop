import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import HeaderCom from './HeaderCom';
import HeaderBtn from './HeaderBtn';
import {connect} from 'react-redux';
import {actionCreators} from '../redux/actions/actionCreators';
import ImagesConst from '../constants/ImagesConst';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUser: '',
      txtPass: '',
    };
  }
  goback() {
    const {navigation} = this.props;
    navigation.navigate('Main');
  }

  login() {
    this.props.putLogin(this.state.txtUser, this.state.txtPass);
  }

  logout() {
    this.props.putLogout();
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <HeaderCom
          title="Đăng nhập"
          rightIcon={null}
          leftIcon={
            <HeaderBtn
              clickFn={() => this.goback()}
              iconName="chevron-thin-left"
            />
          }
        />
        <View style={styles.loginContainer}>
          {this.props.token !== '' ? (
            <>
              <Text style={styles.textLogin}>Đăng nhập thành công</Text>
              <Image source={ImagesConst.profile} style={styles.profile} />
              <TouchableOpacity
                onPress={() => this.logout()}
                style={styles.btnContainer}>
                <Text style={styles.txtBtn}>Đăng xuất</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.textLogin}>Thông tin đăng nhập</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => this.setState({txtUser: text})}
                value={this.state.txtUser}
                placeholder="Tên đăng nhập"
              />
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => this.setState({txtPass: text})}
                value={this.state.txtPass}
                placeholder="Mật khẩu"
                secureTextEntry={true}
              />
              <TouchableOpacity
                onPress={() => this.login()}
                style={styles.btnContainer}>
                <Text style={styles.txtBtn}>Đăng nhập</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    );
  }
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  loginContainer: {
    flex: 1,
    paddingTop: 50,
    alignContent: 'center',
    padding: 50,
  },
  textLogin: {
    fontSize: 30,
    color: '#3498db',
    textAlign: 'center',
    marginVertical: 10,
  },
  textInput: {
    padding: 15,
    marginVertical: 10,
    borderColor: '#3498db',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
  },
  btnContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#3498db',
    marginHorizontal: 80,
    marginTop: 5,
  },
  txtBtn: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  profile: {
    width: 150,
    height: 150,
    marginHorizontal: 80,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#3498db',
  },
});

const mapStateToProps = function (state) {
  return {token: state.token};
};

export default connect(mapStateToProps, actionCreators)(Login);
