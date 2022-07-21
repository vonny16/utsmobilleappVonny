import React, {useState, Component } from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet } from 'react-native';


export default function Login({navigation}) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  
  const onLogin = () => {
    if (!username && !password) {
      Alert.alert('Please input username and password!')
    } else if (!username) {
      Alert.alert('Please input username')
    } else if (!password) {
      Alert.alert('Please input password')
    } else {
      Alert.alert('Login Success');
      navigation.navigate('MainApp')
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Login Vonny App
      </Text>
      <TextInput
        value={username}
        onChangeText={(username) => setUsername(username)}
        placeholder={'Username'}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      
      <Button
        title={'Login'}
        style={styles.button}
        onPress={() => {
          onLogin()
        }}
      />
      <Text 
        style={styles.register}
        onPress={() => {
          navigation.navigate('Register')
        }}
      >
        Create an Account! Register
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 280,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 10
  },
  button: {
    borderRadius: 50,
    paddingHorizontal: 210
  },
  title: {
    marginBottom: 20,
    fontSize: 28,
    fontWeight: "bold"
  },
  register: {
    marginTop: 20,
  }
});