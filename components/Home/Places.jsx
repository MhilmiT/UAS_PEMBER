import { StyleSheet, Text, View, VirtualizedList } from 'react-native'
import React from 'react'
import HeightSpacer from '../Reusable/HeightSpacer'
import { SIZES } from '../../constants/theme'
import Country from '../Tiles/Country/Country'

const Places = () => {
    const countries = [
    {
        "id": "1",
        "country": "Indonesia",
        "description": "Indonesia, an archipelago comprising over 17,000 islands, is a paradise for travelers seeking natural beauty, rich culture, and unforgettable adventures. Situated between the Indian Ocean and the Pacific Ocean, Indonesia offers a diverse range of stunning tourist destinations, from pristine white-sand beaches and majestic volcanoes to lush tropical rainforests. With Wisataku, you can discover all these wonders and more. Our app provides comprehensive and accurate information about local tourist spots throughout Indonesia.",
        "imageUrl": "https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kb25lc2lhfGVufDB8fDB8fHww",
        "region": "Jakarta, Indonesia"
    },
    {
        "id": "2",
        "country": "Thailand",
        "description": "Thailand, officially known as the Kingdom of Thailand, is located in Southeast Asia. It is bordered by Myanmar to the northwest, Laos to the northeast, Cambodia to the southeast, and Malaysia to the south. Thailand is known for its rich cultural heritage, which includes ornate temples, vibrant festivals, and a cuisine celebrated worldwide. The capital city, Bangkok, is a bustling metropolis famous for its street life and cultural landmarks such as the Grand Palace and Wat Arun. Thailand's tropical beaches, particularly in places like Phuket and Koh Samui, attract millions of tourists each year.",
        "imageUrl": "https://media.istockphoto.com/id/1477016740/photo/wat-arun-temple-bangkok-during-sunset-in-thailand.webp?b=1&s=170667a&w=0&k=20&c=SYD1QC2mnRnF5VzB0pTWvYl7ZBNm19Wc7MZsNtT0caU=",
        "region": "Bangkok, Thailand"
    },
    {
        "id": "3",
        "country": "Arab",
        "description": "Saudi Arabia, officially known as the Kingdom of Saudi Arabia, is located in the Middle East on the Arabian Peninsula. It is bordered by Jordan, Iraq, Kuwait, Bahrain, Qatar, the United Arab Emirates, Oman, and Yemen. The country is the birthplace of Islam and home to its two holiest cities, Mecca and Medina, which attract millions of Muslim pilgrims annually. The capital city, Riyadh, is a modern city that serves as the political and administrative center of the country.",
        "imageUrl": "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJhYnxlbnwwfHwwfHx8MA%3D%3D",
        "region": "Riyadh, Saudi Arabia"
    },
    {
        "id": "4",
        "country": "USA",
        "description": "The United States of America (USA) is a large country primarily located in North America, bordered by Canada to the north and Mexico to the south. The USA is known for its diverse geography, which ranges from the Rocky Mountains to the Great Plains, and its major cities like New York, Los Angeles, and Chicago. Washington, D.C. is the nation's capital. The USA is a federal republic comprising 50 states, with a significant global influence in terms of culture, politics, and economics.",
        "imageUrl": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNhfGVufDB8fDB8fHww",
        "region": "Washington, USA"
    }
]

  return (
    <View>
     <HeightSpacer height={20}/>

     <VirtualizedList
     data={countries}
     horizontal
     keyExtractor={(item) => item._id}
     showsHorizontalScrollIndicator={false}
     getItemCount={(data)=> data.length}
     getItem={(data, index)=> data[index]}
     renderItem={({item, index})=> (
        <View style={{marginRight: SIZES.medium}}> 
     <Country item={item}/>
     </View>
     )}
     
     />
    </View>
  )
}

export default Places

const styles = StyleSheet.create({})