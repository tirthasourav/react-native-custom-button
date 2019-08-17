//Author: Sourav dey
import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import formFieldStyles from './CustomButtonStyle';

export const CustomButton = ({ 
  buttonStyles,
  onPress,
  buttonTextStyles,
  title,
  icon,
  iconSize,
  tintColor
}) => (
  <TouchableOpacity
    style={buttonStyles}
    onPress={onPress}
    underlayColor={'transparent'}
  >
    <View style={{
      ...formFieldStyles.buttonStyles
    }}>
      {!!icon && <Image
          source={icon}
          style={{
            width: iconSize,
            height: iconSize,
            marginRight: 10,
            backgroundColor: 'white',
            tintColor: tintColor
          }}
      />}
      <Text style={buttonTextStyles} numberOfLines={2}>{title}</Text>
    </View>
  </TouchableOpacity>
);
