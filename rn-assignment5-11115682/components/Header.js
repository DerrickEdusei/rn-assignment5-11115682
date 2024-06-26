import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = ({ theme }) => {
  return (
    <View style={[styles.header, { backgroundColor: theme.headerBackground }]}>
      <View style={styles.userProfile}>
        <Image source={require('../assets/profile.png')} style={styles.profile} />
        <View>
          <Text style={[styles.welcomeText, { color: theme.subText }]}>Welcome Back</Text>
          <Text style={[styles.userName, { color: theme.text }]}>Eric Atsu</Text>
        </View>
      </View>
      <View style={[styles.searchIconContainer, { backgroundColor: theme.iconBackground }]}>
        <Image source={require('../assets/search.png')} style={styles.searchIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 10,
  },
  userProfile: {
    flexDirection: 'row'  
  },
  profile: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 15
  },
  welcomeText: {
    fontSize: 13,
  },
  userName: {
    fontSize: 17,
    fontWeight: '600'
  },
  searchIconContainer: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },
  searchIcon: {
    width: 20,
    height: 20,
  }
});

export default Header;
