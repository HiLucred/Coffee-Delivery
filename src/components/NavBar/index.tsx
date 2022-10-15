import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import {
  ActionsBox,
  Logo,
  NavContainer,
  Location,
  ShoppingCart,
  ItemsInCart,
  Nav,
} from "./styles";

export function NavBar() {
  const { shoppingCart } = useContext(CartContext);
  const itemsInCart = shoppingCart.length != 0;

  return (
    <NavContainer>
      <Nav>
        <Logo>
          <NavLink to={"/"}>
            <img src="src/assets/Logo.svg" alt="Logo da Coffe Delivery" />
          </NavLink>
        </Logo>

        <ActionsBox>
          <Location>
            <img src="src/assets/Location.svg" alt="Icone de cocalização" />
            <span>Porto Alegre, RS</span>
          </Location>

          <ShoppingCart>
            <NavLink to={itemsInCart ? "/checkout" : "/"}>
              <img
                src="src/assets/ShoppingCart.svg"
                alt="Icone do carrinho de compras"
              />

              {itemsInCart && <ItemsInCart>{shoppingCart.length}</ItemsInCart>}

            </NavLink>
          </ShoppingCart>
        </ActionsBox>
      </Nav>
    </NavContainer>
  );
}
