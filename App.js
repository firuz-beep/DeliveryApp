import "react-native-gesture-handler";
import React, { useEffect, useState } from 'react';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import { ActivityIndicator, FlatList, Dimensions, StyleSheet, SafeAreaView, StatusBar, View, Button, Image, ScrollView, Text, TextInput, ImageBackground, TouchableOpacity } from "react-native";

const Stack = createStackNavigator();
const THEME_COLOR = "#2081D0";
const DISABLED_COLOR = '#999999';

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
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
				<Stack.Screen
                    name="ALogin"
                    component={ALoginScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
				<Stack.Screen
                    name="CLogin"
                    component={CLoginScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
				<Stack.Screen
                    name="DMLogin"
                    component={DMLoginScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
				<Stack.Screen
                    name="DMCLogin"
                    component={DMCLoginScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
				<Stack.Screen
                    name="ECCLogin"
                    component={ECCLoginScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
				<Stack.Screen
                    name="AHome"
                    component={AHomeScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
                <Stack.Screen
                    name="CHome"
                    component={CHomeScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
                <Stack.Screen
                    name="DMHome"
                    component={DMHomeScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
                <Stack.Screen
                    name="DMCHome"
                    component={DMCHomeScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
				<Stack.Screen
                    name="ECCHome"
                    component={ECCHomeScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
                <Stack.Screen
                    name="CRegister"
                    component={CRegisterScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
                <Stack.Screen
                    name="DMRegister"
                    component={DMRegisterScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
				<Stack.Screen
                    name="DMCRegister"
                    component={DMCRegisterScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
				<Stack.Screen
                    name="ECCRegister"
                    component={ECCRegisterScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
                <Stack.Screen
                    name="RegisterSuccess"
                    component={RegisterSuccessScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
                <Stack.Screen
                    name="EditProfile"
                    component={EditProfileScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
                <Stack.Screen
                    name="EditPassword"
                    component={EditPasswordScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
                <Stack.Screen
                    name="ChangePassword"
                    component={ChangePasswordScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
                <Stack.Screen
                    name="OrderList"
                    component={OrderListScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
				<Stack.Screen
                    name="ECCList"
                    component={ECCListScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
				<Stack.Screen
                    name="ComplaintList"
                    component={ComplaintListScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
				<Stack.Screen
                    name="CList"
                    component={CListScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
				<Stack.Screen
                    name="DMList"
                    component={DMListScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
				<Stack.Screen
                    name="DMCList"
                    component={DMCListScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
                <Stack.Screen
                    name="OrderDetails"
                    component={OrderDetailsScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
                <Stack.Screen
                    name="PlaceOrder"
                    component={PlaceOrderScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
                <Stack.Screen
                    name="OrderPlaced"
                    component={OrderPlacedScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
                <Stack.Screen
                    name="ConfirmOrder"
                    component={ConfirmOrderScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
                <Stack.Screen
                    name="OrderConfirmed"
                    component={OrderConfirmedScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
                <Stack.Screen
                    name="Help"
                    component={HelpScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
	bgcolor: {
		backgroundColor: "#ffffff"
	},
	
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
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 5,
		marginBottom: 5,
	},
	
	buttonposition: {
		borderRadius: 10,
		marginLeft: 10,
		marginRight: 10,
		marginTop: 5,
		marginBottom: 5,
		padding: 10,
		backgroundColor: THEME_COLOR,
		width: '95%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	
	buttondisabled: {
		borderRadius: 10,
		marginLeft: 10,
		marginRight: 10,
		marginTop: 5,
		marginBottom: 5,
		padding: 10,
		backgroundColor: DISABLED_COLOR,
		width: '95%',
		alignItems: 'center',
		justifyContent: 'center',
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
		color: "#000000",
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
	
	listview: {
		borderRadius: 10,
		marginLeft: 10,
		marginRight: 10,
		marginTop: 5,
		marginBottom: 5,
		padding: 10,
		backgroundColor: "#CDCDCD",
		flexDirection: "row",
		justifyContent: "space-between"
	},
});

const LoginSelectionScreen = ({ navigation }) => {
	return (
	<ScrollView style={ styles.bgcolor }>	
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
	</ScrollView>
	);
};

const ALoginScreen = ({ navigation }) => {
    return (
	<ScrollView style={ styles.bgcolor }>	
            <View style={styles.centerallxy}>
                <Image style={styles.aprofileimage} source={require("./assets/aprofile.png")}></Image>
				<Text style={styles.h3}>Admin Login</Text>
				<Text>{"\n"}</Text>
				<TextInput style={styles.inputtext} placeholder="Email" onChangeText={(val) => (email = val)}></TextInput>
                <TextInput secureTextEntry={true} placeholder="Password" style={styles.inputtext} onChangeText={(val) => (password = val)}></TextInput>
				<Text>{"\n"}</Text>
				<View style={styles.button}>
                    <Button title="Login" onPress={() => navigation.dispatch(StackActions.replace('AHome'))} />
                </View>
            </View>
	</ScrollView>
    );
};

const CLoginScreen = ({ navigation }) => {
    return (
	<ScrollView style={ styles.bgcolor }>	
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
	</ScrollView>
    );
};

const DMLoginScreen = ({ navigation }) => {
    return (
	<ScrollView style={ styles.bgcolor }>	
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
	</ScrollView>
    );
};

const DMCLoginScreen = ({ navigation }) => {
    return (
	<ScrollView style={ styles.bgcolor }>	
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
	</ScrollView>
    );
};

const ECCLoginScreen = ({ navigation }) => {
    return (
	<ScrollView style={ styles.bgcolor }>	
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
	</ScrollView>
    );
};

const CRegisterScreen = ({ navigation }) => {
    return (
	<ScrollView style={ styles.bgcolor }>	
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
	<ScrollView style={ styles.bgcolor }>	
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
	</ScrollView>
    );
};

const ECCRegisterScreen = ({ navigation }) => {
    return (
	<ScrollView style={ styles.bgcolor }>	
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
	<ScrollView style={ styles.bgcolor }>	
		<View>
			<View style={styles.centerxy}>
				<Image style={styles.aprofileimage} source={require("./assets/aprofile.png")} />
			</View>
			<View style={(styles.listtext, styles.margin)}>
				<Text style={styles.h3}>Welcome Admin</Text>
			</View>
		</View>
		
		<View style={styles.listlineblue} />
		
		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("OrderList")}>
			<Text style={styles.buttonfont}>View All Orders</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/parcel.png")} />
			</View>
		</TouchableOpacity>
		
		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("DMCList")}>
			<Text style={styles.buttonfont}>View Delivery Men Companies</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/dmcicon.png")} />
			</View>
		</TouchableOpacity>

		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("ECCList")}>
			<Text style={styles.buttonfont}>View E-Commerce Companies</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/eccicon.png")} />
			</View>
		</TouchableOpacity>
		
		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("CList")}>
			<Text style={styles.buttonfont}>View Customers</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/customericon.png")} />
			</View>
		</TouchableOpacity>
		
		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("ComplaintList")}>
			<Text style={styles.buttonfont}>View Complaints</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/complainticon.png")} />
			</View>
		</TouchableOpacity>
		
		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("Help")}>
			<Text style={styles.buttonfont}>Payment Options</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/paymenticon.png")} />
			</View>
		</TouchableOpacity>
	</ScrollView>
    );
};

const CHomeScreen = ({ navigation }) => {
    return (
	<ScrollView style={ styles.bgcolor }>	
		<View>
			<View style={styles.centerxy}>
				<Image style={styles.aprofileimage} source={require("./assets/cprofile.png")} />
			</View>
			<View style={(styles.listtext, styles.margin)}>
				<Text style={styles.h3}>Welcome Customer</Text>
			</View>
		</View>
		
		<View style={styles.listlineblue} />
		
		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("OrderPlaced")}>
			<Text style={styles.buttonfont}>Ongoing Delivery Order</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/dmicon.png")} />
			</View>
		</TouchableOpacity>
		
		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("OrderList")}>
			<Text style={styles.buttonfont}>Delivery Orders History</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/ordericon.png")} />
			</View>
		</TouchableOpacity>

		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("EditProfile")}>
			<Text style={styles.buttonfont}>Edit Profile</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/editprofileicon.png")} />
			</View>
		</TouchableOpacity>
		
		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("Help")}>
			<Text style={styles.buttonfont}>Payment Options</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/paymenticon.png")} />
			</View>
		</TouchableOpacity>
		
		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("Help")}>
			<Text style={styles.buttonfont}>Get Help</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/helpicon.png")} />
			</View>
		</TouchableOpacity>
	</ScrollView>
    );
};

const DMHomeScreen = ({ navigation }) => {
    return (
	<ScrollView style={ styles.bgcolor }>	
		<View>
			<View style={styles.centerxy}>
				<Image style={styles.aprofileimage} source={require("./assets/dmprofile.png")} />
			</View>
			<View style={(styles.listtext, styles.margin)}>
				<Text style={styles.h3}>Welcome Delivery Man</Text>
			</View>
		</View>
		
		<View style={styles.listlineblue} />
		
		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("OrderPlaced")}>
			<Text style={styles.buttonfont}>Ongoing Delivery Order</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/dmicon.png")} />
			</View>
		</TouchableOpacity>
		
		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("OrderList")}>
			<Text style={styles.buttonfont}>Delivery Orders History</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/ordericon.png")} />
			</View>
		</TouchableOpacity>

		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("EditProfile")}>
			<Text style={styles.buttonfont}>Edit Profile</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/editprofileicon.png")} />
			</View>
		</TouchableOpacity>
		
		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("Help")}>
			<Text style={styles.buttonfont}>Payment Options</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/paymenticon.png")} />
			</View>
		</TouchableOpacity>

		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("Help")}>
			<Text style={styles.buttonfont}>Get Help</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/helpicon.png")} />
			</View>
		</TouchableOpacity>
	</ScrollView>
    );
};

const DMCHomeScreen = ({ navigation }) => {
    return (
	<ScrollView style={ styles.bgcolor }>	
		<View>
			<View style={styles.centerxy}>
				<Image style={styles.aprofileimage} source={require("./assets/dmcprofile.png")} />
			</View>
			<View style={(styles.listtext, styles.margin)}>
				<Text style={styles.h3}>Welcome DM Company</Text>
			</View>
		</View>
		
		<View style={styles.listlineblue} />
		
		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("OrderList")}>
			<Text style={styles.buttonfont}>Delivery Orders History</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/ordericon.png")} />
			</View>
		</TouchableOpacity>
		
		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("DMList")}>
			<Text style={styles.buttonfont}>Delivery Men</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/dmicon.png")} />
			</View>
		</TouchableOpacity>

		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("EditProfile")}>
			<Text style={styles.buttonfont}>Edit Profile</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/editprofileicon.png")} />
			</View>
		</TouchableOpacity>
		
		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("Help")}>
			<Text style={styles.buttonfont}>Payment Options</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/paymenticon.png")} />
			</View>
		</TouchableOpacity>

		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("Help")}>
			<Text style={styles.buttonfont}>Get Help</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/helpicon.png")} />
			</View>
		</TouchableOpacity>
	</ScrollView>
    );
};

const ECCHomeScreen = ({ navigation }) => {
	return (
	<ScrollView style={ styles.bgcolor }>	
		<View>
			<View style={styles.centerxy}>
				<Image style={styles.aprofileimage} source={require("./assets/eccprofile.png")} />
			</View>
			<View style={(styles.listtext, styles.margin)}>
				<Text style={styles.h3}>Welcome ECC</Text>
			</View>
		</View>
		
		<View style={styles.listlineblue} />
		
		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("OrderList")}>
			<Text style={styles.buttonfont}>Ongoing Delivery Orders</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/dmicon.png")} />
			</View>
		</TouchableOpacity>
		
		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("OrderList")}>
			<Text style={styles.buttonfont}>Delivery Orders History</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/ordericon.png")} />
			</View>
		</TouchableOpacity>

		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("EditProfile")}>
			<Text style={styles.buttonfont}>Edit Profile</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/editprofileicon.png")} />
			</View>
		</TouchableOpacity>

		<TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate("Help")}>
			<Text style={styles.buttonfont}>Get Help</Text>
			<View style={styles.listiconright}>
				<Image style={styles.smallicon} source={require("./assets/helpicon.png")} />
			</View>
		</TouchableOpacity>
	</ScrollView>
    );
};

const EditProfileScreen = ({ navigation }) => {
    return (
	<ScrollView style={ styles.bgcolor }>	
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
	</ScrollView>
    );
};

const EditPasswordScreen = ({ navigation }) => {
    return (
	<ScrollView style={ styles.bgcolor }>	
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
	</ScrollView>
    );
};

const OrderListScreen = ({ navigation }) => {
	
	{/*Following code is required to fetch from json file*/}
	
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	
	useEffect(() => {
    fetch('https://api.jsonbin.io/b/5f8c7260058d9a7b94dd4e4c/2')
      .then((response) => response.json())
      .then((json) => setData(json.orders))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
	}, []);
	
	
	return (
		<View style={styles.bgcolor}>
				
				{isLoading ? <ActivityIndicator/> : (
				<FlatList
				  data={data}
				  keyExtractor={({ orderid }, index) => orderid}
				  renderItem={({ item }) => (
					<TouchableOpacity style={styles.listview} onPress={() => navigation.navigate("OrderDetails")}>
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
		</View>
	);
};

const ECCListScreen = ({ navigation }) => {
	
	{/*Following code is required to fetch from json file*/}
	
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	
	useEffect(() => {
    fetch('https://api.jsonbin.io/b/5f8c70d2adfa7a7bbea5348e/1')
      .then((response) => response.json())
      .then((json) => setData(json.ecommercecompany))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
	}, []);
	
	
	return (
		<View style={styles.bgcolor}>
				
				{isLoading ? <ActivityIndicator/> : (
				<FlatList
				  data={data}
				  keyExtractor={({ eccid }, index) => eccid}
				  renderItem={({ item }) => (
					<TouchableOpacity style={styles.listview} onPress={() => navigation.navigate("OrderDetails")}>
						<View flex={3}>
							<Text numberOfLines={2}style={styles.listfont}>ECC ID: {item.eccid}{"\n"}ECC Name: {item.eccname}</Text>
						</View>
						<View style={styles.listiconright} flex={1}>
							<Image style={styles.smallicon} source={require("./assets/eccicon.png")} />
						</View>
					</TouchableOpacity>
				  )}
				/>
			  )}
		</View>
	);
};

const ComplaintListScreen = ({ navigation }) => {
	
	{/*Following code is required to fetch from json file*/}
	
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	
	useEffect(() => {
    fetch('https://api.jsonbin.io/b/5f8c73f77243cd7e8250b5b5/1')
      .then((response) => response.json())
      .then((json) => setData(json.complaint))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
	}, []);
	
	
	return (
		<View style={styles.bgcolor}>
				
				{isLoading ? <ActivityIndicator/> : (
				<FlatList
				  data={data}
				  keyExtractor={({ complaintid }, index) => complaintid}
				  renderItem={({ item }) => (
					<TouchableOpacity style={styles.listview} onPress={() => navigation.navigate("OrderDetails")}>
						<View flex={3}>
							<Text numberOfLines={2}style={styles.listfont}>Complaint ID: {item.complaintid}{"\n"}Status: {item.complaintstatus}</Text>
						</View>
						<View style={styles.listiconright} flex={1}>
							<Image style={styles.smallicon} source={require("./assets/complainticon.png")} />
						</View>
					</TouchableOpacity>
				  )}
				/>
			  )}
		</View>
	);
};

const CListScreen = ({ navigation }) => {
	
	{/*Following code is required to fetch from json file*/}
	
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	
	useEffect(() => {
    fetch('https://api.jsonbin.io/b/5f8c736dadfa7a7bbea53552/1')
      .then((response) => response.json())
      .then((json) => setData(json.customer))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
	}, []);
	
	
	return (
		<View style={styles.bgcolor}>
				
				{isLoading ? <ActivityIndicator/> : (
				<FlatList
				  data={data}
				  keyExtractor={({ cid }, index) => cid}
				  renderItem={({ item }) => (
					<TouchableOpacity style={styles.listview} onPress={() => navigation.navigate("OrderDetails")}>
						<View flex={3}>
							<Text numberOfLines={2}style={styles.listfont}>Customer ID: {item.cid}{"\n"}Name: {item.cname}</Text>
						</View>
						<View style={styles.listiconright} flex={1}>
							<Image style={styles.smallicon} source={require("./assets/customericon.png")} />
						</View>
					</TouchableOpacity>
				  )}
				/>
			  )}
		</View>
	);
};

const DMCListScreen = ({ navigation }) => {
	
	{/*Following code is required to fetch from json file*/}
	
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	
	useEffect(() => {
    fetch('https://api.jsonbin.io/b/5f8c713a7243cd7e8250b4ec/2')
      .then((response) => response.json())
      .then((json) => setData(json.deliverymencompany))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
	}, []);
	
	
	return (
		<View style={styles.bgcolor}>
				
				{isLoading ? <ActivityIndicator/> : (
				<FlatList
				  data={data}
				  keyExtractor={({ dmcid }, index) => dmcid}
				  renderItem={({ item }) => (
					<TouchableOpacity style={styles.listview} onPress={() => navigation.navigate("OrderDetails")}>
						<View flex={3}>
							<Text numberOfLines={2}style={styles.listfont}>DMC ID: {item.dmcid}{"\n"}DMC Name: {item.dmcname}</Text>
						</View>
						<View style={styles.listiconright} flex={1}>
							<Image style={styles.smallicon} source={require("./assets/dmcicon.png")} />
						</View>
					</TouchableOpacity>
				  )}
				/>
			  )}
		</View>
	);
};

const DMListScreen = ({ navigation }) => {
	
	{/*Following code is required to fetch from json file*/}
	
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	
	useEffect(() => {
    fetch('https://api.jsonbin.io/b/5f8c81a17243cd7e8250b9a0/6')
      .then((response) => response.json())
      .then((json) => setData(json.deliveryman))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
	}, []);
	
	
	return (
		<View style={styles.bgcolor}>
				
				{isLoading ? <ActivityIndicator/> : (
				<FlatList
				  data={data}
				  keyExtractor={({ dmid }, index) => dmid}
				  renderItem={({ item }) => (
					<TouchableOpacity style={styles.listview} onPress={() => navigation.navigate("OrderDetails")}>
						<View flex={3}>
							<Text numberOfLines={2}style={styles.listfont}>DM ID: {item.dmid}{"\n"}DM Name: {item.dmname}</Text>
						</View>
						<View style={styles.listiconright} flex={1}>
							<Image style={styles.smallicon} source={require("./assets/dmicon.png")} />
						</View>
					</TouchableOpacity>
				  )}
				/>
			  )}
		</View>
	);
};

const OrderDetailsScreen = ({ navigation }) => {
    return (
	<ScrollView style={styles.bgcolor}>	
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
	</ScrollView>
    );
};

const PlaceOrderScreen = ({ navigation }) => {
    return <Text>This Screen is Under Construction</Text>;
};

const OrderPlacedScreen = ({ navigation }) => {
	return (
	<ScrollView style={styles.bgcolor}>	
            <View>
                <View style={styles.centerxy}>
                    <Image style={styles.mainpp} source={require("./assets/delivering.gif")} />
                </View>
                <View style={(styles.listtext, styles.margin)}>
                    <Text>Your order is on its way!</Text>
                </View>
            </View>
            <View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.listitemscolumn}>
                    <View style={(styles.listtext, styles.margin)}>
                        <Text>Delivering to</Text>
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
				{/* functionality should be removed */}
			<View style={styles.buttondisabled}>
				<TouchableOpacity onPress={() => navigation.navigate("ConfirmOrder")}>
					<View>
						<Text style={ styles.buttontext }>Confirm Delivery</Text>
					</View>
				</TouchableOpacity>
			</View>
	</ScrollView>
	);
};

const ConfirmOrderScreen = ({ navigation }) => {
    return (
	<ScrollView style={styles.bgcolor}>	
            <View>
                <View style={styles.centerxy}>
                    <Image style={styles.mainpp} source={require("./assets/delivering.gif")} />
                </View>
                <View style={(styles.listtext, styles.margin)}>
                    <Text>Your order is almost there!</Text>
                </View>
            </View>
            <View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.listitemscolumn}>
                    <View style={(styles.listtext, styles.margin)}>
                        <Text>Delivering to</Text>
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
			<View style={styles.buttonposition}>
				<TouchableOpacity onPress={() => navigation.navigate("OrderConfirmed")}>
					<View>
						<Text style={ styles.buttontext }>Confirm Delivery</Text>
					</View>
				</TouchableOpacity>
			</View>
	</ScrollView>
	);
};

const OrderConfirmedScreen = ({ navigation }) => {
    return (
	<ScrollView style={styles.bgcolor}>	
            <View>
                <View style={styles.centerxy}>
                    <Image style={styles.mainpp} source={require("./assets/delivered.png")} />
                </View>
                <View style={(styles.listtext, styles.margin)}>
                    <Text>Your order has arrived!</Text>
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
	</ScrollView>
	);
};

const HelpScreen = ({ navigation }) => {
    return <Text>This Screen is Under Construction</Text>;
};

const ChangePasswordScreen = ({ navigation }) => {
    return <Text>This Screen is Under Construction</Text>;
};

export default App;

