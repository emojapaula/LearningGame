import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import { RootStackScreenProps } from '../navigation/root-navigator';
import { Text } from '../components/reusable-components/Text';
import { IMemoryCard, memoryCardPictures } from '../constants/Constants';
import Button from '../components/reusable-components/Button';
// import Emoji from 'react-native-emoji';
// import { Col, Row, Grid } from 'react-native-easy-grid';
import { MemoryGrid } from '../components/memory/MemoryGrid';

export default function MemoryScreen({ navigation }: RootStackScreenProps<'MemoryScreen'>) {
  const [cards, setCards] = useState<IMemoryCard[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<IMemoryCard | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<IMemoryCard | null>(null);

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards: IMemoryCard[] = [...memoryCardPictures, ...memoryCardPictures]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card: IMemoryCard) => {
    console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  console.log(turns, cards);
  return (
    <>
      <StatusBar hidden />
      <Text>bla</Text>
      <Button label="new game" type="primary" onPress={shuffleCards} />
      <MemoryGrid cards={cards} onPress={handleChoice} />
    </>
  );
}
