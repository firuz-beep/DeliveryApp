import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions, StyleSheet, SafeAreaView, StatusBar, View, Button, Image, ScrollView, Text, TextInput } from "react-native";

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
                    name="User"
                    component={UserScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="DMHome"
                    component={DMHomeScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="CHome"
                    component={CHomeScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="MHome"
                    component={MHomeScreen}
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
                    name="Register"
                    component={RegisterScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="ChangePassword"
                    component={ChangePasswordScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="PastDeliveries"
                    component={PastDeliveriesScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="PastDelivery"
                    component={PastDeliveryScreen}
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
                <Stack.Screen
                    name="CRegister"
                    component={CRegisterScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="ECRegister"
                    component={ECRegisterScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="DMCRegister"
                    component={DMCRegisterScreen}
                    options={{ title: "Delivery App", headerTitleAlign: "center", headerStyle: { backgroundColor: THEME_COLOR }, headerTintColor: "white", headerTitleStyle: { fontWeight: "bold" }, headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="RegisterSuccess"
                    component={RegisterSuccessScreen}
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
        backgroundColor: "#DEDEDE",
        height: 5,
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
        marginRight: "15%",
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

    h1: {
        fontSize: 25,
        marginBottom: "5%",
    },

    h2: {
        fontSize: 20,
        marginBottom: "5%",
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
});

const UserScreen = ({ navigation }) => {
	return (
	<ScrollView>
		<Button style={styles.button} title="Customer" onPress={() => navigation.navigate("CHome")} />
		<Button style={styles.button} title="Deliverymen" onPress={() => navigation.navigate("DMHome")} />
		<Button style={styles.button} title="Delivery Service Provider" onPress={() => navigation.navigate("DMHome")} />
		<Button style={styles.button} title="Company" onPress={() => navigation.navigate("MHome")} />
		</ScrollView>
	);
};

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.centerallxy}>
                <Image borderWidth={2} borderColor={THEME_COLOR} borderRadius={360} blurRadius={0} style={styles.mainpp} source={require("./assets/deliverymen.png")}></Image>
                <Text style={styles.margintop}>Email</Text>
                <TextInput style={styles.inputtext} placeholder="e.g. elonmusk@gmail.com" onChangeText={(val) => (email = val)}></TextInput>
                <Text style={styles.margintop}>Password</Text>
                <TextInput secureTextEntry={true} placeholder="e.g. IownTesla" style={styles.inputtext} onChangeText={(val) => (password = val)}></TextInput>
                <View style={styles.button}>
                    <Button title="Login" onPress={() => navigation.navigate("DMHome")} />
                </View>
                <Text style={{ color: THEME_COLOR }} numberOfLines={2} onPress={() => navigation.navigate("Register")}>
                    {"\n"}Click Here to Create a New Account
                </Text>
            </View>
        </ScrollView>
    );
};

{
    /* To Shaheem: you can change the list to match deliverymen */
}
const DMHomeScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View>
                <View style={styles.centerxy}>
                    <Image style={styles.mainpp} source={require("./assets/profile.png")} />
                </View>
                <View style={(styles.listtext, styles.margin)}>
                    <Text style={styles.h1}>Hey, Deliveryman</Text>
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
                    <Button title="View Past Deliveries" onPress={() => navigation.navigate("PastDeliveries")} />
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
        </ScrollView>
    );
};

const CHomeScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View>
                <View style={styles.centerxy}>
                    <Image style={styles.mainpp} source={require("./assets/profile.png")} />
                </View>
                <View style={(styles.listtext, styles.margin)}>
                    <Text style={styles.h1}>Hey, customer name...</Text>
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
                    <Button title="View Past Deliveries" onPress={() => navigation.navigate("PastDeliveries")} />
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
        </ScrollView>
    );
};

const MHomeScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View>
                <View style={styles.listtext, styles.listonlymargintop}>
                    <Text style={styles.h1}>Company name...</Text>
                </View>
            </View>
            <View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.listtext}>
                    <Button title="View Past Orders" onPress={() => navigation.navigate("PastDeliveries")} />
                </View>
                <View style={styles.listiconright}>
                    <Image style={styles.smallicon} source={require("./assets/pastorder.png")} />
                </View>
            </View>
            <View style={styles.listline} />
            <View style={styles.listitems}>
                <View style={styles.listtext}>
                    <Button title="View Current Order" onPress={() => navigation.navigate("PastDeliveries")} />
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
                        <Button title="Log Out" onPress={() => navigation.navigate("Home")} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const EditProfileScreen = ({ navigation }) => {
    return (
        <ScrollView>
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
                        <Button title="Log Out" onPress={() => navigation.navigate("Home")} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const EditPasswordScreen = ({ navigation }) => {
    return (
        <ScrollView>
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

const RegisterScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.centerallxy}>
                <Text>Select Account Type</Text>
                <View style={styles.button}>
                    <Button title="Customer" onPress={() => navigation.navigate("CRegister")} />
                </View>
                <View style={styles.button}>
                    <Button title="E-Commerce Platform" onPress={() => navigation.navigate("ECRegister")} />
                </View>
                <View style={styles.button}>
                    <Button title="Delivery Men Company" onPress={() => navigation.navigate("DMCRegister")} />
                </View>
            </View>
        </ScrollView>
    );
};

const LoginScreen = ({ navigation }) => {
    return <Text>This is Janes profile</Text>;
};

const ChangePasswordScreen = ({ navigation }) => {
    return <Text>This is Janes profile</Text>;
};

const PastDeliveriesScreen = ({ navigation }) => {
    return PastDeliveriesList({ navigation }),PastDeliveriesList({ navigation }),PastDeliveriesList({ navigation });
};

{/* To Firuz: pass order history here */}
const PastDeliveriesList = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.listitemsonly}>
                <View style={styles.listitems}>
                    <View style={styles.listitemscolumn}>
                        <View>
                            <Button title="Order..." onPress={() => navigation.navigate("PastDelivery")} />
                        </View>
                        <View style={styles.datemargin}>
                            <Text>date...</Text>
                        </View>
                    </View>
                    <View style={styles.listiconright}>
                        <Image style={styles.smallicon} source={require("./assets/parcel.png")} />
                    </View>
                </View>
                <View style={styles.listline} />
            </View>
        </ScrollView>
    );
};

