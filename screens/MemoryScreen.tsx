import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';

import { RootStackScreenProps } from '../navigation/root-navigator';
import { Text } from '../components/reusable-components/Text';
import { IMemoryCard, memoryCardPictures } from '../constants/Constants';
import Button from '../components/reusable-components/Button';
import Emoji from 'react-native-emoji';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { MemoryGrid } from '../components/memory/MemoryGrid';

export default function MemoryScreen({ navigation }: RootStackScreenProps<'MemoryScreen'>) {
  const [cards, setCards] = useState<IMemoryCard[]>([]);
  const [turns, setTurns] = useState(0);

  //shuffle cards

  const shuffleCards = () => {
    console.log('tu sam');
    const shuffledCards: IMemoryCard[] = [...memoryCardPictures, ...memoryCardPictures]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    console.log('tu sam dva');
    setCards(shuffledCards);
    console.log('tu sam 3');
    setTurns(0);
  };

  console.log(turns, cards);
  return (
    <>
      <StatusBar hidden />
      <Text>bla</Text>
      <Button label="new game" type="primary" onPress={shuffleCards} />
      <MemoryGrid cards={cards} />
    </>
  );
}
