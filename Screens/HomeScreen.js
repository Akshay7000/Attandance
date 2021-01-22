import LinearGradient from 'react-native-linear-gradient';
import React, {useState, useEffect} from 'react';
import moment from 'moment';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';
import {add, sub} from '../store/action';
import {useDispatch, useSelector} from 'react-redux';

const HomeScreen = (props) => {
  const dispatch = useDispatch();
  const entryDate = useSelector((state) => state.date);
  const buttonState = useSelector((state) => state.buttonState);
  const buttonState2 = useSelector((state) => state.buttonState2);
  const time = useSelector((state) => state.time);
  var now = moment().format('hh:mm');
  var then = `${entryDate[entryDate.length - 1]}`;

  const workingHours = moment
    .utc(moment(now, 'hh:mm').diff(moment(then, 'hh:mm')))
    .format('HH:mm');
  const [work, setWork] = useState(workingHours);
  // console.log(then, now, workingHours);
  const exitAlert = () => {
    setWork(workingHours);
    console.log(work);
    // const dispatch = useDispatch();
    Alert.alert(
      'Time Noted',
      'Have a Nice Day',
      [
        {
          style: 'cancel',
        },
        {text: 'OK', onPress: () => dispatch(sub())},
      ],
      {cancelable: false},
    );
  };

  const entryAlert = () => {
    setWork('Invalid date');
    Alert.alert(
      'Time Noted',
      'Welcome To The Gyrix',
      [
        {
          style: 'cancel',
        },
        {text: 'OK', onPress: () => dispatch(add())},
      ],
      {cancelable: false},
    );
  };

  const [dt, setDt] = useState(new Date().toLocaleString());
  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(secTimer);
  }, [dt]);

  return (
    <View>
      <ImageBackground
        source={require('../assets/bg.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.title}>{dt}</Text>

          <View>
            {buttonState === !true ? (
              <TouchableOpacity
                style={styles.signIn}
                disabled={buttonState}
                onPress={() => entryAlert()}>
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
                    Entry Timing
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.signIn}
                disabled={buttonState2}
                onPress={() => exitAlert()}>
                <LinearGradient
                  colors={['#181ADE', '#1885DE']}
                  style={styles.signIn}>
                  <Text
                    style={[
                      styles.textSign,
                      {
                        color: '#fff',
                      },
                    ]}>
                    Exit Timing
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            )}
          </View>
          {workingHours !== 'Invalid date' && buttonState2 !== true ? (
            <Text style={styles.title}>Working Hours {workingHours} </Text>
          ) : null}
          {work !== 'Invalid date' ? (
            <Text style={styles.title}>Last Hours {work} </Text>
          ) : null}
        </View>
      </ImageBackground>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  title: {
    margin: 20,
    color: '#05375a',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: 200,
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
});
