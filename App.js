import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigations/navigator'
import * as Font from 'expo-font';
import { AppLoading } from 'expo'
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import Login from './src/screens/Login';
import Register from './src/screens/Register'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class App extends React.Component {
  state = {
    isFontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'SemiBold': require('./src/fonts/Montserrat-SemiBold.otf'),
      'Medium': require('./src/fonts/Montserrat-Medium.otf'),
      'Regular': require('./src/fonts/Montserrat-Regular.otf')
    });
    this.setState({ isFontLoaded: true })
  }

  const Stack = createStackNavigator();


  function Login({ navigation }) {
    return (
        <View>
            <Image
                source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
                style={{ width: 200, height: 200, alignSelf: "center" }}
            />
            <Text style={{

                fontSize: 28,
                fontFamily: "Semibold",
                alignSelf: "center"
            }}>Uygulama başlığı</Text>
            <Text style={{
                fontSize: 15,
                fontFamily: "Medium",
                alignSelf: "center",
                marginHorizontal: 35,
                marginTop: 15,
                opacity: 0.5
            }}>
                Alt metin Alt metin Alt metin Alt metin Alt metin Alt metin Alt metin Alt metin
                Alt metin Alt metisdssssssssssssssn Alt metissn Alt metin Alt metin
                Alt metin Alt metin Alt metin Alt metin Alt metin Alt metin Alt metin

        </Text>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                marginTop: 10,
                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                borderWidth: 1

            }}>
                <TextInput
                    style={{ paddingHorizontal: 10 }}
                />


            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                marginTop: 10,
                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                borderWidth: 1

            }}>
                <TextInput
                    style={{ paddingHorizontal: 10 }}
                />


            </View>
            <View style={{
                marginHorizontal: 55,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 15,
                backgroundColor: "#00716F",
                paddingVertical: 10,
                borderRadius: 23
            }}>
                <Text style={{
                    color: "white",
                    fontFamily: "SemiBold"
                }}>Already a member</Text>
            </View>
            <Text
                onPress={() => navigation.navigate('Details')}

                style={{
                    alignSelf: "center",
                    color: "#00716F",
                    fontFamily: "SemiBold",
                    paddingVertical: 30
                }}>
                New User
            </Text>

        </View>
    );
}

  render() {
    return (
      (this.state.isFontLoaded === true) ?
        (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Login" component={Login}/>
            </Stack.Navigator>
          </NavigationContainer>
        ) :
        (
          AppLoading
        )

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
