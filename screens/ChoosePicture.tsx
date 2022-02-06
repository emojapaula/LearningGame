import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Header } from '../components/reusable-components/Header';
import { RootStackScreenProps } from '../navigation/root-navigator';
import { picturesForChoosing } from '../constants/Constants';
import { Text } from '../components/reusable-components/Text';
import { EmojiCircle } from '../components/EmojiCircle';
import styled from 'styled-components';
import { theme } from '../constants/Theme';

const PictureContainer = styled(View)`
  height: 60%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function ChoosePicture({ navigation }: RootStackScreenProps<'HomeScreen'>) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Header label="Choose Picture" />,
    });
  }, [navigation]);

  const fillArray = () => {
    let array: string[] = [];
    for (let i = 0; i < 4; i++) {
      while (true) {
        let picture = picturesForChoosing[Math.floor(Math.random() * picturesForChoosing.length)];
        if (!array.includes(picture)) {
          array.push(picture);
          break;
        }
      }
    }
    return array;
  };

  const [chosenPictures, setChosenPictures] = useState<string[]>(fillArray());

  const getRandomExpression = useCallback(() => {
    console.log(chosenPictures);
    return chosenPictures[Math.floor(Math.random() * chosenPictures.length)];
  }, [chosenPictures]);

  const [expression, setExpression] = useState('');

  useEffect(() => {
    setExpression(getRandomExpression());
  }, [getRandomExpression, chosenPictures]);

  const checkSolution = (position: number) => {
    console.log(position);
    if (chosenPictures[position] === expression) {
      console.log('jej');
      setChosenPictures(fillArray());
    }
  };

  return (
    <>
      <StatusBar hidden />

      <Text
        fontFamily={theme.fonts.arcade}
        color={theme.palette.white}
        textAlign="center"
        fontSize={hp('4.7%')}
        lineHeight={hp('6%')}
        paddingTop={hp('10%')}
        paddingBottom={hp('4%')}
      >
        {expression}
      </Text>
      <PictureContainer>
        <TouchableOpacity onPress={() => checkSolution(0)}>
          <EmojiCircle emoji={chosenPictures[0]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => checkSolution(1)}>
          <EmojiCircle emoji={chosenPictures[1]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => checkSolution(2)}>
          <EmojiCircle emoji={chosenPictures[2]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => checkSolution(3)}>
          <EmojiCircle emoji={chosenPictures[3]} />
        </TouchableOpacity>
      </PictureContainer>
    </>
  );
}
