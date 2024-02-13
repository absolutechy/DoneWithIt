import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemDetailsScreen from './screens/ItemDetailsScreen';
import {Ionicons} from "@expo/vector-icons"
import Home from "./screens/Home"
import AddItem from './screens/AddItem';
import Settings from './screens/Settings';
import { data } from './data/data';
import { useNavigation } from '@react-navigation/native';

//Stack

const HomeStack = createNativeStackNavigator()

function HomeStackGroup () {
    const [filteredData, setFilteredData] = useState(data)

    const navigation = useNavigation()

    const handleDelete = (id) => {
        const itemList = filteredData.filter(item => item.id === id)
        setFilteredData(itemList)
        navigation.goBack()
    }
    return (
        <HomeStack.Navigator >
            <HomeStack.Screen name="TabGroup" options={{headerShown: false}}>
                {() => <TabGroup filteredData={filteredData} setFilteredData={setFilteredData} navigation={navigation} />}
            </HomeStack.Screen>
            <HomeStack.Screen name="ItemDetailsScreen" options={{headerShown: false, presentation: "fullScreenModal"}} >
                { () => <ItemDetailsScreen handleDelete={handleDelete} filteredData={filteredData} />}
            </HomeStack.Screen>
        </HomeStack.Navigator>
    )
}

// Bottom Tabs
const Tab = createBottomTabNavigator()

function TabGroup({ filteredData, setFilteredData, navigation }) {
    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [imagePath, setImagePath] = useState("")

    const handlePost = () => {
        const id = 10
        const newData = {id, itemName: title, imagePath, description}
        setFilteredData([...filteredData, newData])
        setTitle("")
        setDescription("")
        setImagePath("")
        navigation.goBack()
    }

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#e74c3c',
                headerShown: false, // Hide header for all screens in the TabGroup
                tabBarStyle: {
                    height: 60,
                    paddingBottom: 10,
                    paddingTop: 10,
                },
            })}
        >
            <Tab.Screen name="Home" options={{tabBarLabel: "Home"}}>
                {() => <Home filteredData={filteredData} setFilteredData={setFilteredData} />}
            </Tab.Screen>
            <Tab.Screen name="gos"
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{backgroundColor: "#fff", borderRadius: 35, width: 70, height: 70, alignItems: "center", justifyContent: "center"}}>
                            <View style={{backgroundColor: "#e74c3c",alignItems: "center", justifyContent: "center", width:60, height: 60 ,borderRadius: 30}}>
                                <Ionicons name="add-circle-sharp" size={40} color="#fff" />   
                            </View>
                        </View>
                    ), tabBarLabel: ""
                        }} 
            >
                {() => <AddItem title={title} setTitle={setTitle} description={description} setDescription={setDescription} imagePath={imagePath} setImagePath={setImagePath} handlePost={handlePost} />}
            </Tab.Screen>
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}

export default function Navigation() {

    return (
            <NavigationContainer>
                <HomeStackGroup />
            </NavigationContainer>
    )
}

const styles = StyleSheet.create({
})
