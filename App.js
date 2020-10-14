import "react-native-gesture-handler";
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ActivityIndicator, FlatList, Dimensions, StyleSheet, SafeAreaView, StatusBar, View, Button, Image, ScrollView, Text, TextInput, ImageBackground, TouchableOpacity } from "react-native";

const Stack = createStackNavigator();
const THEME_COLOR = "#2081D0";

var email = "elonmusk@gmail.com";
var password = "IownTesla";
var registeryinput = "registeryinput";
var editinput = "editinput";
var { height, width } = Dimensions.get("window");

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* add headerleft : null back in after prototyping is done */}
                <Stack.Screen
                    name="LoginSelection"
                    component={LoginSelectionScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
				<Stack.Screen
                    name="ALogin"
                    component={ALoginScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
				<Stack.Screen
                    name="CLogin"
                    component={CLoginScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
				<Stack.Screen
                    name="DMLogin"
                    component={DMLoginScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
				<Stack.Screen
                    name="DMCLogin"
                    component={DMCLoginScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
				<Stack.Screen
                    name="ECCLogin"
                    component={ECCLoginScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
				<Stack.Screen
                    name="AHome"
                    component={AHomeScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="CHome"
                    component={CHomeScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="DMHome"
                    component={DMHomeScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="DMCHome"
                    component={DMCHomeScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
				<Stack.Screen
                    name="ECCHome"
                    component={ECCHomeScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="CRegister"
                    component={CRegisterScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="DMRegister"
                    component={DMRegisterScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
				<Stack.Screen
                    name="DMCRegister"
                    component={DMCRegisterScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
				<Stack.Screen
                    name="ECCRegister"
                    component={ECCRegisterScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="RegisterSuccess"
                    component={RegisterSuccessScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="EditProfile"
                    component={EditProfileScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="EditPassword"
                    component={EditPasswordScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="ChangePassword"
                    component={ChangePasswordScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="OrderList"
                    component={OrderListScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="OrderDetails"
                    component={OrderDetailsScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="PlaceOrder"
                    component={PlaceOrderScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="OrderPlaced"
                    component={OrderPlacedScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="ConfirmOrder"
                    component={ConfirmOrderScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="OrderConfirmed"
                    component={OrderConfirmedScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="Help"
                    component={HelpScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    centerxy: {
        justifyContent: "center",
        alignItems: "center",
    },

    centerallxy: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },

    RegisterSuccess: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: THEME_COLOR,
    },

    margin: {
        marginLeft: "5%",
    },

    datemargin: {
        marginLeft: "7%",
		alignItems: 'flex-start'
    },

    margintop: {
        marginTop: "5%",
    },

    listonlymargintop: {
        marginTop: "10%",
        marginLeft: "3%",
    },

    listonlymargin: {
        marginTop: "5%",
        marginLeft: "3%",
    },

    listline: {
        backgroundColor: "#CDCDCD",
        height: 3,
        marginTop: "2%",
        marginBottom: "2%",
    },
	
	listlineblue: {
        backgroundColor: THEME_COLOR,
        height: 3,
        marginTop: "2%",
        marginBottom: "2%",
    },

    mediumicon: {
        width: 120,
        height: 120,
        marginTop: "10%",
        marginBottom: "5%",
    },

    smallicon: {
        width: 50,
        height: 50,
        marginRight: 15,
    },

    listitems: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: "3%",
    },

    listitemsonly: {
        marginTop: "5%",
    },

    listitemsrow: {
        flexDirection: "row",
    },

    listitemscolumn: {
        flexDirection: "column",
    },

    listtext: {
        alignItems: "flex-start",
        justifyContent: "center",
    },

    listiconright: {
        alignItems: "flex-end",
    },

    listiconleft: {
        alignItems: "flex-start",
        marginTop: "5%",
        marginLeft: "5%",
    },

    mainpp: {
        width: 250,
        height: 250,
        marginTop: "10%",
        marginBottom: "10%",
    },
	
	aprofileimage: {
		width: 355,
        height: 250,
        marginTop: "10%",
        marginBottom: "10%",
		borderWidth: 2,
		borderColor: THEME_COLOR,
		borderRadius: 5,
	},
	
	cprofileimage: {
		width: 361,
        height: 250,
        marginTop: "10%",
        marginBottom: "10%",
		borderWidth: 2,
		borderColor: THEME_COLOR,
		borderRadius: 5,
	},
	
	dmprofileimage: {
		width: 336,
        height: 250,
        marginTop: "10%",
        marginBottom: "10%",
		borderWidth: 2,
		borderColor: THEME_COLOR,
		borderRadius: 5,
	},
	
	dmcprofileimage: {
		width: 392,
        height: 250,
        marginTop: "10%",
        marginBottom: "10%",
		borderWidth: 2,
		borderColor: THEME_COLOR,
		borderRadius: 5,
	},
	
	eccprofileimage: {
		width: 350,
        height: 250,
        marginTop: "10%",
        marginBottom: "10%",
		borderWidth: 2,
		borderColor: THEME_COLOR,
		borderRadius: 5,
	},
	
	logoimage: {
		width: 399,
        height: 225,
        marginTop: "10%",
        marginBottom: "10%",
		borderWidth: 2,
		borderColor: THEME_COLOR,
		borderRadius: 5,
	},

    h1: {
        fontSize: 25,
        marginBottom: "5%",
    },

    h2: {
        fontSize: 20,
        marginBottom: "5%",
    },
	
	h3: {
		color: THEME_COLOR,
        fontSize: 25,
	},

    button: {
        width: 250,
        justifyContent: "center",
        padding: 5,
        margin: 5,
    },
	
	buttontext: {
		color: 'white'
	},

    buttonleft: {
        alignItems: "flex-start",
        marginLeft: "4%",
    },

    inputtext: {
        borderBottomWidth: 1,
        borderColor: THEME_COLOR,
        padding: 5,
        margin: 5,
        width: "90%",
        borderRadius: 10,
    },
	
	buttonfont: {
		color: "#FFFFFF",
        fontSize: 15,
		textTransform: "uppercase",
		paddingLeft: 15,
		paddingTop: 15,
	},
	
	listfont: {
		color: "#FFFFFF",
        fontSize: 15,
		paddingLeft: 15,
		paddingTop: 5,
	},
	
	buttonview: {
		borderRadius: 10,
		marginLeft: 10,
		marginRight: 10,
		marginTop: 5,
		marginBottom: 5,
		padding: 10,
		backgroundColor: THEME_COLOR,
		flexDirection: "row",
		justifyContent: "space-between"
	},
});

const LoginSelectionScreen = ({ navigation }) => {
	return (
	<ScrollView contentContainerStyle={{flexGrow: 1}}>	
		<ImageBackground source={require("./assets/background.png")} style={{ flex: 1, resizeMode: "cover", justifyContent: "center"}}>	
			<View style={styles.centerallxy}>
				<Image style={styles.logoimage} source={require("./assets/logo.png")}></Image>
				<Text style={styles.h3}>Select a User Type</Text>
				<Text>{"\n"}</Text>
				<View style={styles.button}><Button style={styles.button} title="Admin" onPress={() => navigation.navigate("ALogin")} /></View>
				<View style={styles.button}><Button style={styles.button} title="Customer" onPress={() => navigation.navigate("CLogin")} /></View>
				<View style={styles.button}><Button style={styles.button} title="Delivery Man" onPress={() => navigation.navigate("DMLogin")} /></View>
				<View style={styles.button}><Button style={styles.button} title="Delivery Men Company" onPress={() => navigation.navigate("DMCLogin")} /></View>
				<View style={styles.button}><Button style={styles.button} title="E-Commerce Company" onPress={() => navigation.navigate("ECCLogin")} /></View>
			</View>
		</ImageBackground>
	</ScrollView>
	);
};

const ALoginScreen = ({ navigation }) => {
    return (
	<ScrollView contentContainerStyle={{flexGrow: 1}}>	
		<ImageBackground source={require("./assets/background.png")} style={{ flex: 1, resizeMode: "cover", justifyContent: "center"}}>	
            <View style={styles.centerallxy}>
                <Image style={styles.aprofileimage} source={require("./assets/aprofile.png")}></Image>
				<Text style={styles.h3}>Admin Login</Text>
				<Text>{"\n"}</Text>
				<TextInput style={styles.inputtext} placeholder="Email" onChangeText={(val) => (email = val)}></TextInput>
                <TextInput secureTextEntry={true} placeholder="Password" style={styles.inputtext} onChangeText={(val) => (password = val)}></TextInput>
				<Text>{"\n"}</Text>
				<View style={styles.button}>
                    <Button title="Login" onPress={() => navigation.navigate("AHome")} />
                </View>
            </View>
		</ImageBackground>
	</ScrollView>
    );
};

const CLoginScreen = ({ navigation }) => {
    return (
	<ScrollView contentContainerStyle={{flexGrow: 1}}>	
		<ImageBackground source={require("./assets/background.png")} style={{ flex: 1, resizeMode: "cover", justifyContent: "center"}}>	
            <View style={styles.centerallxy}>
                <Image style={styles.cprofileimage} source={require("./assets/cprofile.png")}></Image>
				<Text style={styles.h3}>Customer Login</Text>
				<Text>{"\n"}</Text>
				<TextInput style={styles.inputtext} placeholder="Email" onChangeText={(val) => (email = val)}></TextInput>
                <TextInput secureTextEntry={true} placeholder="Password" style={styles.inputtext} onChangeText={(val) => (password = val)}></TextInput>
				<Text>{"\n"}</Text>
				<View style={styles.button}>
                    <Button title="Login" onPress={() => navigation.navigate("CHome")} />
                </View>
				<Text>{"\n"}</Text>
                <Text style={{ color: THEME_COLOR }} onPress={() => navigation.navigate("CRegister")}>Click Here to Create a New Account</Text>
            </View>
		</ImageBackground>
	</ScrollView>
    );
};

const DMLoginScreen = ({ navigation }) => {
    return (
	<ScrollView contentContainerStyle={{flexGrow: 1}}>	
		<ImageBackground source={require("./assets/background.png")} style={{ flex: 1, resizeMode: "cover", justifyContent: "center"}}>	
            <View style={styles.centerallxy}>
                <Image style={styles.dmprofileimage} source={require("./assets/dmprofile.png")}></Image>
				<Text style={styles.h3}>Delivery Man Login</Text>
				<Text>{"\n"}</Text>
				<TextInput style={styles.inputtext} placeholder="Email" onChangeText={(val) => (email = val)}></TextInput>
                <TextInput secureTextEntry={true} placeholder="Password" style={styles.inputtext} onChangeText={(val) => (password = val)}></TextInput>
				<Text>{"\n"}</Text>
				<View style={styles.button}>
                    <Button title="Login" onPress={() => navigation.navigate("DMHome")} />
                </View>
				<Text>{"\n"}</Text>
                <Text style={{ color: THEME_COLOR }} onPress={() => navigation.navigate("DMRegister")}>Click Here to Create a New Account</Text>
            </View>
		</ImageBackground>
	</ScrollView>
    );
};

const DMCLoginScreen = ({ navigation }) => {
    return (
	<ScrollView contentContainerStyle={{flexGrow: 1}}>	
		<ImageBackground source={require("./assets/background.png")} style={{ flex: 1, resizeMode: "cover", justifyContent: "center"}}>	
            <View style={styles.centerallxy}>
                <Image style={styles.dmcprofileimage} source={require("./assets/dmcprofile.png")}></Image>
				<Text style={styles.h3}>Delivery Men Company Login</Text>
				<Text>{"\n"}</Text>
				<TextInput style={styles.inputtext} placeholder="Email" onChangeText={(val) => (email = val)}></TextInput>
                <TextInput secureTextEntry={true} placeholder="Password" style={styles.inputtext} onChangeText={(val) => (password = val)}></TextInput>
				<Text>{"\n"}</Text>
				<View style={styles.button}>
                    <Button title="Login" onPress={() => navigation.navigate("DMCHome")} />
                </View>
				<Text>{"\n"}</Text>
                <Text style={{ color: THEME_COLOR }} onPress={() => navigation.navigate("DMCRegister")}>Click Here to Create a New Account</Text>
            </View>
		</ImageBackground>
	</ScrollView>
    );
};

const ECCLoginScreen = ({ navigation }) => {
    return (
	<ScrollView contentContainerStyle={{flexGrow: 1}}>	
		<ImageBackground source={require("./assets/background.png")} style={{ flex: 1, resizeMode: "cover", justifyContent: "center"}}>	
            <View style={styles.centerallxy}>
                <Image style={styles.eccprofileimage} source={require("./assets/eccprofile.png")}></Image>
				<Text style={styles.h3}>E-Commerce Company Login</Text>
				<Text>{"\n"}</Text>
				<TextInput style={styles.inputtext} placeholder="Email" onChangeText={(val) => (email = val)}></TextInput>
                <TextInput secureTextEntry={true} placeholder="Password" style={styles.inputtext} onChangeText={(val) => (password = val)}></TextInput>
				<Text>{"\n"}</Text>
				<View style={styles.button}>
                    <Button title="Login" onPress={() => navigation.navigate("ECCHome")} />
                </View>
				<Text>{"\n"}</Text>
                <Text style={{ color: THEME_COLOR }} onPress={() => navigation.navigate("ECCRegister")}>Click Here to Create a New Account</Text>
            </View>
		</ImageBackground>
	</ScrollView>
    );
};

const CRegisterScreen = ({ navigation }) => {
    return (
	<ScrollView contentContainerStyle={{flexGrow: 1}}>	
		<ImageBackground source={require("./assets/background.png")} style={{ flex: 1, resizeMode: "cover", justifyContent: "center"}}>	
            <View style={styles.centerallxy}>
                <Image style={styles.cprofileimage} source={require("./assets/cprofile.png")}></Image>
				<Text style={styles.h3}>Customer Registeration</Text>
			
				<TextInput style={styles.inputtext} placeholder="Email" onChangeText={(val) => (registeryinput = val)}></TextInput>
				<TextInput style={styles.inputtext} placeholder="Password" onChangeText={(val) => (registeryinput = val)}></TextInput>
				<TextInput style={styles.inputtext} placeholder="Full Name" onChangeText={(val) => (registeryinput = val)}></TextInput>
				<TextInput style={styles.inputtext} placeholder="Address" onChangeText={(val) => (registeryinput = val)}></TextInput>
				<TextInput style={styles.inputtext} placeholder="Contact Number" onChangeText={(val) => (registeryinput = val)}></TextInput>

				<View style={styles.button}>
					<Button title="Register" onPress={() => navigation.navigate("RegisterSuccess")} />
				</View>
			
			</View>
		</ImageBackground>
	</ScrollView>
    );
};

const DMRegisterScreen = ({ navigation }) => {
    return (
        <View style={styles.centerallxy}>
            <Text>Please Contact A Delivery Man Company</Text>
        </View>
    );
};

const DMCRegisterScreen = ({ navigation }) => {
    return (
	<ScrollView contentContainerStyle={{flexGrow: 1}}>	
		<ImageBackground source={require("./assets/background.png")} style={{ flex: 1, resizeMode: "cover", justifyContent: "center"}}>	
            <View style={styles.centerallxy}>
                <Image style={styles.cprofileimage} source={require("./assets/dmcprofile.png")}></Image>
				<Text style={styles.h3}>Customer Registeration</Text>
			
				<TextInput style={styles.inputtext} placeholder="Email" onChangeText={(val) => (registeryinput = val)}></TextInput>
				<TextInput style={styles.inputtext} placeholder="Password" onChangeText={(val) => (registeryinput = val)}></TextInput>
				<TextInput style={styles.inputtext} placeholder="Full Name" onChangeText={(val) => (registeryinput = val)}></TextInput>
				<TextInput style={styles.inputtext} placeholder="Contact Number" onChangeText={(val) => (registeryinput = val)}></TextInput>
				<TextInput style={styles.inputtext} placeholder="Bank Account Number" onChangeText={(val) => (registeryinput = val)}></TextInput>

				<View style={styles.button}>
					<Button title="Register" onPress={() => navigation.navigate("RegisterSuccess")} />
				</View>
			
			</View>
		</ImageBackground>
	</ScrollView>
    );
};

const ECCRegisterScreen = ({ navigation }) => {
    return (
	<ScrollView contentContainerStyle={{flexGrow: 1}}>	
		<ImageBackground source={require("./assets/background.png")} style={{ flex: 1, resizeMode: "cover", justifyContent: "center"}}>	
            <View style={styles.centerallxy}>
                <Image style={styles.cprofileimage} source={require("./assets/eccprofile.png")}></Image>
				<Text style={styles.h3}>Customer Registeration</Text>
			
				<TextInput style={styles.inputtext} placeholder="Email" onChangeText={(val) => (registeryinput = val)}></TextInput>
				<TextInput style={styles.inputtext} placeholder="Password" onChangeText={(val) => (registeryinput = val)}></TextInput>
				<TextInput style={styles.inputtext} placeholder="Company Name" onChangeText={(val) => (registeryinput = val)}></TextInput>
				<TextInput style={styles.inputtext} placeholder="Contact Number" onChangeText={(val) => (registeryinput = val)}></TextInput>

				<View style={styles.button}>
					<Button title="Register" onPress={() => navigation.navigate("RegisterSuccess")} />
				</View>
			
			</View>
		</ImageBackground>
	</ScrollView>
    );
};

const RegisterSuccessScreen = ({ navigation }) => {
    return (
        <View style={styles.RegisterSuccess}>
            <Image borderRadius={360} blurRadius={0} style={styles.mainpp} source={require("./assets/approval.png")}></Image>
            <Text style={{ color: "#FFFFFF" }}>Your Account Has Been Registered Successfully{"\n"}</Text>
            <Button title="Return To Login Screen" onPress={() => navigation.navigate("LoginSelection")} />
        </View>
    );
};

const AHomeScreen = ({ navigation }) => {
    return (
	<ScrollView contentContainerStyle={{flexGrow: 1}}>	
		<ImageBackground source={require("./assets/background.png")} style={{ flex: 1, resizeMode: "cover", justifyContent: "center"}}>	
            <View>
                <View style={styles.centerxy}>
                    <Image style={styles.aprofileimage} source={require("./assets/aprofile.png")} />
                </View>
                <View style={(styles.listtext, styles.margin)}>
                    <Text style={styles.h3}>Hey, Admin</Text>
                </View>
            </View>
			
            <View style={styles.listlineblue} />
			
			<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("OrderList")}>
                <Text style={styles.buttonfont}>View All Orders</Text>
				<View style={styles.listiconright}>
                    <Image style={styles.smallicon} source={require("./assets/parcel.png")} />
                </View>
			</TouchableOpacity>
			
			<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("Help")}>
                <Text style={styles.buttonfont}>View Delivery Men Companies</Text>
				<View style={styles.listiconright}>
                    <Image style={styles.smallicon} source={require("./assets/delivery.png")} />
                </View>
			</TouchableOpacity>

			<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("Help")}>
                <Text style={styles.buttonfont}>View E-Commerce Companies</Text>
				<View style={styles.listiconright}>
                    <Image style={styles.smallicon} source={require("./assets/eccicon.png")} />
                </View>
			</TouchableOpacity>
			
			<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("Help")}>
                <Text style={styles.buttonfont}>Payments</Text>
				<View style={styles.listiconright}>
                    <Image style={styles.smallicon} source={require("./assets/payments.png")} />
                </View>
			</TouchableOpacity>
		</ImageBackground>
	</ScrollView>
    );
};

const CHomeScreen = ({ navigation }) => {
    return (
	<ScrollView contentContainerStyle={{flexGrow: 1}}>	
		<ImageBackground source={require("./assets/background.png")} style={{ flex: 1, resizeMode: "cover", justifyContent: "center"}}>	
            <View>
                <View style={styles.centerxy}>
                    <Image style={styles.cprofileimage} source={require("./assets/cprofile.png")} />
                </View>
                <View style={(styles.listtext, styles.margin)}>
                    <Text style={styles.h3}>Hey, customer name...</Text>
                </View>
            </View>
            <View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.listtext}>
                    <Button title="Edit Profile" onPress={() => navigation.navigate("EditProfile")} />
                </View>
                <View style={styles.listiconright}>
                    <Image style={styles.smallicon} source={require("./assets/edit.png")} />
                </View>
            </View>
            <View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.listtext}>
                    <Button title="View Past Deliveries" onPress={() => navigation.navigate("OrderList")} />
                </View>
                <View style={styles.listiconright}>
                    <Image style={styles.smallicon} source={require("./assets/parcel.png")} />
                </View>
            </View>
            <View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.listtext}>
                    <Button title="View Current Delivery" onPress={() => navigation.navigate("OrderPlaced")} />
                </View>
                <View style={styles.listiconright}>
                    <Image style={styles.smallicon} source={require("./assets/location.png")} />
                </View>
            </View>
            <View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.listtext}>
                    <Button title="Get Help" onPress={() => navigation.navigate("Help")} />
                </View>
                <View style={styles.listiconright}>
                    <Image style={styles.smallicon} source={require("./assets/help.png")} />
                </View>
            </View>
            <View style={styles.listline} />
		</ImageBackground>
	</ScrollView>
    );
};

const DMHomeScreen = ({ navigation }) => {
    return (
	<ScrollView contentContainerStyle={{flexGrow: 1}}>	
		<ImageBackground source={require("./assets/background.png")} style={{ flex: 1, resizeMode: "cover", justifyContent: "center"}}>	
            <View>
                <View style={styles.centerxy}>
                    <Image style={styles.dmprofileimage} source={require("./assets/dmprofile.png")} />
                </View>
                <View style={(styles.listtext, styles.margin)}>
                    <Text style={styles.h3}>Hey, Deliveryman</Text>
                </View>
            </View>
            <View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.listtext}>
                    <Button title="Edit Profile" onPress={() => navigation.navigate("EditProfile")} />
                </View>
                <View style={styles.listiconright}>
                    <Image style={styles.smallicon} source={require("./assets/edit.png")} />
                </View>
            </View>
            <View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.listtext}>
                    <Button title="View Past Deliveries" onPress={() => navigation.navigate("OrderList")} />
                </View>
                <View style={styles.listiconright}>
                    <Image style={styles.smallicon} source={require("./assets/parcel.png")} />
                </View>
            </View>
            <View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.listtext}>
                    <Button title="View Current Delivery" onPress={() => navigation.navigate("OrderPlaced")} />
                </View>
                <View style={styles.listiconright}>
                    <Image style={styles.smallicon} source={require("./assets/location.png")} />
                </View>
            </View>
            <View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.listtext}>
                    <Button title="Get Help" onPress={() => navigation.navigate("Help")} />
                </View>
                <View style={styles.listiconright}>
                    <Image style={styles.smallicon} source={require("./assets/help.png")} />
                </View>
            </View>
            <View style={styles.listline} />
		</ImageBackground>
	</ScrollView>
    );
};

const DMCHomeScreen = ({ navigation }) => {
    return (
	<ScrollView contentContainerStyle={{flexGrow: 1}}>	
		<ImageBackground source={require("./assets/background.png")} style={{ flex: 1, resizeMode: "cover", justifyContent: "center"}}>	
            <View>
                <View style={styles.centerxy}>
                    <Image style={styles.dmcprofileimage} source={require("./assets/dmcprofile.png")} />
                </View>
                <View style={(styles.listtext, styles.margin)}>
                    <Text style={styles.h3}>Hey, Delivery Men Company</Text>
                </View>
            </View>
            <View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.listtext}>
                    <Button title="Edit Profile" onPress={() => navigation.navigate("EditProfile")} />
                </View>
                <View style={styles.listiconright}>
                    <Image style={styles.smallicon} source={require("./assets/edit.png")} />
                </View>
            </View>
            <View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.listtext}>
                    <Button title="View Past Deliveries" onPress={() => navigation.navigate("OrderList")} />
                </View>
                <View style={styles.listiconright}>
                    <Image style={styles.smallicon} source={require("./assets/parcel.png")} />
                </View>
            </View>
            <View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.listtext}>
                    <Button title="View Current Delivery" onPress={() => navigation.navigate("OrderPlaced")} />
                </View>
                <View style={styles.listiconright}>
                    <Image style={styles.smallicon} source={require("./assets/location.png")} />
                </View>
            </View>
            <View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.listtext}>
                    <Button title="Get Help" onPress={() => navigation.navigate("Help")} />
                </View>
                <View style={styles.listiconright}>
                    <Image style={styles.smallicon} source={require("./assets/help.png")} />
                </View>
            </View>
            <View style={styles.listline} />
		</ImageBackground>
	</ScrollView>
    );
};

const ECCHomeScreen = ({ navigation }) => {
    return (
	<ScrollView contentContainerStyle={{flexGrow: 1}}>	
		<ImageBackground source={require("./assets/background.png")} style={{ flex: 1, resizeMode: "cover", justifyContent: "center"}}>	
            <View>
                <View style={styles.centerxy}>
                    <Image style={styles.eccprofileimage} source={require("./assets/eccprofile.png")} />
                </View>
                <View style={(styles.listtext, styles.margin)}>
                    <Text style={styles.h3}>E-Commerce Company Name</Text>
                </View>
            </View>
            <View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.listtext}>
                    <Button title="View Past Orders" onPress={() => navigation.navigate("OrderList")} />
                </View>
                <View style={styles.listiconright}>
                    <Image style={styles.smallicon} source={require("./assets/pastorder.png")} />
                </View>
            </View>
            <View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.listtext}>
                    <Button title="View Current Order" onPress={() => navigation.navigate("OrderList")} />
                </View>
                <View style={styles.listiconright}>
                    <Image style={styles.smallicon} source={require("./assets/currentorder.png")} />
                </View>
            </View>
            <View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.listtext}>
                    <Button title="Register Complaint" onPress={() => navigation.navigate("HelpScreen")} />
                </View>
                <View style={styles.listiconright}>
                    <Image style={styles.smallicon} source={require("./assets/complaint.png")} />
                </View>
            </View>
            <View style={styles.listline} />
            <View>
                <View style={styles.centerallxy}>
                    <View style={styles.button}>
                        <Button title="Log Out" onPress={() => navigation.navigate("LoginSelection")} />
                    </View>
                </View>
            </View>
		</ImageBackground>
	</ScrollView>
    );
};

const EditProfileScreen = ({ navigation }) => {
    return (
	<ScrollView contentContainerStyle={{flexGrow: 1}}>	
		<ImageBackground source={require("./assets/background.png")} style={{ flex: 1, resizeMode: "cover", justifyContent: "center"}}>	
            <View>
                <View style={styles.centerxy}>
                    <Image style={styles.mediumicon} source={require("./assets/profile.png")} />
                </View>
                <View style={styles.centerxy}>
                    <Text style={styles.h2}>Man</Text>
                </View>
            </View>
            <View style={styles.listitems}>
                <View style={(styles.listtext, styles.listonlymargin)}>
                    <Text style={(styles.lighttextcolor, styles.texttoinputs)}>Name</Text>
                </View>
            </View>
            <View>
                <View style={styles.centerallxy}>
                    <TextInput style={styles.inputtext} placeholder="batman" onChangeText={(val) => (editinput = val)}></TextInput>
                </View>
            </View>
            <View style={styles.listitems}>
                <View style={(styles.listtext, styles.listonlymargin)}>
                    <Text style={(styles.lighttextcolor, styles.texttoinputs)}>Mobile Number</Text>
                </View>
            </View>
            <View>
                <View style={styles.centerallxy}>
                    <TextInput style={styles.inputtext} placeholder="0168412679" onChangeText={(val) => (editinput = val)}></TextInput>
                </View>
            </View>
            <View style={styles.listitems}>
                <View style={(styles.listtext, styles.listonlymargin)}>
                    <Text style={(styles.lighttextcolor, styles.texttoinputs)}>Email Address</Text>
                </View>
            </View>
            <View>
                <View style={styles.centerallxy}>
                    <TextInput style={styles.inputtext} placeholder="elonmusk@gmail.com" onChangeText={(val) => (editinput = val)}></TextInput>
                </View>
            </View>
            <View>
                <View style={styles.centerallxy}>
                    <View style={styles.button}>
                        <Button title="Change Password" onPress={() => navigation.navigate("EditPassword")} />
                    </View>
                </View>
            </View>
            <View>
                <View style={styles.centerallxy}>
                    <View style={styles.button}>
                        <Button title="Log Out" onPress={() => navigation.navigate("LoginSelection")} />
                    </View>
                </View>
            </View>
		</ImageBackground>
	</ScrollView>
    );
};

const EditPasswordScreen = ({ navigation }) => {
    return (
	<ScrollView contentContainerStyle={{flexGrow: 1}}>	
		<ImageBackground source={require("./assets/background.png")} style={{ flex: 1, resizeMode: "cover", justifyContent: "center"}}>	
            <View style={styles.listitems}>
                <View style={(styles.listtext, styles.listonlymargintop)}>
                    <Text style={styles.lighttextcolor}>Old Password</Text>
                </View>
            </View>
            <View>
                <View style={styles.centerallxy}>
                    <TextInput style={styles.inputtext} placeholder="Your old password" onChangeText={(val) => (editinput = val)}></TextInput>
                </View>
            </View>
            <View style={styles.listitems}>
                <View style={(styles.listtext, styles.listonlymargin)}>
                    <Text style={styles.lighttextcolor}>New Password</Text>
                </View>
            </View>
            <View>
                <View style={styles.centerallxy}>
                    <TextInput style={styles.inputtext} placeholder="Your new password" onChangeText={(val) => (editinput = val)}></TextInput>
                </View>
            </View>
            <View style={styles.listitems}>
                <View style={(styles.listtext, styles.listonlymargin)}>
                    <Text style={styles.lighttextcolor}>Confirm New Password</Text>
                </View>
            </View>
            <View>
                <View style={styles.centerallxy}>
                    <TextInput style={styles.inputtext} placeholder="Confirm your new password" onChangeText={(val) => (editinput = val)}></TextInput>
                </View>
            </View>
            <View>
                <View style={styles.centerallxy}>
                    <View style={styles.button}>
                        <Button title="Save Changes" onPress={() => navigation.navigate("DMHome")} />
                    </View>
                </View>
            </View>
		</ImageBackground>
	</ScrollView>
    );
};

const OrderListScreen = ({ navigation }) => {
	
	{/*Following code is required to fetch from json file*/}
	
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	
	useEffect(() => {
    fetch('https://api.jsonbin.io/b/5f8740e27243cd7e824f3898/6')
      .then((response) => response.json())
      .then((json) => setData(json.orders))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
	}, []);
	
	
	return (
		<ImageBackground source={require("./assets/background.png")} style={{ flex: 1, resizeMode: "cover", justifyContent: "center"}}>	
				
				{isLoading ? <ActivityIndicator/> : (
				<FlatList
				  data={data}
				  keyExtractor={({ orderid }, index) => orderid}
				  renderItem={({ item }) => (
					<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("OrderDetails")}>
						<View flex={3}>
							<Text numberOfLines={2}style={styles.listfont}>Order ID: {item.orderid}{"\n"}Product: {item.productname}</Text>
						</View>
						<View style={styles.listiconright} flex={1}>
							<Image style={styles.smallicon} source={require("./assets/parcel.png")} />
						</View>
					</TouchableOpacity>
				  )}
				/>
			  )}
		</ImageBackground>
	);
};

const OrderDetailsScreen = ({ navigation }) => {
    return (
	<ScrollView contentContainerStyle={{flexGrow: 1}}>	
		<ImageBackground source={require("./assets/background.png")} style={{ flex: 1, resizeMode: "cover", justifyContent: "center"}}>	
            <View>
                <View style={styles.centerxy}>
                    <Image style={styles.mainpp} source={require("./assets/delivered.png")} />
                </View>
                <View style={(styles.listtext, styles.margin)}>
                    <Text>Your order arrived on...</Text>
                </View>
            </View>
            <View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.listitemscolumn}>
                    <View style={(styles.listtext, styles.margin)}>
                        <Text>Delivered to</Text>
                    </View>
                    <View style={styles.listitemsrow}>
                        <View style={styles.listiconleft}>
                            <Image style={styles.smallicon} source={require("./assets/location.png")} />
                        </View>
                        <View style={styles.listitemscolumn}>
                            <View style={(styles.listtext, styles.margintop)}>
                                <Text>name...</Text>
                            </View>
                            <View style={(styles.listtext, styles.margintop)}>
                                <Text>details...</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.listline} />
		</ImageBackground>
	</ScrollView>
    );
};

const PlaceOrderScreen = ({ navigation }) => {
    return <Text>This Screen is Under Construction</Text>;
};

const OrderPlacedScreen = ({ navigation }) => {
    return <Text>This Screen is Under Construction</Text>;
};

const ConfirmOrderScreen = ({ navigation }) => {
    return <Text>This Screen is Under Construction</Text>;
};

const OrderConfirmedScreen = ({ navigation }) => {
    return <Text>This Screen is Under Construction</Text>;
};

const HelpScreen = ({ navigation }) => {
    return <Text>This Screen is Under Construction</Text>;
};

const ChangePasswordScreen = ({ navigation }) => {
    return <Text>This Screen is Under Construction</Text>;
};

export default App;

