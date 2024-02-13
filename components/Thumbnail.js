import { Image, StyleSheet, Text, View } from 'react-native'

const Thumbnail = ({ imagePath, itemName, itemPrice, description }) => {

  return (
    <View style={styles.View}>
        <Image style={styles.image} source={imagePath} />
        <View style={styles.itemInfo}>
            <Text style={styles.itemName}>{itemName}</Text>
            <Text style={styles.itemPrice}>${itemPrice}</Text>
        </View>
    </View>
  )
}

export default Thumbnail

const styles = StyleSheet.create({
    View:{
        marginHorizontal: 20,
        height: 300,
        marginBottom: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width:'100%',
        height: '75%'
    },
    itemInfo: {
        justifyContent: 'center',
        gap: 5,
        paddingVertical: 20,
        paddingHorizontal: 20,
        height: '25%'
    },
    itemName: {
        fontSize: 18,
        fontWeight: '500',
        textTransform: 'capitalize'
    },
    itemPrice: {
        fontSize: 18,
        color: "#1abc9c"
    }
})