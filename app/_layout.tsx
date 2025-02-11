import { Stack, Tabs, } from "expo-router";
import { Drawer } from 'expo-router/drawer';

export default function RootLayout() {
  return <Stack 
    screenOptions={{
      headerShown: false
    }}
  />;
}