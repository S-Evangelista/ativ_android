import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Anota aí ✒️ </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    titulo: {
      backgroundColor: '#80FEFF',
      padding: '12px',
      borderRadius: '10px',
      fontSize: '70px',
      fontFamily:'Poppins',
      color: 'white',
      margin: '60px',
      text-stroke:'1px',
    },

  },
);
