import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Header = ( props ) => {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    header: {
      height: 60,
      padding: 15,
      backgroundColor: 'pink'
    },
    text: {
      color: 'brown', 
      fontWeight: 'bold',
      fontSize: 24,
      textAlign: 'center'
    }
  })

  export default Header;