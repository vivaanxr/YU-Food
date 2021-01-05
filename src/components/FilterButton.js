import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const FilterButton = ({ source,Name}) => {

  return (

    <View style={styles.container}>
        <View style={styles.container2}>
      <Text style={styles.title}>{"\ "}{Name}</Text>
      <Text style={styles.loc}>{Building}</Text>
      </View>
      <Text style={[ (startDate <= currenttime && currenttime <= endDate) ? styles.opentext : styles.closetext ]}>  Open Till: {closeTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        borderColor: "#bfbfbf",
        borderWidth:1,
        borderBottomLeftRadius: 3,
        height:100
    }
  });

export default FilterButton;