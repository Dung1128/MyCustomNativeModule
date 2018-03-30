# react-native-my-custom-lib

## Getting started

`$ npm install react-native-my-custom-lib --save`

### Mostly automatic installation

`$ react-native link react-native-my-custom-lib`

### Manual installation

#### iOS

1.  In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2.  Go to `node_modules` ➜ `react-native-my-custom-lib` and add `RNMyCustomLib.xcodeproj`
3.  In XCode, in the project navigator, select your project. Add `libRNMyCustomLib.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4.  Run your project (`Cmd+R`)<

#### Android

1.  Open up `android/app/src/main/java/[...]/MainActivity.java`

* Add `import com.reactlibrary.RNMyCustomLibPackage;` to the imports at the top of the file
* Add `new RNMyCustomLibPackage()` to the list returned by the `getPackages()` method

2.  Append the following lines to `android/settings.gradle`:
    ```
    include ':react-native-my-custom-lib'
    project(':react-native-my-custom-lib').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-my-custom-lib/android')
    ```
3.  Insert the following lines inside the dependencies block in `android/app/build.gradle`:
    ```
      compile project(':react-native-my-custom-lib')
    ```

#### Windows

[Read it! :D](https://github.com/ReactWindows/react-native)

1.  In Visual Studio add the `RNMyCustomLib.sln` in `node_modules/react-native-my-custom-lib/windows/RNMyCustomLib.sln` folder to their solution, reference from their app.
2.  Open up your `MainPage.cs` app

* Add `using My.Custom.Lib.RNMyCustomLib;` to the usings at the top of the file
* Add `new RNMyCustomLibPackage()` to the `List<IReactPackage>` returned by the `Packages` method

## Usage

```javascript
import RNMyCustomLib from 'react-native-my-custom-lib';

// TODO: What to do with the module?
RNMyCustomLib;
```

```javascript
//Function checks prime numbers

RNMyCustomLib.checkNumber(parseInt(this.state.val), data => console.log(data));
```

```javascript
// Function check policy
RNMyCustomLib.policy(this.state.ping)
  .then(data => {
    console.log(data);
    this.setState({ dataPolicy: data });
  })
  .catch(data => {
    console.log(data);
    this.setState({ dataPolicy: data });
  });
```

## Medthod

1.  checkNumber

    * type: callback - param: number

2.  check policy

    * type: promise

    resolve(string) -- policy
    reject(Object) -- Error

## Exemple

```javascript
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
```
