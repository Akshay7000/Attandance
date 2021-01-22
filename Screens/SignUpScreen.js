import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

function SignUpScreen({navigation}) {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const textChangeHandler = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#007ce1" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          source={require('../assets/HomeIcon.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Sign-Up</Text>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <Text style={[styles.text_footer, {marginTop: 20}]}>Email</Text>
          <View style={[styles.action, {marginTop: 20}]}>
            <Icon name="envelope-open" color="#05375a" size={20} />
            <TextInput
              placeholder="Email"
              style={styles.TextInput}
              onChange={(val) => textChangeHandler(val)}
            />
            {data.check_textInputChange ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : null}
          </View>

          <Text style={[styles.text_footer, {marginTop: 20}]}>Password</Text>
          <View style={[styles.action, {marginTop: 20}]}>
            <Icon name="key" color="#05375a" size={20} />
            <TextInput
              placeholder="Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.TextInput}
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <Text style={[styles.text_footer, {marginTop: 20}]}>
            Confirm Password
          </Text>
          <View style={[styles.action, {marginTop: 20}]}>
            <Icon name="key" color="#05375a" size={20} />
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.TextInput}
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.signIn} onPress={() => {}}>
              <LinearGradient
                colors={['#0761b6', '#4ea6f9']}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  Sign-Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <Text
              style={styles.signText}
              onPress={() => navigation.replace('FirstButtonScreen')}>
              Already Having Account. &nbsp;
              <Text
                style={{
                  color: '#0761b6',
                  fontWeight: 'bold',
                }}>
                Log In
              </Text>
            </Text>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
}

export default SignUpScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.15;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007ce1',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  header: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -15,
    paddingLeft: 10,
    color: '#05375a',
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: '7%',
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    marginBottom: '5%',
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
  },
  button: {
    alignItems: 'center',
    marginTop: '10%',
  },
  signIn: {
    width: 250,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
  signText: {
    marginVertical: '10%',
    justifyContent: 'center',
    alignContent: 'center',
    color: 'gray',
    fontWeight: 'bold',
  },
});
