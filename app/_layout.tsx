import { Slot, Stack, Tabs, } from "expo-router";
import { Drawer } from 'expo-router/drawer';
import { AppProvider } from '@/app-context';

export default function RootLayout() {
  return <AppProvider>
    <Stack 
    screenOptions={{
      headerShown: false
    }}
    />
  </AppProvider>
}