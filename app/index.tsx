import { View, Text, Button, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Link, Redirect } from 'expo-router';
import globalStyle from '@/constants/globalStyle';
import { AppContext } from '@/app-context';

export default function index() {
  const [loading, setLoading] = useState(true);
  const {isAuth} = useContext(AppContext);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 2000);
  },[]);

  if(loading){
    return (
      <View style={[globalStyle.container, {justifyContent: 'center', alignItems: 'center'}]}>
       <Image 
         source={require('@/assets/images/Logo.png')} 
         style={{ width: 200, height: 200 }}
       />
     </View>
   )
  }

  return isAuth ? <Redirect  href="/home"/> : <Redirect href="/auth/LoginScreen"/>
}