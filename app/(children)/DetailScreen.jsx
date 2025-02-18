import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import InforComponent from '@/components/details/InforComponent'
import DescriptionComponent from '../../components/details/DescriptionComponent'
import appColor from '@/constants/appColor'
import { SectionComponent } from '@/components'
import AxiosInstance from '../../helpers/AxiosInstance'
import { router, useGlobalSearchParams, useLocalSearchParams } from 'expo-router'
import { RowComponent, ButtonComponent, TextComponent, HeaderComponent } from '../../components/index'
import { AppContext } from "../../app-context";

const DetailScreen = () => {
  const [detailProduct, setDetailProduct] = useState([])
  const { updateItem } = useContext(AppContext);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
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
    updateItem({
      id: detailProduct._id,
      name: detailProduct.name,
      image: detailProduct.image,
      price: detailProduct.price,
      size: selectedSize, 
      quantity: 1 
    })
  }

  return (
    <View style={{ backgroundColor: appColor.black, flex: 1 }}>
      <View style={{position: 'absolute', top: 10, zIndex: 1, width: '100%'}}>
                <SectionComponent>
                    <HeaderComponent detail onPress={()=>router.back()} />
                </SectionComponent>
            </View>
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