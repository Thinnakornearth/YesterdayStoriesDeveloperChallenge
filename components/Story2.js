import { View, StyleSheet, Text, ScrollView, Image} from 'react-native'
import React, { useEffect, useState } from 'react';
import { ActivityIndicator} from 'react-native';
import Header from './Header'

const Story2 = () => {
  const [isLoading, setLoading] = useState(true);
  const [story, setStory] = useState([]);
  const [category, setCategory] = useState([]);
  const getStories = async () => {
 
      try {
        const response1 = await fetch('https://dev-challenge.ap-southeast-2-dev.aws.yesterdaystories.net.au/stories');
        const response2 = await fetch('https://dev-challenge.ap-southeast-2-dev.aws.yesterdaystories.net.au/categories');
        const json = await response1.json();
        const json2 = await response2.json()
        setStory(json);
        setCategory(json2);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    
    useEffect(() => {
      getStories();
    }, []);
  return (
    <ScrollView>
      <Header title="Mary's Monkey"/>
      <View style={styles.container}>
      
      {isLoading ? <ActivityIndicator/> : (
        <View style={styles.content}>
            {story[1].categories.sort().map((d, index) => {
              return (
                <Text key={d}>{d == category.categories[d-1].id ? 
                <View>
                <Text style={styles.text}>{category.categories[d-1].name} </Text>
                <Image
                
                style={styles.tinylogo}
                source={{
                  uri: category.base_endpoint + category.categories[d-1].icon
                }}
                />
                </View>
                : console.log(category.categories[index].id)}</Text>
              )
            })}
           </View>
        )}
        
        
      </View>
    </ScrollView>
  
  )
  
      }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff0f5',
    alignItems: 'center',
    
  
    },
  tinylogo: {
    width: 200,
    height: 200,
   

  },
  content: {
    
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
    paddingBottom: 5,
    borderColor: '#fff0f5',
    backgroundColor : '#fdf5e6',
    padding : 1,
    fontSize: 15,
    fontWeight: 'bold',
  }
})  

export default Story2;