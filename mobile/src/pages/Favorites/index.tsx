import React from "react";
import { View } from "react-native";
import PageHeader from "../../components/pageHeader";

import styles from "./style";

function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title=" Meus Proffy favoritos" />
    </View>
  );
}

export default Favorites;
