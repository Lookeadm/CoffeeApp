import { Tabs } from "expo-router";
import { View, Image } from "react-native";

export default function Layout() {
  return <Tabs
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false, // Ẩn tên tab
      tabBarStyle: {
        backgroundColor: '#0C0F14',
        height: 40,
        borderTopWidth: 0,
      },
      tabBarIcon: ({ focused }) => {
        // Xác định icon tương ứng cho từng tab
        let iconSource;

        switch (route.name) {
          case 'index':
            iconSource = require('@/assets/images/home.png');
            break;
          case 'CartScreen':
            iconSource = require('@/assets/images/bag-2.png');
            break;
          case 'FavoriteScreen':
            iconSource = require('@/assets/images/heart.png');
            break;
          case 'NotificationScreen':
            iconSource = require('@/assets/images/notification.png');
            break;
          default:
            iconSource = null;
        }

        return (
          <View>
            <Image
              source={iconSource}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#D17842' : '#4E5053', // Màu icon khi tab được chọn
                alignItems: 'center',
                marginBottom: 15
              }}
            />
          </View>
        );
      },
    })}

  />;
}