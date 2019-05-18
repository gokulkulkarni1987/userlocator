import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';

const SideBar = props => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SideBar;