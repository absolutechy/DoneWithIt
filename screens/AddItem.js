import {Platform, Image, Keyboard, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Pressable, ScrollView, BackHandler } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from "expo-image-picker"
import { useState } from 'react'
import {Ionicons} from "@expo/vector-icons"

const AddItem = ({ title, setTitle, description, setDescription, imagePath, setImagePath, handlePost }) => {
  const navigation = useNavigation()
  const [image, setImage] = useState(null)

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImagePath(result.assets[0].uri)
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>New Listing</Text>
          <View style={styles.imageContainer}>
              {!image && <Pressable style={styles.imageButton} onPress={pickImage}>
                <Ionicons name="camera" color="#7f8c8d" size={30}/>
              </Pressable>}
          {imagePath && <Image source={{ uri: imagePath }} style={{ width: '33.33%', height: 100, borderRadius: 20 }} />}
          </View>
          <View style={styles.inputFrom}>
            <TextInput 
              style={styles.textInput}
              placeholder='Title'
              value={title}
              onChangeText={text => setTitle(text)}
            />
            <TextInput 
              style={styles.textInputPrice}
              placeholder='Price'
              keyboardType='numeric'
              />
            <TextInput 
              style={styles.textInputPrice}
              placeholder='Category'
            />
            <TextInput 
              style={styles.textInput}
              placeholder='Description'
              value={description}
              onChangeText={text => setDescription(text)}
            />
            <Pressable style={styles.postButton} onPress={handlePost}>
              <Text style={styles.postButtonText}>POST</Text>
            </Pressable>
            <Pressable style={styles.cancelButton} onPress={() => {
                                                            navigation.goBack()
                                                            setImage(null)
              }}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </Pressable>
          </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}

export default AddItem

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 50 : 0,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    flex: 1
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  textInput: {
    backgroundColor: "#ecf0f1",
    height: 50,
    borderRadius: 25,
    paddingLeft: 20,
    fontSize: 16,
    color: "white",
    marginBottom: 20
  },
  textInputPrice: {
    backgroundColor: "#ecf0f1",
    height: 50,
    width: '30%',
    borderRadius: 25,
    paddingLeft: 20,
    fontSize: 16,
    color: "white",
    marginBottom: 20
  },
  postButton: {
    padding: 10,
    width: '100%',
    backgroundColor: "#e74c3c",
    borderRadius: 100,
    marginVertical: 10
  },
  postButtonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  cancelButton: {
    padding: 10,
    width: '100%',
    backgroundColor: "#fff",
    borderRadius: 100,
  },
  cancelButtonText: {
    textAlign: "center",
    fontSize: 16,
  },
  imageContainer: {
    marginBottom: 10
  },
  imageButton: {
    width: "33.33%",
    height: 100,
    backgroundColor: "#ecf0f1",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 10
  }
})