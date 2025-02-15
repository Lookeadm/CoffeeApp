import { View, Text, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RowComponent, TextComponent, ButtonComponent } from '@/components/index'
import globalStyle from '@/constants/globalStyle'
import appColor from '@/constants/appColor'
import { Ionicons } from '@expo/vector-icons'
import AxiosInstance from '@/helpers/AxiosInstance'
import { Link } from 'expo-router'

const CardComponent = ({
    selectedId,
    bean,
}) => {
    const product = [
        { "_id": 1, "name": "Queen Of The Meadow", "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", "rating": 11, "price": 9.60, "image": "http://dummyimage.com/148x100.png/5fa2dd/ffffff" },
        { "_id": 2, "name": "Peruvian Mock Vervain", "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.", "rating": 85, "price": 1.20, "image": "http://dummyimage.com/239x100.png/5fa2dd/ffffff" },
        { "_id": 3, "name": "Cynodontium Moss", "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.", "rating": 3, "price": 5.50, "image": "http://dummyimage.com/194x100.png/dddddd/000000" },
        { "_id": 4, "name": "Robust Curlygrass Fern", "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.", "rating": 7.30, "price": 7.70, "image": "http://dummyimage.com/221x100.png/dddddd/000000" },
        { "_id": 5, "name": "Yam", "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.", "rating": 61, "price": 5.0, "image": "http://dummyimage.com/183x100.png/cc0000/ffffff" },
        { "_id": 6, "name": "Great Basin Fishhook Cactus", "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.", "rating": 52, "price": 45, "image": "http://dummyimage.com/127x100.png/5fa2dd/ffffff" },
        { "_id": 7, "name": "Cap Lichen", "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.", "rating": 21, "price": 4.80, "image": "http://dummyimage.com/189x100.png/cc0000/ffffff" },
        { "_id": 8, "name": "Seaweed Lichen", "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.", "rating": 17, "price": 8.50, "image": "http://dummyimage.com/202x100.png/dddddd/000000" },
        { "_id": 9, "name": "Wholeleaf Rosinweed", "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.", "rating": 57, "price": 6.40, "image": "http://dummyimage.com/144x100.png/ff4444/ffffff" },
        { "_id": 10, "name": "Lawton's Racomitrium Moss", "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.", "rating": 71, "price": 5.50, "image": "http://dummyimage.com/234x100.png/cc0000/ffffff" }
    ]
    const [products, setProducts] = useState(product);
    const [refreshing, setRefreshing] = useState(false);

    const [products2, setProducts2] = useState([]);
    const [products3, setProducts3] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                if (!selectedId) {
                    return;
                }
                const response = await AxiosInstance().get(`products?category=${selectedId}`);
                setProducts2(response.products);
            } catch (e) {
                console.log(e);
            }
        }
        getProducts();
        return () => {
            // cleanup
            // setProducts2([]);
        };
    }, [selectedId])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await AxiosInstance().get(`products`);
                setProducts3(response.products);
            } catch (e) {
                console.log(e);
            }
        }
        getProducts();
        return () => {
            // cleanup
            setProducts3([]);
        };
    }, [])

    const renderProductItem = ({ item }) => {
        const { name, description, rating, price, image } = item;
        return (
            <View style={{marginLeft: 20}}>
                <Link href={{
                    pathname: '/(children)/DetailScreen',
                    params: {
                        id: item._id,
                    }
                    }} >
                    <View style={globalStyle.card}>
                        <View>
                            <Image
                                source={{ uri: image }}
                                style={{ width: 126, height: 126, borderRadius: 15, }}
                                resizeMethod={'cover'}
                            />
                            <View style={globalStyle.rating} >
                                <Ionicons name="star" color='orange' size={12} />
                                <TextComponent text={rating} fontWeight="bold" styles={{ paddingHorizontal: 5 }} size={12} />
                            </View>
                        </View>
                        <TextComponent
                            text={name}
                            fontWeight='bold'
                            size={15}
                            numberOfLines={1}
                        />
                        <TextComponent
                            text={description}
                            size={12}
                            numberOfLines={1}
                        />
                        <RowComponent justify="space-between" >
                            <RowComponent>
                                <TextComponent
                                    text={"$ "}
                                    size={20}
                                    color={appColor.orange}
                                />
                                <TextComponent
                                    text={price}
                                    size={20}
                                    fontWeight='bold'
                                />
                            </RowComponent>
                            <ButtonComponent text="+" />

                        </RowComponent>
                    </View>
                </Link>
            </View>
        )
    }

    const onRefresh = async () => {
        setProducts([]);
        setRefreshing(true);
        if (!selectedId) {
            return;
        }
        const response = await AxiosInstance().get(`products?category=${selectedId}`);
        setProducts2(response.products);
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={bean ? products3 : products2}
                renderItem={renderProductItem}
                estimatedItemSize={300}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item._id.toString()}
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        </View>
    )
}

export default CardComponent;
