/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NativeEventEmitter,
  Button,
  TextInput,
  Alert,
  TouchableOpacity,
  Switch
} from 'react-native';
import RNMyCustomLib from 'react-native-my-custom-lib';

type Props = {};
const myCustomModuleEmitter = new NativeEventEmitter(RNMyCustomLib);

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
      val: 0,
      ping: true,
      newVal: 0
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Kiểm tra số nguyên tố</Text>

        <TextInput
          style={{
            width: '90%',
            height: 40,
            borderWidth: 1,
            borderColor: 'grey',
            paddingHorizontal: 10
          }}
          onChangeText={val => this.setState({ val: val })}
          keyboardType="numeric"
          underlineColorAndroid={'transparent'}
        />

        <Button
          style={styles.btnCheck}
          title="Check number"
          onPress={() =>
            RNMyCustomLib.checkNumber(parseInt(this.state.val), data =>
              this.setState({
                data: data,
                newVal: this.state.val
              })
            )
          }
        />

        <Text style={styles.instructions}>
          {' '}
          Số {this.state.newVal} {this.state.data}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}
        >
          <View
            style={{
              // flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}
          >
            <Switch
              value={this.state.ping}
              onValueChange={ping => this.setState({ ping })}
            />
          </View>
          <Button
            style={styles.btnCheck}
            title="Check policy"
            onPress={() => {
              RNMyCustomLib.policy(this.state.ping)
                .then(data => {
                  console.log(data);
                  this.setState({ dataPolicy: data });
                })
                .catch(data => {
                  console.log(data);
                  this.setState({ dataPolicy: data });
                });
            }}
          />
        </View>
        <Text style={styles.instructions}>{this.state.dataPolicy}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    paddingVertical: 100
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    paddingVertical: 20
  },
  btnCheck: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'green'
  }
});
