// components/MyCard.js
import React from "react";
import { View, Image, StyleSheet } from "react-native";

const MyCard = ({ theme }) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.card }]}>
      <Image source={require('../assets/Card.png')} style={styles.card} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
  },
  card: {
    // Adjust width and height as needed
  }
});

export default MyCard;
