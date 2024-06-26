// screens/Home.js
import React from "react";
import { View, Text, StyleSheet, FlatList, StatusBar } from "react-native";
import { useTheme, lightTheme, darkTheme } from '../context/ThemeContext';
import Header from "../components/Header";
import MyCard from "../components/MyCard";
import Action from "../components/Action";
import transaction from "../data/transactions";
import actionData from "../data/ActionData";
import TransactionItem from "../components/TransactionItem";

const Home = () => {
  const { isDarkTheme } = useTheme();
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const renderHeader = () => (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Header theme={theme} />
      <MyCard theme={theme} />
      <FlatList 
        data={actionData}
        horizontal
        renderItem={({item}) => <Action item={item} theme={theme} />}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false} 
      />
      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Transaction</Text>
        <Text style={[styles.sectionSubTitle, { color: '#0262f3' }]}>See All</Text>
      </View>
    </View>
  );

  return ( 
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar barStyle={isDarkTheme ? "light-content" : "dark-content"} backgroundColor={theme.background} />
      <FlatList
        data={transaction}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TransactionItem item={item} theme={theme} />}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  sectionSubTitle: {
    color: 'blue'
  }
});

export default Home;
