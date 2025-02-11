import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useContext, createContext, useId } from "react";
import { useFonts } from "expo-font";

// tạo kho chứa data chung
const DemoContext = createContext();

// nhà cung cấp dữ liệu
const DemoProvider = ({ children }) => {
  const cartProducts = [

  ]
  // dữ liệu chung
  const [cart, setCart] = useState(cartProducts);
  const [user, setUser] = useState(null);

  const [loaded, error] = useFonts({
    "Poppins": require('../assets/fonts/Poppins-Black.ttf')
  })

  return (
    <DemoContext.Provider value={{ cart, setCart, user, setUser }}>
      {children}
    </DemoContext.Provider>
  );
};

// sử dụng dữ liệu
const Screen1 = () => {
  const { cart, setCart, user, setUser } = useContext(DemoContext);
  return (
    <View>
      {cart.map((product)=>(
        <View key={product._id}>
          <Text style={{fontFamily: "Poppins"}}>{product.name}</Text>
          <Text>{product.price}</Text>
        </View>
      ))}
    </View>
  );
};

// sử dụng dữ liệu
const Screen2 = () => {
  const { cart, setCart, user, setUser } = useContext(DemoContext);
  return (
    <View>
      <Text style={{ fontSize: 30 }}>{cart.length}</Text>
      <TouchableOpacity
        onPress={() => {
          const productsCart = {_id: Math.random().toString, name: 'Product 5', price: 300, quantity: 3}
          const addToCart = cart.push(productsCart);
          setUser(addToCart);
        }}
      >
        <Text style={{ fontSize: 30 }}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const Demo = () => {
  return (
    <View style={styles.container}>
      <DemoProvider>
        <Screen1 />
        <Screen2 />
      </DemoProvider>
    </View>
  );
};

export default Demo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});