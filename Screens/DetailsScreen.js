import React from 'react';
import {useSelector} from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
} from 'react-native';
const DetailsScreen = (props) => {
  const entryDate = useSelector((state) => state.date);
  const exitDate = useSelector((state) => state.exitDate);
  const time = useSelector((state) => state.time);

  return (
    <View>
      <ImageBackground
        source={require('../assets/bg.jpg')}
        style={{width: '100%', height: '100%', opacity: 0.9}}>
        <SafeAreaView>
          <ScrollView style={styles.scrollView}>
            <View style={styles.row}>
              <View style={[styles.date, styles.box]}>
                <Text
                  style={{
                    flex: 1,
                    fontSize: 30,
                    marginTop: 20,
                    fontWeight: 'bold',
                  }}>
                  Date
                </Text>
                {time.map((i, index) => {
                  return (
                    <Text style={[styles.title, {flex: 2}]} key={Math.random()}>
                      {i}
                    </Text>
                  );
                })}
              </View>
              <View style={[styles.date, styles.box]}>
                <Text
                  style={{
                    flex: 1,
                    fontSize: 30,
                    marginTop: 20,
                    fontWeight: 'bold',
                  }}>
                  Entry
                </Text>
                {entryDate.map((i, index) => {
                  return (
                    <Text style={[styles.title, {flex: 2}]} key={Math.random()}>
                      {i}
                    </Text>
                  );
                })}
              </View>
              <View style={[styles.date, styles.box]}>
                <Text
                  style={{
                    flex: 1,
                    fontSize: 30,
                    marginTop: 20,
                    fontWeight: 'bold',
                  }}>
                  Exit
                </Text>
                {exitDate.map((i, index) => {
                  return (
                    <Text style={[styles.title, {flex: 2}]} key={Math.random()}>
                      {i}
                    </Text>
                  );
                })}
              </View>
            </View>

            <View style={styles.row}>
              <View style={[styles.box, styles.box2]}></View>
              <View style={[styles.box]}></View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default DetailsScreen;
const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    color: '#05375a',
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  box: {
    flex: 1,
  },
});
