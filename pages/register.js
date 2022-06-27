import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userEmail: '',
      userPassword: '',
    };
  }

  userRegister = () => {
    const { userName } = this.state;
    const { userEmail } = this.state;
    const { userPassword } = this.state;

    fetch('https://hardeepwork.000webhostapp.com/react/register.php', {
      method: 'post',
      header: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        password: userPassword,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter Name"
          style={{
            width: 250,
            margin: 10,
            borderColor: '#333',
            borderWidth: 1,
          }}
          underlineColorAndroid="transparent"
          onChangeText={(userName) => this.setState({ userName })}
        />

        <TextInput
          placeholder="Enter Email"
          style={{
            width: 250,
            margin: 10,
            borderColor: '#333',
            borderWidth: 1,
          }}
          underlineColorAndroid="transparent"
          onChangeText={(userEmail) => this.setState({ userEmail })}
        />

        <TextInput
          placeholder="Enter Password"
          style={{
            width: 250,
            margin: 10,
            borderColor: '#333',
            borderWidth: 1,
          }}
          underlineColorAndroid="transparent"
          onChangeText={(userPassword) => this.setState({ userPassword })}
        />

        <TouchableOpacity
          onPress={this.userRegister}
          style={{
            width: 250,
            padding: 10,
            backgroundColor: 'magenta',
            alignItems: 'center',
          }}>
          <Text style={{ color: '#fff' }}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
