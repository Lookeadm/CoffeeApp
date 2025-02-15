import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [cart, setCart] = useState([]);

     // đọc dữ liệu từ AsyncStorage
    const getAuthen = async() =>{
        try{
            let value = await AsyncStorage.getItem('isAuth');
            value = JSON.parse(value);
            return value
        }catch(e){
            console.log(e);
        }
        return false;
    }
    // quản lý trạng thái đăng nhập
    const [isAuth, setIsAuth] = useState(false);
    // kiểm tra trạng thái đăng nhập
    getAuthen().then(value=>setIsAuth(value));
    // lưu trữ dữ liệu vào AsyncStorage
    const storeAuthen = async (value) => {
        try{
            await AsyncStorage.setItem('isAuth', JSON.stringify(value));
            setIsAuth(value);
        }
        catch(e){
            console.log(e);
        }
    }

    const updateItem = (item) => {
        setCart(prevCart=>{
            const itemIndex = prevCart.findIndex(cartItem=>cartItem.id===item.id);
            if(itemIndex>-1){
                const updateCart = [...prevCart];
                const sizeIndex = updateCart[itemIndex].sizes.findIndex(sizeIndex=>sizeIndex.size === item.size);
                if(sizeIndex>-1){
                    updateCart[itemIndex].sizes[sizeIndex].quantity += item.quantity;
                    updateCart[itemIndex].sizes[sizeIndex].price = updateCart[itemIndex].sizes[sizeIndex].quantity * item.price;
                }
                else{
                    updateCart[itemIndex].sizes.push({ size: item.size, quantity: item.quantity, price: item.price });
                }
                return updateCart;
            }
            else{
                return [...prevCart, { ...item, sizes: [{ size: item.size, quantity: item.quantity, price: item.price }]}];
            }
        });
    }
    return (
        <AppContext.Provider value={{
            isAuth,
            setIsAuth: storeAuthen,
            cart,
            updateItem
        }}>
            {children}
            {console.log(isAuth)}
        </AppContext.Provider>
    );
}