import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Contacts from "./src/Contacts";
import Profile from "./src/Profile";
import colors from "./utility/colors";

const Stack = createStackNavigator();
const StackNavigator =()=>
{
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Contacts"
                screenOptions={{
                    headerTintColor: 'white',
                    headerStyle: {backgroundColor: 'tomato'},
                    headerTitleAlign:'center'
                }}
            >
                <Stack.Screen name="Contacts" component={Contacts} options={{title:"Contacts"}}/>
                <Stack.Screen name="Profile" component={Profile} options={({route})=>{
                    const {contact} = route.params;
                    const {name} = contact;
                    return{
                        title: name.split(' ')[0],
                        headerTintColor: 'white',
                        headerStyle:{
                            backgroundColor: colors.blue
                        }
                    }
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;