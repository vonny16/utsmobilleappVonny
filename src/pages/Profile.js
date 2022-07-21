import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ProfileScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tugas UTS Mobile App</Text>
      <View>
        <Text style={styles.text}>Nama : Vonny Febriyanti</Text>
        <Text style={styles.text}>NIM : 2010082</Text>
        <Text style={styles.text}>Kelas : 1.4 B Teknik Informatika</Text>
      </View>
      <Text style={styles.subtitle}> :)</Text>
      <Button style={styles.Button}
        title="Logout" 
        onPress={() => {
          navigation.navigate('Login')
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    marginTop: 30,
    marginBottom: 20
  },
  subtitle: {
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20
  },
  text: {
    fontSize: 16,
  },
  content: {
    flex: 1,
    alignItems: 'flex-start'
  },
  button:{
    backgroundColor: '#ff78e8',
    colors: '#fff'
  }
});
