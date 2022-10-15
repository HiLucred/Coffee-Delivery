import { useState, createContext, ReactNode, useEffect } from "react";
import { Coffee } from "../pages/Home/components/CoffeCard";

interface CartContextType {
  shoppingCart: CartItem[];
  cartItemsTotal: number;
  addCoffeItemToCart: (coffeeItem: CartItem) => void;
  removeCoffeItemToCart: (coffeeItemId: number) => void;
  changeQuantity: (coffeeItemId: number, type: "increase" | "decrease") => void;
  clearCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export interface CartItem extends Coffee {
  quantity: number;
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems";

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [shoppingCart, setShoppingCart] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);

    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }

    return [];
  });

  const cartItemsTotal = shoppingCart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  function addCoffeItemToCart(coffeeItem: CartItem) {
    const newCart = shoppingCart.map((coffe) => {
      if (coffe.id === coffeeItem.id) {
        return {
          ...coffe,
          quantity: coffeeItem.quantity,
        };
      } else {
        return coffe;
      }
    });

    const containsInCart = shoppingCart.findIndex(
      (item) => item.id === coffeeItem.id
    );

    if (containsInCart < 0) {
      setShoppingCart((state) => [...state, coffeeItem]);
    } else {
      setShoppingCart(newCart);
    }
  }

  function removeCoffeItemToCart(coffeeItemId: number) {
    const newCart = shoppingCart.filter((items) => {
      return items.id != coffeeItemId;
    });

    setShoppingCart(newCart);
  }

  function changeQuantity(coffeeItemId: number, type: "increase" | "decrease") {
    const containsInCart = shoppingCart.findIndex(
      (item) => item.id === coffeeItemId
    );

    const newCart = shoppingCart.map((item) => {
      const increase = item.quantity + 1;
      const decrease = item.quantity - 1;

      if (item.id === coffeeItemId) {
        return {
          ...item,
          quantity: type === "increase" ? increase : decrease,
        };
      } else {
        return item;
      }
    });

    if (containsInCart >= 0) {
      setShoppingCart(newCart);
    }
  }

  function clearCart() {
    setShoppingCart([]);
  }

  useEffect(() => {
    localStorage.setItem(
      COFFEE_ITEMS_STORAGE_KEY,
      JSON.stringify(shoppingCart)
    );
  }, [shoppingCart]);

  return (
    <CartContext.Provider
      value={{
        shoppingCart,
        cartItemsTotal,
        addCoffeItemToCart,
        removeCoffeItemToCart,
        changeQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
