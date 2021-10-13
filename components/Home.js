import { View, StyleSheet, Button, ScrollView} from 'react-native'
import { ActivityIndicator, FlatList, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from './Header'

const Home = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getStories = async () => {
     try {
      const response = await fetch('https://dev-challenge.ap-southeast-2-dev.aws.yesterdaystories.net.au/stories');
      const json = await response.json();
      setData(json);
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
    
    <View style={styles.container}>
       <Header title="STORY LIST"/>
      
      {isLoading ? <ActivityIndicator/> : (
     
      <FlatList
      
      data={data}
      keyExtractor={({ id }, index) => id}
      renderItem={({ item }) => (
        
        <View style={styles.container}>
          
        <Text style={styles.text}>{item.name}</Text>
        
        <Text style={styles.text2}>{'\n'}{item.description}</Text>
            
        <Button 
          style={styles.button}
          title={"Explore " + item.name} 
          onPress={() => navigation.navigate(item.name)}
          color='#ff69b4'
          />
        </View>
      )}
    />
  )}
     
     
    </View>
    
 
  );
};
 
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f5',
    
 
  },
  text: {
    paddingTop: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  text2: {
    textAlign: 'center',
    paddingBottom: 10,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#fff0f5',
    backgroundColor : 'white',
    padding : 1,
    fontSize: 15,
    margin: 5
  },
  button: {
    width: 50
  }

})

export default Home ;

