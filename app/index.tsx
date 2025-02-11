import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

export default function index() {
  return (
    <View>
      <Text>Index</Text>
      <Link
        href="/home"
        asChild
      >
        <Button title="Demo2"/>
      </Link>
    </View>
  )
}