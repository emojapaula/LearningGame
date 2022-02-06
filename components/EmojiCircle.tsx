import React, { FC } from 'react';
import { Animated, Easing, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import Emoji from 'react-native-emoji';
import { theme } from '../constants/Theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export interface IEmojiCircle {
  emoji: string;
  animate?: boolean;
}

const Circle = styled(View)`
  border-width: 0.5px;
  width: ${wp('40%')}px;
  height: ${wp('40%')}px;
  border-radius: ${wp('40%')}px;
  border-color: ${theme.palette.linegrey};
  border-width: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${hp('3%')}px auto;
`;

export const EmojiCircle: FC<IEmojiCircle> = ({ emoji, animate }) => {
  return (
    <Circle>
      <Emoji name={emoji} style={{ fontSize: wp('20%') }} />
    </Circle>
  );
};
