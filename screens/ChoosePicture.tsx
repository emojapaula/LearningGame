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
    let tempArray: string[] = [];
    for (let i = 0; i < 4; i++) {
      while (true) {
        let picture = picturesForChoosing[Math.floor(Math.random() * picturesForChoosing.length)];
        if (!tempArray.includes(picture)) {
          tempArray.push(picture);
          break;
        }
      }
    }
    return tempArray;
  };

  const getPicture = () => {
    return picturesForChoosing[Math.floor(Math.random() * picturesForChoosing.length)];
  };

  const [first, setFirst] = useState(getPicture);
  const [second, setSecond] = useState(getPicture);
  const [third, setThird] = useState(getPicture);
  const [fourth, setFourth] = useState(getPicture);
  const [chosenPictures, setChosenPictures] = useState<string[]>([first, second, third, fourth]);
  const [expression, setExpression] = useState('');

  const getRandomExpression = useCallback(() => {
    return chosenPictures[Math.floor(Math.random() * chosenPictures.length)];
  }, [chosenPictures]);

  useEffect(() => {
    console.log('first');
    setExpression(getRandomExpression());
  }, [getRandomExpression, chosenPictures]);

  const checkSolution = (picture: string) => {
    console.log(picture);
    switch (picture) {
      case 'first':
        console.log('first');
    }
    if (picture === expression) {
      // setChosenPictures(fillArray());
      console.log('jej');
    } else {
      console.log('bed');
      /*  let tempArray: string[] = chosenPictures;
      tempArray[position] = 'fish';
      setChosenPictures(tempArray);
      console.log(chosenPictures); */
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
        <TouchableOpacity onPress={() => checkSolution(first)}>
          <EmojiCircle emoji={chosenPictures[0]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => checkSolution(second)}>
          <EmojiCircle emoji={chosenPictures[1]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => checkSolution(third)}>
          <EmojiCircle emoji={chosenPictures[2]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => checkSolution(fourth)}>
          <EmojiCircle emoji={chosenPictures[3]} />
        </TouchableOpacity>
      </PictureContainer>
    </>
  );
}
