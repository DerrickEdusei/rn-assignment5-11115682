// components/TransactionItem.js
import React, { memo } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const TransactionItem = memo(({ item, theme }) => (
  <View style={[styles.transactionItem, { backgroundColor: theme.transactionBackground }]}>
    <View style={[styles.transactionLogoContainer, { backgroundColor: theme.iconBackground }]}>
      <Image source={item.logo} style={styles.transactionLogo} />
    </View>
    <View style={styles.transactionInfo}>
      <Text style={[styles.transactionName, { color: theme.text }]}>{item.name}</Text>
      <Text style={[styles.transactionCategory, { color: theme.text }]}>{item.category}</Text>
    </View>
    <View>
      <Text style={[styles.transactionAmount, { color: theme.transactionText }]}>{item.amount}</Text>
    </View>
  </View>
));

const styles = StyleSheet.create({
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    height: 74,
    padding: 15,
    marginHorizontal: 8,
    marginBottom: 10,
  },
  transactionLogoContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20
  },
  transactionLogo: {
    width: 16,
    height: 16,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: '600',
  },
  transactionCategory: {
    fontSize: 13,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'flex-end',
    marginBottom: 3,
    lineHeight: 19.2
  },
});

export default TransactionItem;
