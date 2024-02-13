import { FlatList, Pressable, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react';
import Items from '../components/Items'
import { data } from '../data/data';
import { useRoute } from '@react-navigation/native';

const Home = ({filteredData, setFilteredData}) => {

    const route = useRoute()
    // const {filteredData, setFilteredData} = route.params
    const [selectedCategory, setSelectedCategory] = useState(null) 
    // const [filteredData, setFilteredData] = useState(data)
 
    const uniqueCategories = Array.from(new Set(data.map(item => item.category)));

    const handleCategoryPress = (category) => {
        setSelectedCategory(category === selectedCategory ? null : category)
        setFilteredData(category === selectedCategory ? data : data.filter((item) => item.category === category))
    }

  return (
    <View style={[filteredData.length > 2 && styles.homeContainer, {paddingTop: Platform.OS === "android" ? 50 : 0}]}>
        <ScrollView bounces={false} showsHorizontalScrollIndicator={false} horizontal={true} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollStyles}>
            <View style={styles.linksContainer}>
                {uniqueCategories.map((category, index) => (
                <Pressable
                    key={index}
                    style={[
                        styles.filterLink,
                        selectedCategory === category && styles.selectedCategory
                    ]} 
                    onPress={() => handleCategoryPress(category)}
                >
                    <Text style={[styles.filterLabel, selectedCategory === category && styles.selectedCategory]}>{category}</Text>
                </Pressable>
                ))}
            </View>
        </ScrollView>
        <FlatList
            data={filteredData}
            renderItem={({ item }) => <Items item={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            overScrollMode='never'
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
    },
    scrollStyles: {
        height: 50,
        // marginBottom: -20
    },
    linksContainer: {
        flexDirection: 'row',
        width: '100%',
        gap: 20,
        paddingHorizontal: 20,
    },
    filterLink: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: '60%',
        borderRadius: 10
    },
    filterLabel: {
        color: "#000",
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    selectedCategory: {
        backgroundColor: "#1abc9c",
        color: "#fff"
    }
})