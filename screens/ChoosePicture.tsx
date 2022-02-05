import React, { useEffect, useState } from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../auth/authContext';
import InvaderRow from '../components/InvaderRow';
import { ArcadeButton } from '../components/reusable-components/Button';
import { HeaderContainer } from './login/NameScreen';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Header } from '../components/reusable-components/Header';
import { RootStackScreenProps } from '../navigation/root-navigator';
import { picturesForChoosing } from '../constants/Constants';
import { Text } from '../components/reusable-components/Text';
import Emoji from 'react-native-emoji';
import { EmojiCircle } from '../components/EmojiCircle';
import styled from 'styled-components';
import { theme } from '../constants/Theme';

/* const PictureContainer = styled(View)`
    display: flex;
    flex-direction: row:
`; */

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

  const getRandom = (length: number) => {
    return Math.floor(Math.random() * length);
  };

  //TODO: handle same picture
  const getRandomPictures = () => {
    // const random = Math.floor(Math.random() * picturesForChoosing.length);
    //  if(pictureArray.includes(pict))
    const position = getRandom(picturesForChoosing.length);

    while (true) {
      if (!chosenPictures.includes(picturesForChoosing[position])) {
        break;
      }
    }
    /*  while (chosenPictures.includes(picturesForChoosing[position])) {
      console.log('first');
      getRandomPictures();
    } */
    return picturesForChoosing[position];

    /* if (chosenPictures.includes(picturesForChoosing[position])) {
      getRandomPictures();
    } else {
      return picturesForChoosing[position];
    } */
  };

  const getRandomExpression = () => {
    return chosenPictures[getRandom(chosenPictures.length)];
  };
  const [chosenPictures, setChosenPictures] = useState<string[]>([]);
  const [firstCircle, setFirstCircle] = useState(getRandomPictures());
  const [secondCircle, setSecondCircle] = useState(getRandomPictures());
  const [thirdCircle, setThirdCircle] = useState(getRandomPictures());
  const [fourthCircle, setFourthCircle] = useState(getRandomPictures());
  console.log(firstCircle, secondCircle, thirdCircle, fourthCircle);

  useEffect(() => {
    setChosenPictures([firstCircle, secondCircle, thirdCircle, fourthCircle]);
  }, [firstCircle, fourthCircle, secondCircle, thirdCircle]);

  //   const chosenPictures: string[] = [firstCircle, secondCircle, thirdCircle, fourthCircle];

  const [expression, setExpression] = useState(getRandomExpression());

  const initialize = () => {
    setFirstCircle(getRandomPictures());
    setSecondCircle(getRandomPictures());
    setThirdCircle(getRandomPictures());
    setFourthCircle(getRandomPictures());
    setExpression(getRandomExpression());
  };

  return (
    <>
      <StatusBar hidden />

      <Text
        fontFamily={theme.fonts.arcade}
        color={theme.palette.white}
        textAlign="center"
        fontSize={hp('7%')}
        lineHeight={hp('6%')}
        paddingTop={hp('10%')}
        paddingBottom={hp('4%')}
      >
        {expression}
      </Text>
      <PictureContainer>
        <TouchableOpacity>
          <EmojiCircle emoji={firstCircle} />
        </TouchableOpacity>
        <TouchableOpacity>
          <EmojiCircle emoji={secondCircle} />
        </TouchableOpacity>
        <TouchableOpacity>
          <EmojiCircle emoji={thirdCircle} />
        </TouchableOpacity>
        <TouchableOpacity>
          <EmojiCircle emoji={fourthCircle} />
        </TouchableOpacity>
      </PictureContainer>

      {/* {picturesForChoosing.map((emoji) => (
        <TouchableOpacity
          key={emoji}
          onPress={() => {
            console.log('first');
          }}
        >
          <Emoji name={emoji} style={{ fontSize: wp('12.9%') }} />
        </TouchableOpacity>
      ))} */}
    </>
  );
}
