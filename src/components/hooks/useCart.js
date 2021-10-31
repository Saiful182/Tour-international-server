import { useEffect, useState } from "react"


const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://stark-shore-53835.herokuapp.com/cart')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [cart])
    return {
        cart, setCart
    }

}
export default useCart;