import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import otherViews from 'components/otherViews';

export default function App(){
    return(
        <View style ={styles.container}>
        <Text>-Open up App.js to start working on your app!</Text>
        <StatusBar style='auto'/>
        <otherViews></otherViews>
        </View>
    );
}