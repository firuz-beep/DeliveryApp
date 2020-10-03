import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, SafeAreaView, StatusBar, View, Button, Image, ScrollView, Text } from "react-native";

const Stack = createStackNavigator();

const THEME_COLOR = "#2081D0";

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: "Delivery App", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="EditProfile"
                    component={EditProfileScreen}
                    options={{ title: "Delivery App", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{ title: "Delivery App", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ title: "Delivery App", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="ChangePassword"
                    component={ChangePasswordScreen}
                    options={{ title: "Delivery App", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="PastDeliveries"
                    component={PastDeliveriesScreen}
                    options={{ title: "Delivery App", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="PastDelivery"
                    component={PastDeliveryScreen}
                    options={{ title: "Delivery App", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="PlaceOrder"
                    component={PlaceOrderScreen}
                    options={{ title: "Delivery App", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="OrderPlaced"
                    component={OrderPlacedScreen}
                    options={{ title: "Delivery App", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="ConfirmOrder"
                    component={ConfirmOrderScreen}
                    options={{ title: "Delivery App", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="OrderConfirmed"
                    component={OrderConfirmedScreen}
                    options={{ title: "Delivery App", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="Help"
                    component={HelpScreen}
                    options={{ title: "Delivery App", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
	
	centerxy: {
		justifyContent: "center",
		alignItems: 'center'
	},
	
	margin: {
		marginLeft: '5%'
	},
	
	listline: {
		backgroundColor: '#DEDEDE',
		height: 5,
		marginTop: '2%',
		marginBottom: '2%'
	},
	
	icon: {
		width: 50,
		height: 50,
		marginRight: '15%'
	},
	
	listitems: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: '3%'
	},
	
	listtext: {
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	
	listicon: {
		alignItems: 'flex-end'
	},
	
	mainpp: {
		width: 250,
		height: 250,
		marginTop: '10%',
		marginBottom: '10%'
	},
	
	h1: {
		fontSize: 25,
		marginBottom: '5%'
	},
	
	h2: {
		fontSize: 20,
		marginBottom: '5%'
	},
	
	button: {
		width: 250,
		justifyContent: 'center'
	}
});

const HomeScreen = ({ navigation }) => {
    return (
        <View>
			<View>
                <View style={styles.centerxy}>
					<Image blurRadius={0} style={styles.mainpp} source={require("./assets/profile.png")}></Image>
                </View>
                <View style={styles.listtext, styles.margin}>
                    <Text style={styles.h1}>Hey, man</Text>
                </View>
            </View>
			<View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.button}>
                    <Button title="Edit Profile" onPress={() => navigation.navigate("EditProfile", { name: "Jane" })} />
                </View>
                <View style={styles.listicon}>
                    <Image style={styles.icon} source={require('./assets/parcel.png')} />
                </View>
            </View>
			<View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.button}>
                    <Button title="View Past Deliveries" onPress={() => navigation.navigate("PastDeliveries", { name: "Jane" })} />
                </View>
                <View style={styles.listicon}>
                    <Image style={styles.icon} source={{ uri: "http://loremflickr.com/g/50/50/paris" }} />
                </View>
            </View>
			<View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.button}>
                    <Button title="View Current Delivery" onPress={() => navigation.navigate("OrderPlaced", { name: "Jane" })} />
                </View>
                <View style={styles.listicon}>
                    <Image style={styles.icon} source={{ uri: "http://loremflickr.com/g/50/50/paris" }} />
                </View>
            </View>
			<View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.button}>
                    <Button title="Get Help" onPress={() => navigation.navigate("Help", { name: "Jane" })} />
                </View>
                <View style={styles.listicon}>
                    <Image style={styles.icon} source={{ uri: "http://loremflickr.com/g/50/50/paris" }} />
                </View>
            </View>
			<View style={styles.listline} />
        </View>
    );
};

const EditProfileScreen = () => {
    return <Text>This is Janile</Text>;
};

const RegisterScreen = () => {
    return <Text>This is Jane's profile</Text>;
};

const LoginScreen = () => {
    return <Text>This is Jane's profile</Text>;
};

const ChangePasswordScreen = () => {
    return <Text>This is Jane's profile</Text>;
};

const PastDeliveriesScreen = () => {
    return <Text>This is Jane's profile</Text>;
};

const PastDeliveryScreen = () => {
    return <Text>This is Jane's profile</Text>;
};

const PlaceOrderScreen = () => {
    return <Text>This is Jane's profile</Text>;
};

const OrderPlacedScreen = () => {
    return <Text>This is Jane's profile</Text>;
};

const ConfirmOrderScreen = () => {
    return <Text>This is Jane's profile</Text>;
};

const OrderConfirmedScreen = () => {
    return <Text>This is Jane's profile</Text>;
};

const HelpScreen = () => {
    return <Text>This is Jane's profile</Text>;
};

export default App;
