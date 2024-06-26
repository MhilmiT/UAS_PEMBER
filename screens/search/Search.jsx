import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reusable.style'
import styles from './search.style'
import { Feather } from '@expo/vector-icons'
import { COLORS } from '../../constants/theme'
import ReusableTile from '../../components/Reusable/ReusableTile'
import { useNavigation } from '@react-navigation/native'

const Search = () => {
  const [searchKey, setSearchKey] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const navigation = useNavigation(); // Use the useNavigation hook

  const search = [
    {
      "_id": 1,
      "country_id": "1A",
      "title": "Dufan",
      "location": "Jakarta, Indonesia",
      "imageUrl": "https://images.unsplash.com/photo-1697797738337-3c9faa013240?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVmYW58ZW58MHx8MHx8fDA%3D",
      "rating": 4.7,
      "review": "900 Reviews"
    },
    {
      "_id": 2,
      "country_id": "2A",
      "title": "Eifel Tower",
      "location": "Seine, Paris",
      "imageUrl": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWlmZWwlMjB0b3dlcnxlbnwwfHwwfHx8MA%3D%3D",
      "rating": 4.9,
      "review": "800 Reviews"
    },
    {
      "_id": 3,
      "country_id": "3A",
      "title": "Borobudur Temple",
      "location": "Mid Java, Indonesia",
      "imageUrl": "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9yb2J1ZHVyfGVufDB8fDB8fHww",
      "rating": 4.5,
      "review": "500 Reviews"
    }
  ];

  return (
    <SafeAreaView style={reusable.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.input}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="Where do you want to visit"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Feather name='search' size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      {search.length === 0 ? (
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/search.png')} 
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={search}
          keyExtractor={(item) => item._id.toString()} // Ensure the key is a string
          renderItem={({ item }) => (
            <View style={styles.tile}>
              <ReusableTile item={item} onPress={() => navigation.navigate('PlaceDetails', { id: item._id })} />
            </View>
          )}
        />
      )}
    </SafeAreaView>
  )
}

export default Search
