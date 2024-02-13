import { StyleSheet, Text, View, Image, StatusBar, TextInput, Pressable, ScrollView, ImageBackground, SafeAreaView, Platform } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import MapView from "react-native-maps"
import {Ionicons} from "@expo/vector-icons"
import { data } from '../data/data'

const ItemDetailsScreen = ({ handleDelete, filteredData }) => {

  const route = useRoute()
  const { item } = route.params

  const currentItem = console.log(filteredData.find(product => (product.id).toString === item.id))

  const navigation = useNavigation()


  console.log(filteredData.length)

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <Pressable onPress={() => navigation.goBack()} style={styles.closeIcon} >
            <Ionicons name="close-circle" size={40} color="#e74c3c" />
          </Pressable>
          <Pressable style={styles.deleteIcon} onPress={() => handleDelete(currentItem.id)}>
            <Ionicons name="trash" size={40} color="#e74c3c" />
          </Pressable>
          <ImageBackground source={item.imagePath} style={styles.image} />
        </View>
        <View style={styles.itemDetailsContainer}>
          <View style={styles.itemTitle}>
            <Text style={styles.name}>{item.itemName}</Text>
            <Text style={styles.price}>{"$" + item.itemPrice}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <View style={styles.userSection}>
            <Image source={item.userImage} style={styles.userImage} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{item.userName}</Text>  
              <Text style={styles.userListings}>{`${item.userListings} ${item.userListings > 1 ? "Listings" : "Listing"}` }</Text>  
            </View>
          </View>
          <View style={styles.contactSection}>
            <TextInput style={styles.textInput} defaultValue='Is this still available?'/>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Contact Seller</Text>
            </Pressable>
          </View>
        </View>
          <MapView style={styles.map} />
      </View>
    </ScrollView>
  )
}

export default ItemDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    position: "relative"
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  closeIcon: {
    position: "absolute",
    zIndex: 1,
    top: Platform.OS === "android" ? StatusBar.currentHeight : 40,
    left: 10,
    backgroundColor: "#fff",
    borderRadius: 50
  },
  deleteIcon: {
    position: "absolute",
    zIndex: 10,
    top: Platform.OS === "android" ? StatusBar.currentHeight : 40,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 10
  },
  itemDetailsContainer: {
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff"
  },
  itemTitle: {},
  name: {
    fontSize: 20
  },
  price: {
    fontSize: 20,
    color: "#e74c3c",
    fontWeight: "bold"
  },
  description: {
    marginTop: 10,
    marginBottom: 30
  },
  userImage: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 25,
    // marginTop: 30
  },
  userSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  userInfo: {
    marginLeft: 10
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold"
  },
  userListings: {
    opacity: 0.5
  },
  textInput: {
    backgroundColor: "#ecf0f1",
    height: 40,
    borderRadius: 20,
    paddingLeft: 20,
    marginBottom: 10
  },
  button: {
    backgroundColor: "#e74c3c",
    height: 50,
    padding: 15,
    borderRadius: 25,
    marginBottom: 10
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  map: {
    width: '100%',
    height: 200
  }
})