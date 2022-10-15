import { useContext, useEffect } from "react";
import { CartContext, CartItem } from "../../../../contexts/CartContext";
import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { formatMoney } from "../../../../utils/formatMoney";
import {
  CoffeeCartCardContainer,
  ItemsAction,
  ItemsActionInput,
  Price,
  RemoveItemButton,
} from "./styles";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { removeCoffeItemToCart, changeQuantity } = useContext(CartContext);
  const transfomatedPrice = formatMoney(coffee.price);

  function handleRemoveCoffeItem() {
    removeCoffeItemToCart(coffee.id);
  }

  function handleIncreaseItem() {
    changeQuantity(coffee.id, "increase");
  }

  function handleDecreaseItem() {
    changeQuantity(coffee.id, "decrease");
  }

  useEffect(() => {
    if (coffee.quantity <= 0) {
      handleRemoveCoffeItem();
    }
  }, [coffee.quantity]);

  return (
    <CoffeeCartCardContainer>
      <img src={coffee.image} alt="" />

      <ItemsAction>
        <h4>{coffee.title}</h4>

        <ItemsActionInput>
          <QuantityInput
            size={"small"}
            quantity={coffee.quantity}
            onIncrease={handleIncreaseItem}
            onDecrease={handleDecreaseItem}
          />

          <RemoveItemButton onClick={handleRemoveCoffeItem}>
            <Trash />
            REMOVER
          </RemoveItemButton>
        </ItemsActionInput>
      </ItemsAction>

      <Price>R$ {transfomatedPrice}</Price>
    </CoffeeCartCardContainer>
  );
}
