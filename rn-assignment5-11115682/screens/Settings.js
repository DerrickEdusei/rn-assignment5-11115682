import React from "react";
import { View, Text, StyleSheet, FlatList, Switch } from "react-native";
import { useTheme, lightTheme, darkTheme } from '../context/ThemeContext';
import SettingsOption from "../components/SettingsOption";
import options from "../data/options";

const Settings = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const renderHeader = () => (
    <Text style={[styles.pageHeader, { color: theme.text }]}>Settings</Text>
  );

  const renderFooter = () => (
    <View style={styles.themeSection}>
      <Text style={[styles.themeText, { color: theme.text }]}>Theme</Text>
      <Switch value={isDarkTheme} onValueChange={toggleTheme} />
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={options}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <SettingsOption item={item} theme={theme} />}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  pageHeader: {
    marginVertical: 30,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600'
  },
  themeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
    paddingRight: 5,
  },
  themeText: {
    fontSize: 20,
  }
});

export default Settings;
