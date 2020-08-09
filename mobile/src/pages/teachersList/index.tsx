import React from "react";
import { View } from "react-native";
import PageHeader from "../../components/pageHeader";

import styles from "./styles";

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffy disponives" />
    </View>
  );
}

export default TeacherList;
