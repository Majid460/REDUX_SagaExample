import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {GET_MOVIES} from './redux/Actions';
import {moviesData} from './redux/Reducer';

export default function App() {
  const dispatch = useDispatch();
  const movies = useSelector(moviesData);

  useEffect(() => {
    dispatch({type: GET_MOVIES, payload:''});
  }, []);

  
  return (
    <View style={styles.maincon}>
      <Text style={styles.heading}>Movies</Text>

      <FlatList
        data={movies}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => (
          <View style={styles.item1}>
            <View style={styles.viewA}>
              <View style={styles.A}>
                <Text style={styles.item2}>Movie Name </Text>
              </View>
              <View style={styles.B}>
                <Text style={styles.item2}>Release Year </Text>
              </View>
            </View>
            <View style={styles.viewA}>
              <View style={styles.A}>
                <Text style={styles.item}>{item.title} </Text>
              </View>
              <View style={styles.B}>
                <Text style={styles.item}>{item.releaseYear} </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    alignSelf: 'center',
    sjustifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: 'black', fontSize: 25, marginRight: 5},

  item1: {
    flex: 1,
    flexDirection: 'column',
    borderColor: '#534A4A',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderWidth: 2,
    marginBottom: 10,
    marginTop: 10,
  },
  item2: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    color: '#534A4A',
    fontSize: 17,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    color: '#534A4A',
    fontSize: 22,
    fontWeight: 'bold',
  },
  maincon: {
    flex: 1,
    paddingVertical: 30,
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 15,
    backgroundColor: 'white',
    paddingStart: 10,
    paddingEnd: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
  viewA: {
    flex: 1,
    flexDirection: 'row',
  },
  A: {
    flex: 2,
  },
  B: {
    flex: 1,
  },
});
