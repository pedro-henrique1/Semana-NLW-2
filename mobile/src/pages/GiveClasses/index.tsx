import React from "react";
import { View, ImageBackground, Text } from "react-native";
import giveClasses from "../../assets/images/give-classes-background.png";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

function GiveClasses() {
  const { goBack } = useNavigation();

  function hendleNavigationBack() {
    goBack();
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClasses}
        style={styles.content}
      >
        <Text style={styles.title}> Quer ser um proffy?</Text>
        <Text style={styles.description}>
          {" "}
          Para começar voce precisa cadastra na nossa plataforma web
        </Text>
      </ImageBackground>

      <RectButton onPress={hendleNavigationBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
