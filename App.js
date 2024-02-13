import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home.js';
import Navigation from './Navigation.js';
import MapView from "react-native-maps"
import { data } from './data/data.js';

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
      {/* <MapView style={{width: "100%", height: "100%"}}/> */}
      <StatusBar style='dark' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});
