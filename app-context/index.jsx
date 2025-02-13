import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [cart, setCart] = useState([]);
    const updateItem = (item) => {
        setCart(prevCart=>{
            const itemIndex = prevCart.findIndex(cartItem=>cartItem.id===item.id && cartItem.size === item.size);
            if(itemIndex>-1){
                const updateCart = [...prevCart];
                updateCart[itemIndex].quantity += item.quantity;
                return updateCart;
            }
            else{
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    }
    return (
        <AppContext.Provider value={{
            isAuth,
            setIsAuth,
            cart,
            updateItem
        }}>
            {children}
            {console.log(cart)}
        </AppContext.Provider>
    );
}