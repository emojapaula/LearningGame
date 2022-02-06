import { View } from 'react-native';
import React, { FC } from 'react';
import styled from 'styled-components';
import { Col, Grid } from 'react-native-easy-grid';
import Emoji from 'react-native-emoji';
import { IMemoryCard } from '../../constants/Constants';

/* const ImageContainer = styled(View)`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledImage = styled(View)`
  height: ${hp('15%')}px;
  width: ${wp('18%')}px;
`; */

const GridContainer = styled(Grid)``;

const StyledColumn = styled(Col)``;

export const MemoryCard: FC<IMemoryCard> = ({ name }) => {
  return (
    <View>
      <View>
        <Emoji name={name} style={{ fontSize: 30 }} />
        <Emoji name="black_joker" style={{ fontSize: 30 }} />
      </View>
    </View>
  );
};
