import { View, Text, Image, StyleSheet, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import  { SectionComponent, HeaderComponent, RowComponent, TextComponent, ButtonComponent} from '@/components/index'
import globalStyle from '@/constants/globalStyle'
import appColor from "@/constants/appColor";

const CartScreen = () => {
  const sizeData = [
    { id: "1", size: "S" },
    { id: "2", size: "M" },
    { id: "3", size: "L" },
  ];
  const [size, setSize] = useState(sizeData);
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={globalStyle.container}>
      <SectionComponent >
        <HeaderComponent home avatar title={"Cart"}/>
      </SectionComponent>
      <ScrollView>
      <SectionComponent>
        <View style={styles.card}>
          <RowComponent>
            <Image
              source={require("@/assets/images/image.png")}
              style={styles.image}
            />
            <View style={styles.cardItem}>
              <TextComponent text={"Cappuccino"} size={19} />
              <TextComponent
                text={"With Steamed Milk"}
                color={appColor.gray1}
                size={11}
              />
              <View style={[globalStyle.itemDetail, { marginTop: 10 }]}>
                <TextComponent
                  text={"Medium Roasted"}
                  color={appColor.gray1}
                  styles={{ margin: 15 }}
                  size={11}
                />
              </View>
            </View>
          </RowComponent>
          {/* Quantity */}
          {size.map((size) => {
            return (
              <View key={size.id}>
                <RowComponent
                  justify="space-between"
                  styles={{ marginTop: 10, paddingLeft: 10 }}
                >
                  <View style={[globalStyle.size, { width: 72 }]}>
                    <TextComponent
                      text={size.size}
                      fontWeight={"bold"}
                      color={appColor.gray1}
                    />
                  </View>
                  <RowComponent>
                    <TextComponent
                      text={"$ "}
                      color={appColor.orange}
                      fontWeight={"bold"}
                      size={16}
                    />
                    <TextComponent
                      text={"4.20"}
                      fontWeight={"bold"}
                      size={16}
                    />
                  </RowComponent>
                  <ButtonComponent
                    text={"-"}
                    onPress={() => {
                      quantity < 1 ? setQuantity(0) : setQuantity(quantity - 1);
                    }}
                  />
                  <View value={quantity} style={styles.quantityInput}>
                    <TextComponent text={quantity} />
                  </View>
                  <ButtonComponent
                    text={"+"}
                    onPress={() => {
                      setQuantity(quantity + 1);
                    }}
                  />
                </RowComponent>
              </View>
            );
          })}
        </View>
      </SectionComponent>

      <SectionComponent>
        <View style={styles.card}>
          <RowComponent>
            <Image
              source={require("@/assets/images/image.png")}
              style={styles.image2}
            />

            <View style={[styles.cardItem, {width: '52%'}]}>

              <TextComponent text={"Cappuccino"} size={19} />
              <TextComponent
                text={"With Steamed Milk"}
                color={appColor.gray1}
                size={11}
              />

              <RowComponent
                justify="space-between"
                styles={{ marginTop: 7}}
              >
                <View style={[globalStyle.size, { width: 72 }]}>
                  <TextComponent
                    text={"M"}
                    fontWeight={"bold"}
                    color={appColor.gray1}
                  />
                </View>
                <RowComponent>
                  <TextComponent
                    text={"$ "}
                    color={appColor.orange}
                    fontWeight={"bold"}
                    size={20}
                  />
                  <TextComponent text={"4.20"} fontWeight={"bold"} size={20} />
                </RowComponent>
              </RowComponent>
              <RowComponent justify="space-between" styles={{ marginTop: 3}}>
                <ButtonComponent
                  text={"-"}
                  onPress={() => {
                    quantity < 1 ? setQuantity(0) : setQuantity(quantity - 1);
                  }}
                />
                <View value={quantity} style={styles.quantityInput}>
                  <TextComponent text={quantity} />
                </View>
                <ButtonComponent
                  text={"+"}
                  onPress={() => {
                    setQuantity(quantity + 1);
                  }}
                />
              </RowComponent>
            </View>
          </RowComponent>
        </View>
      </SectionComponent>
      </ScrollView>
      <SectionComponent>
      <View style={{ marginTop: 15 }}>
                <RowComponent justify="space-between">
                    <View style={styles.price}>
                        <TextComponent text={"Price"} color={appColor.gray1} />
                        <RowComponent>
                            <TextComponent text={"$ "} color={appColor.orange} fontWeight={'bold'} size={20} />
                            <TextComponent text={"4.20"} fontWeight={'bold'} size={20} />
                        </RowComponent>
                    </View>
                    <ButtonComponent text={"Add to Cart"} type="primary" color={appColor.orange} />
                </RowComponent>
            </View>
      </SectionComponent>
    </View>
    
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: appColor.gray5,
    padding: 10,
    paddingRight: 20
  },
  cardItem: {
    justifyContent: "space-between",
    marginLeft: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  image2: {
    width: 126,
    height: 126,
    borderRadius: 20,
  },
  quantityInput: {
    width: 50,
    height: 33,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: appColor.orange,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColor.black,
    color: appColor.white,
    fontSize: 16,
  },
});
