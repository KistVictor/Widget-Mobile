import React from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { theme } from '../../theme';
import { ArrowLeft } from 'phosphor-react-native';

import { FeedbackType } from '../Widget';

import { styles } from './styles';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';

interface Props {
  feedbackType: FeedbackType
}

export function Form({ feedbackType }: Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            weight='bold'
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image
            source={feedbackTypeInfo.image}
            style={styles.image}
          />
          <Text style={styles.titleText}>
            {feedbackTypeInfo.title}
          </Text>
        </View>

      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder='Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...'
        placeholderTextColor={theme.colors.text_secondary}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onTakeShot={() => {}}
          onRemoveShot={() => {}}
          screenshot='https://instagram.fpfb1-1.fna.fbcdn.net/v/t51.2885-15/160219587_207186411151857_4411364232692466218_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fpfb1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=5lmHEUCG8G4AX8iAM5B&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjUyODc3MDcxNTc2NDUyNjQzMg%3D%3D.2-ccb7-5&oh=00_AT90xaxcs_SwLKC0_PdTz79et-F7hGYJp67NbXDbnzXB1Q&oe=628F63DA&_nc_sid=30a2ef'
        />
        
        <Button
          isLoading={false}
        />
      </View>

    </View>
  );
}