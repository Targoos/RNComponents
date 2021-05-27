import React, {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/core';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from '../components/Header';
import {sliderItems} from '../data';
import {useAnimation} from '../hooks/useAnimation';

export const SlidesScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isDisabled = useRef(true);

  const navigation = useNavigation();
  const {opacity, fadeIn} = useAnimation();

  const {width: screenWidth} = Dimensions.get('window');
  const renderItem = item => {
    return (
      <View style={styles.card}>
        <View
          style={{
            backgroundColor: `${item.img}`,
            width: 350,
            height: 400,
            borderRadius: 20,
            marginBottom: 20,
            borderWidth: 8,
            borderColor: '#D9D9DB',
          }}
        />
        <Text style={{...styles.title, color: `${item.img}`}}>
          {item.title}
        </Text>
        <Text>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="SlidesScreen" />
      <Carousel
        // ref={c => {
        //   this._carousel = c;
        // }}
        data={sliderItems}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
          if (index === 2) {
            fadeIn();
            isDisabled.current = false;
          }
        }}
      />
      <View style={styles.wrapperPagination}>
        <Pagination
          dotsLength={sliderItems.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: '#5856D6',
          }}
        />
        <Animated.View style={{opacity}}>
          <TouchableOpacity
            disabled={isDisabled.current}
            style={styles.enterButton}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.buttonText}>Enter</Text>
            <Icon name="arrow-forward" color="white" size={30} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5856D6',
    marginBottom: 20,
  },
  wrapperPagination: {
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  enterButton: {
    flexDirection: 'row',
    backgroundColor: '#5856D6',
    width: 150,
    height: 50,
    borderRadius: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
  },
});
