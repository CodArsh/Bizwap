import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Images} from '../../config/images';
import {BaseColors} from '../../config/theme';
import BaseSetting from '../../config/setting';

export default function Intro() {
  const data = [
    {
      key: 1,
      image: Images.pic1,
      title: 'Enjoy new fashion deals today',
      subtitle: 'Top brands and deals available only on Bizwap',
    },
    {
      key: 2,
      image: Images.pic2,
      title: 'Enjoy new fashion deals today',
      subtitle: 'Top brands and deals available only on Bizwap',
    },
    {
      key: 3,
      image: Images.pic3,
      title: 'Enjoy new fashion deals today',
      subtitle: 'Top brands and deals available only on Bizwap',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{
            width: 325,
            height: 399,
            position: item?.key === 3 ? 'relative' : null,
            top: item?.key === 3 ? -BaseSetting.nWidth / 1.9 : null,
            right: item?.key === 3 ? -BaseSetting.nWidth / 3 : null,
          }}
          resizeMode={'contain'}
          source={item?.image}
        />
        <View style={{marginVertical: 20}}>
          <Text style={{textAlign: 'center', fontSize: 18, marginBottom: 5}}>
            {item.title}
          </Text>
          <Text style={{textAlign: 'center'}}>{item.subtitle}</Text>
        </View>
      </View>
    );
  };
  const renderSkipButton = () => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: BaseColors.primary,
          paddingVertical: 13,
          borderRadius: 4,
        }}>
        <Text
          style={{color: BaseColors.white, textAlign: 'center', fontSize: 16}}>
          Skip
        </Text>
      </TouchableOpacity>
    );
  };
  const renderDoneButton = () => {
    return (
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: BaseColors.primary,
            paddingVertical: 13,
            borderRadius: 4,
            marginBottom: 8,
          }}>
          <Text
            style={{
              color: BaseColors.white,
              textAlign: 'center',
              fontSize: 16,
            }}>
            Create an account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: BaseColors.yellow,
            paddingVertical: 13,
            borderRadius: 4,
          }}>
          <Text
            style={{
              color: BaseColors.white,
              textAlign: 'center',
              fontSize: 16,
            }}>
            Signin
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <AppIntroSlider
        data={data}
        renderItem={renderItem}
        showSkipButton
        bottomButton
        renderSkipButton={renderSkipButton}
        renderDoneButton={renderDoneButton}
        showNextButton={false}
      />
    </View>
  );
}
