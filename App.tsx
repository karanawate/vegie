import React, { useState, useEffect, useCallback } from 'react';
import { Button, Text, View } from 'react-native';
import { useFonts } from '@use-expo/font';

import Router from './src/Router';
import {AppLoading} from 'expo'

export default (props: any) => {
  const [user, setUser] = useState(null)
  let [fontsLoaded] = useFonts({
    'Roboto_medium': require('./assets/fonts/IBM-Plex-Sans/IBMPlexSans-Regular.ttf'),
  });

  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 500)
  }, [fontsLoaded])

  async function loadAssetsAsync() {
    try {
      
    } catch (error) {
      // return true
      Promise.resolve(true)
      setLoaded(true)
    } finally {
      console.log('Finaly promise ')
    }
  }
  function onFinish() {
    console.log('finished loading.')
    
  }
  console.log({
    loaded,
    fontsLoaded
  })
  if(!loaded) {
    <AppLoading startAsync={loadAssetsAsync} onFinish={onFinish} onError={console.log} />
  }
  return (
    <Router user={user} loaded={loaded} />
  )
}