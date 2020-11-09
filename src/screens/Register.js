import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';


export default class Register extends React.Component {
    render() {
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
                    Register
                    Alt metin Alt metin Alt metin Alt metin Alt metin Alt metin Alt metin Alt metin
                    Alt metin Alt metisdssssssssssssssn Alt metin Alt metin Alt metin
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

                    onPress={() => navigate('Register')}

                    style={{
                        alignSelf: "center",
                        color: "#00716F",
                        fontFamily: "SemiBold",
                        paddingVertical: 30
                    }}>New User</Text>

            </View>

        )
    }
}