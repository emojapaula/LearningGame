import { View } from 'react-native';
import React, { FC } from 'react';
import styled from 'styled-components';
import { Col, Grid } from 'react-native-easy-grid';
import Emoji from 'react-native-emoji';
import { IMemoryCard } from '../../constants/Constants';
import { MemoryCard } from './MemoryCard';

interface IMemoryRow {
  cards: IMemoryCard[];
}

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

export const MemoryGrid: FC<IMemoryRow> = ({ cards }) => {
  return (
    <GridContainer>
      <StyledColumn>
        {cards.slice(0, 3).map((card) => (
          <MemoryCard key={card.id} name={card.name} />
        ))}
      </StyledColumn>
      <StyledColumn>
        {cards.slice(3, 6).map((card) => (
          <MemoryCard key={card.id} name={card.name} />
        ))}
      </StyledColumn>
      <StyledColumn>
        {cards.slice(6, 9).map((card) => (
          <MemoryCard key={card.id} name={card.name} />
        ))}
      </StyledColumn>
      <StyledColumn>
        {cards.slice(9, 12).map((card) => (
          <MemoryCard key={card.id} name={card.name} />
        ))}
      </StyledColumn>
    </GridContainer>
  );
};
