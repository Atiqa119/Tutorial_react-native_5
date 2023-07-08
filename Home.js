import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const image = { uri: 'https://blog.logrocket.com/wp-content/uploads/2021/07/build-ios-app-react-native.png' };

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //delete the doc
  function create() {
  deleteDoc(doc(db,"user_information",'LA'));
  }
  
//update the doc
  function create() {
    updateDoc(doc(db, "user_information",'LA'), {
      email: email,
      password: password
    }).then(() => {
      console.log('data saved');
    }).catch((error) => {
      console.log(error);
    });

  }

  
  //adding document with auto id
  function create() {
    addDoc(collection(db, "user_information"), {
      email: email,
      password: password
    }).then(() => {
      console.log('data saved');
    }).catch((error) => {
      console.log(error);
    });

  }

  
  //adding doc with specific id
  function create() {
    setDoc(doc(db, "user_information", "LA"), {
      email: email,
      password: password
    }).then(() => {
      console.log('data saved');
    }).catch((error) => {
      console.log(error);
    });

  }

  return (
    <View style={{ flex: 1, backgroundColor: '#BFD7ED' }}>
      <ImageBackground
        source={(image)}
        style={styles.image}
        resizeMode="cover"
        blurRadius={5}
      >
        <Text style={{ marginStart: 10, color: '#1c305c', fontSize: 33, alignSelf: 'center' }}>Welcome to react native </Text>
        <View style={styles.testView}>
          <Text style={{ alignSelf: 'flex-start', padding: 15, fontSize: 15, fontWeight: 'bold' }}>Login to your account</Text>
          <Text style={{ fontSize: 12, paddingLeft: 21 }}>Enter email</Text>
          <TextInput value={email} onChangeText={(email) => { setEmail(email) }} style={styles.input} placeholder={'your email'}></TextInput>
          <Text style={{ fontSize: 12, paddingLeft: 21 }}>Enter password</Text>
          <TextInput value={password} onChangeText={(password) => { setPassword(password) }} style={styles.input} placeholder={'your password'}></TextInput>
          <Text style={{ fontSize: 12, paddingLeft: 267 }}>forgotten password</Text>

          <Pressable onPress={create} style={styles.button} >
            <Text style={{ alignSelf: 'center', color: 'white', fontWeight: 'bold' }}>login</Text>

          </Pressable>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}
export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testView: {
    paddingBottom: 100,
    color: "white",
    backgroundColor: 'FDFCFC ',
    borderWidth: 3,
    borderLeftColor: 4,
    margin: 10,
    fontWeight: 'bold',
    borderRadius: 20,
    borderColor: '#BFD7ED',
  },
  testHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FAF9F6',
    alignSelf: 'center',
  },
  testText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#FAF9F6',
    alignSelf: 'center',
    padding: 10,
  },
  button: {
    color: "blue",
    paddingVertical: 12,
    paddingHorizontal: 33,
    borderRadius: 16,
    elevation: 3,
    backgroundColor: '#1c305c',
    alignSelf: 'center',
  },
  testdiscription: {
    fontSize: 15,
    fontWeight: '400',
    color: '#FAF9F6',
    alignSelf: 'center',
  },
  input: {
    paddingLeft: 10,
    borderColor: "#777",
    backgroundColor: 'white',
    borderWidth: 1,
    margin: 10,
    width: 350,
    alignSelf: 'center',
    borderRadius: 5,
    height: 33,

  },
  image: {
    flex: 1,
    justifyContent: 'center',

  },

});
