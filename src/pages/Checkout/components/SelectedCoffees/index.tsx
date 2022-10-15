import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { Separator } from "../CoffeeCartCard/styles";
import {
  ConfirmOrderButton,
  Price,
  SelectedCoffeesContainer,
  SelectedCoffesCard,
  TextTotal,
  Total,
} from "./styles";

export function SelectedCoffees() {
  const { shoppingCart, cartItemsTotal } = useContext(CartContext);

  const totalItems = formatMoney(cartItemsTotal);
  const totalPrice = formatMoney(cartItemsTotal + 3.5);
  const isEmptyShoppingCart = shoppingCart.length === 0

  return (
    <SelectedCoffeesContainer>
      <h3>Cafés Selecionados</h3>

      <SelectedCoffesCard>
        {shoppingCart.map((itemInCart) => {
          return (
            <div key={itemInCart.id}>
              <CoffeeCartCard coffee={itemInCart} />
              <Separator />
            </div>
          );
        })}

        <Total>
          <TextTotal>
            <h4>Total de itens</h4>
            <h5>Entrega</h5>
            <h3>Total</h3>
          </TextTotal>

          <Price>
            <h4>R$ {totalItems}</h4>
            <h5>R$ 3,50</h5>
            <h3>R$ {totalPrice}</h3>
          </Price>
        </Total>

        <ConfirmOrderButton type="submit" disabled={isEmptyShoppingCart}>
          CONFIRMAR PEDIDO
        </ConfirmOrderButton>
      </SelectedCoffesCard>
    </SelectedCoffeesContainer>
  );
}
