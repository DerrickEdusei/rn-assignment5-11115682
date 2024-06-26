import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const SettingsOption = ({ item, theme }) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.card }, { borderColor: theme.borderColor }]}>
      <Text style={[styles.option, { color: theme.text }]}>{item.name}</Text>
      <Icon name="chevron-right" size={30} color="#777" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 2,
    
  },
  option: {
    fontSize: 14,
  }
});

export default SettingsOption;
