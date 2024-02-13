import { Image, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import {Ionicons} from "@expo/vector-icons"

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.currentUser}>
        <Image source={require('../assets/images/user8.jpg')} style={styles.image}/>
        <View>
          <Text style={styles.name}>Hammad</Text>
          <Text style={styles.email}>programmingwithhammad@gmail.com</Text>
        </View>
      </View>
      <View style={styles.options}>
        <View style={styles.listings}>
            <Ionicons name="list-circle" color="#e74c3c" size={35} style={styles.listIcon} />
            <Text style={styles.label}>My Listings</Text>
            <Ionicons name="chevron-forward" size={20} style={styles.chevronIcon} />
        </View>
        <View style={styles.Messages}>
            <Ionicons name="people-circle-sharp" color="#1abc9c" size={35} style={styles.listIcon} />
            <Text style={styles.label}>Messages</Text>
            <Ionicons name="chevron-forward" size={20} style={styles.chevronIcon} />
        </View>
        <View style={styles.userLog}>
            <Ionicons name="log-out" color="#f1c40f" size={35} style={styles.listIcon} />
            <Text style={styles.label}>Log out</Text>
            <Ionicons name="chevron-forward" size={20} style={styles.chevronIcon} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 50 : 0
  },
  currentUser: {
    backgroundColor: "#fff",
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 50
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    borderRadius: 40,
    marginRight: 10
  },
  name: {
    fontSize: 16,
    fontWeight: "bold"
  },
  listings: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#ecf0f1"
  },
  listIcon: {
    marginRight: 5
  },
  label: {
    fontSize: 16,
    alignSelf: "center",
  },
  chevronIcon: {
    marginStart: "auto"
  },
  Messages: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  userLog: {
    marginTop: 50,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  }
})