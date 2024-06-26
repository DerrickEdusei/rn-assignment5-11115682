import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Action = ({ item, theme }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.actionButtonContainer, { backgroundColor: theme.iconBackground }]}>
        <Image source={item.button} style={styles.button} />
      </View>
      <Text style={[styles.actionName, { color: theme.subText }]}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18
  },
  actionButtonContainer: {
    height: 46,
    width: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor: '#ccc',
    borderRadius: 5
  },
  actionName: {
    fontSize: 14,
  }
});

export default Action;
