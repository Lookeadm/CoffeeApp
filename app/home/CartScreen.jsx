import { View, Text, Image, StyleSheet, TextInput, ScrollView, Pressable, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SectionComponent, HeaderComponent, RowComponent, TextComponent, ButtonComponent } from '@/components/index'
import globalStyle from '../../constants/globalStyle'
import appColor from "../../constants/appColor";
import { AppContext } from "../../app-context";
import ItemComponent from "../../components/cart/ItemComponent";
import { Link } from "expo-router";

const CartScreen = () => {
  const { cart } = useContext(AppContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = () => {
      const newTotal = cart.reduce((acc, item) => {
        return acc + item.sizes.reduce((sizeAcc, size) => {
          return sizeAcc + size.price;
        }, 0);
      }, 0);
      setTotal(newTotal);
    }
    totalPrice();
  }, [cart]);
  return (
    <View style={globalStyle.container}>
      <SectionComponent >
        <HeaderComponent home avatar title={"Cart"} />
      </SectionComponent>
      <ScrollView>
        {
          cart.map(item => (
            <ItemComponent
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              sizes={item.sizes}
              price={item.price}
            />
          ))
        }
      </ScrollView>
      <SectionComponent>
        <View style={{ marginTop: 15 }}>
          <RowComponent justify="space-between">
            <View style={styles.price}>
              <TextComponent text={"Price"} color={appColor.gray1} />
              <RowComponent>
                <TextComponent text={"$ "} color={appColor.orange} fontWeight={'bold'} size={20} />
                <TextComponent text={total} fontWeight={'bold'} size={20} />
              </RowComponent>
            </View>

            <Link href="/(children)/PaymentScreen">
              <View style={[globalStyle.button, { backgroundColor: appColor.orange, width: 200 }]}>
                <TextComponent text="Pay" fontWeight="bold" />
              </View>
            </Link>

          </RowComponent>
        </View>
      </SectionComponent>
    </View>

  );
};

export default CartScreen;

const styles = StyleSheet.create({

});
