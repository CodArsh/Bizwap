import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {BaseColors} from '../../config/theme';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Signup() {
  const fields = [
    {
      label: 'Full name',
      name: 'fullname',
      placeholder: 'enter your name',
    },
    {
      label: 'Email',
      name: 'email',
      placeholder: 'example@gmail.com',
    },
    {
      label: 'Password',
      name: 'password',
      placeholder: '**********',
    },
    {
      label: 'Confirm Password',
      name: 'confirm-password',
      placeholder: '**********',
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: BaseColors.white,
        justifyContent: 'space-between',
        padding: 20,
      }}>
      <View>
        {fields?.map((item, index) => (
          <View key={index} style={{marginVertical: 15}}>
            <Text>{item?.label}</Text>
            <TextInput
              placeholder={item?.placeholder}
              name={item?.name}
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 4,
                padding: 8,
                marginTop: 6,
              }}
            />
          </View>
        ))}
        <TouchableOpacity
          // onPress={ goToSlide(data.length - 1)}
          style={{
            backgroundColor: BaseColors.primary,
            paddingVertical: 13,
            borderRadius: 4,
            marginVertical: 10,
          }}>
          <Text
            style={{
              color: BaseColors.white,
              textAlign: 'center',
              fontSize: 16,
            }}>
            Signup
          </Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', marginBottom: 5}}>
          By signing up you agree to our privacy
        </Text>
        <Text style={{color: BaseColors.primary, textAlign: 'center'}}>
          Policy and Terms
        </Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity style={{marginRight: 20}}>
          <Icon name={'logo-facebook'} size={32} color={'#4267B2'} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: 20}}>
          <Icon name={'logo-google'} size={32} color={'#f44336'} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: 20}}>
          <Icon name={'logo-twitter'} size={32} color={'#03A9f4'} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{color: BaseColors.primary, textAlign: 'center'}}>
          Already have an account ? Signin
        </Text>
      </View>
    </View>
  );
}
