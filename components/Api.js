
import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const Obj = () => {
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
  let count = 0
  return (
    <View>
      {isLoading ? <ActivityIndicator/> : (
      <FlatList
      data={data}
      keyExtractor={({ id }, index) => id}
      renderItem={({ item }) => (
        <View>
        <Text>{item.name}, {item.id}</Text>
        <Button 
          title={"Story" + item.id} 
          onPress={() => navigation.navigate('Story' + item.id)}
          />
          
        </View>
      
      )}
     
    />
  
  )}
     

    
    </View>
  );
};
export default Obj;
