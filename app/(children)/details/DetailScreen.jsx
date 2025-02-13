import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import InforComponent from '../../../components/details/InforComponent'
import DescriptionComponent from '../../../components/details/DescriptionComponent'
import appColor from '@/constants/appColor'
import { SectionComponent } from '@/components'
import AxiosInstance from '../../../helpers/AxiosInstance'
import { useGlobalSearchParams, useLocalSearchParams } from 'expo-router'
import { RowComponent, ButtonComponent, TextComponent } from '../../../components/index'
import { AppContext } from "../../../app-context";

const DetailScreen = () => {
  const [detailProduct, setDetailProduct] = useState([])
  const { updateItem } = useContext(AppContext);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [cartItems, setCartItems] = useState({});

  const localSearchParams = useLocalSearchParams();
  const globalSearchParams = useGlobalSearchParams();

  useEffect(() => {
    const getDetailProducts = async () => {
      try {
        const response = await AxiosInstance().get(`/products/${localSearchParams.id}`);
        setDetailProduct(response.product);
      } catch (e) {
        console.log(e);
      }
    }
    getDetailProducts();
  }, []);

  const addToCart = () => {
    const selectedSizeIndex = selectedSizeIndex;
    const currentQuantity = cartItems[selectedSizeIndex] || 0;
    setCartItems(prevItems => ({
      ...prevItems,
      [selectedSizeIndex]: currentQuantity + 1
    }))
    updateItem({
      id: detailProduct._id, // Lấy id của sản phẩm
      name: detailProduct.name,
      image: detailProduct.image,
      price: detailProduct.price,
      size: selectedSize, // Kích thước đã chọn
      quantity: 1 // Số lượng mặc định là 1
    })
  }

  return (
    <View style={{ backgroundColor: appColor.black, flex: 1 }}>
      <InforComponent name={detailProduct.name} image={detailProduct.image} rating={detailProduct.rating} voting={detailProduct.voting} />
      <ScrollView>
        <SectionComponent>
          <DescriptionComponent
            description={detailProduct.description}
            selectedSizeIndex={selectedSizeIndex}
            setSelectedSizeIndex={setSelectedSizeIndex}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        </SectionComponent>
      </ScrollView>

      <SectionComponent >
        <View style={{ marginTop: 15 }}>
          <RowComponent justify="space-between">
            <View style={styles.price}>
              <TextComponent text={"Price"} color={appColor.gray1} />
              <RowComponent>
                <TextComponent text={"$ "} color={appColor.orange} fontWeight={'bold'} size={20} />
                <TextComponent text={detailProduct.price} fontWeight={'bold'} size={20} />
              </RowComponent>
            </View>
            <ButtonComponent text={"Add to Cart"} type="primary" color={appColor.orange} onPress={addToCart} />
          </RowComponent>
        </View>
      </SectionComponent>
    </View>

  )
}

export default DetailScreen

const styles = StyleSheet.create({
  price: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})