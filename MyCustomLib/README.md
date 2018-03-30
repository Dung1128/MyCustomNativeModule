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