const PastDeliveryScreen = ({ navigation }) => {
    return (
        <ScrollView>
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
    return <Text>This is Janes profile</Text>;
};

const OrderPlacedScreen = ({ navigation }) => {
    return <Text>This is Janes profile</Text>;
};

const ConfirmOrderScreen = ({ navigation }) => {
    return <Text>This is Janes profile</Text>;
};

const OrderConfirmedScreen = ({ navigation }) => {
    return <Text>This is Janes profile</Text>;
};

const HelpScreen = ({ navigation }) => {
    return <Text>This is Janes profile</Text>;
};

const CRegisterScreen = ({ navigation }) => {
    return (
        <View style={styles.centerallxy}>
            <Text>Fill in the following details:{"\n"}</Text>
            <Text>E-mail</Text>
            <TextInput style={styles.inputtext} placeholder="e.g. elonmusk@gmail.com" onChangeText={(val) => (registeryinput = val)}></TextInput>
            <Text>Password</Text>
            <TextInput style={styles.inputtext} placeholder="e.g. IownTesla" onChangeText={(val) => (registeryinput = val)}></TextInput>
            <Text>Full Name</Text>
            <TextInput style={styles.inputtext} placeholder="e.g. Elon Musk" onChangeText={(val) => (registeryinput = val)}></TextInput>
            <Text>Address</Text>
            <TextInput style={styles.inputtext} placeholder="e.g. 3500 Deer Creek Road Palo Alto, CA 94304" onChangeText={(val) => (registeryinput = val)}></TextInput>
            <Text>Contact Number</Text>
            <TextInput style={styles.inputtext} placeholder="e.g. 8006627232" onChangeText={(val) => (registeryinput = val)}></TextInput>

            <View style={styles.button}>
                <Button title="Register" onPress={() => navigation.navigate("RegisterSuccess")} />
            </View>
        </View>
    );
};

const ECRegisterScreen = ({ navigation }) => {
    return (
        <View style={styles.centerallxy}>
            <Text>Fill in the following details:{"\n"}</Text>
            <Text>E-mail</Text>
            <TextInput style={styles.inputtext} placeholder="e.g. pcimage@gmail.com" onChangeText={(val) => (registeryinput = val)}></TextInput>
            <Text>Password</Text>
            <TextInput style={styles.inputtext} placeholder="e.g. ilovecomputers" onChangeText={(val) => (registeryinput = val)}></TextInput>
            <Text>Company Name</Text>
            <TextInput style={styles.inputtext} placeholder="e.g. PC Image" onChangeText={(val) => (registeryinput = val)}></TextInput>
            <Text>Contact Number</Text>
            <TextInput style={styles.inputtext} placeholder="e.g. 082246503" onChangeText={(val) => (registeryinput = val)}></TextInput>

            <View style={styles.button}>
                <Button title="Register" onPress={() => navigation.navigate("RegisterSuccess")} />
            </View>
        </View>
    );
};

const DMCRegisterScreen = ({ navigation }) => {
    return (
        <View style={styles.centerallxy}>
            <Text>Fill in the following details:{"\n"}</Text>
            <Text>E-mail</Text>
            <TextInput style={styles.inputtext} placeholder="e.g. qqrunners@gmail.com" onChangeText={(val) => (registeryinput = val)}></TextInput>
            <Text>Password</Text>
            <TextInput style={styles.inputtext} placeholder="e.g. iprovidedeliverymen" onChangeText={(val) => (registeryinput = val)}></TextInput>
            <Text>Full Name</Text>
            <TextInput style={styles.inputtext} placeholder="e.g. Quentin Quantavius" onChangeText={(val) => (registeryinput = val)}></TextInput>
            <Text>Contact Number</Text>
            <TextInput style={styles.inputtext} placeholder="e.g. 090078601" onChangeText={(val) => (registeryinput = val)}></TextInput>
            <Text>Bank Account Number</Text>
            <TextInput style={styles.inputtext} placeholder="e.g. 99135123908712312" onChangeText={(val) => (registeryinput = val)}></TextInput>

            <View style={styles.button}>
                <Button title="Register" onPress={() => navigation.navigate("RegisterSuccess")} />
            </View>
        </View>
    );
};

const RegisterSuccessScreen = ({ navigation }) => {
    return (
        <View style={styles.RegisterSuccess}>
            <Image borderRadius={360} blurRadius={0} style={styles.mainpp} source={require("./assets/approval.png")}></Image>
            <Text style={{ color: "#FFFFFF" }}>Your Account Has Been Registered Successfully{"\n"}</Text>
            <Button title="Return To Login Screen" onPress={() => navigation.navigate("Home")} />
        </View>
    );
};

export default App;
