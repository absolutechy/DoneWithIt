import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import Thumbnail from "./Thumbnail";

const Item = ({ item }) => { 
    const { navigate } = useNavigation()
    return (
        <Pressable
            onPress={() => {
                navigate("ItemDetailsScreen", { item })
            }}
        >
            <Thumbnail itemName={item.itemName} itemPrice={item.itemPrice} imagePath={item.imagePath} description={item.description} />
        </Pressable>
    )
}

export default Item