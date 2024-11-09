import { StyleSheet, Text, View, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

export default function App() {
  return (
    <View style={styles.container}>
      <Icon 
        name={Platform.OS === 'ios' ? "apple-o" : "android"} 
        size={60} 
        style={styles.icon}
      />
      <Text style={styles.text}>
        {Platform.OS === 'ios' ? "You are using an iOS" : "You are using an Android"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fed0bb',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30
  },
  icon: {
    color: '#8c2f39'
  }, 
  text: {
    fontSize: 20,
    fontWeight: 'bold', 
    color: '#461220'

  }
});
