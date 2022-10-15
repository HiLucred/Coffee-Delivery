import { FormEvent, useContext, useEffect, useState } from "react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { CartContext } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import {
  AddToCartButton,
  BuyBox,
  CoffeCardContainer,
  Counter,
  Description,
  Image,
  ImageBox,
  Price,
  Tag,
  Tags,
  TextBox,
  Title,
} from "./styles";

export interface Coffee {
  id: number;
  title: string;
  image: string;
  tags: string[];
  description: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(0);
  const { addCoffeItemToCart, removeCoffeItemToCart } = useContext(CartContext);

  const transformedPrice = formatMoney(coffee.price);

  function handleSendToCart(event: FormEvent) {
    event.preventDefault();

    const coffeeItem = {
      ...coffee,
      quantity,
    };

    if (quantity != 0) {
      addCoffeItemToCart(coffeeItem);
    } else {
      removeCoffeItemToCart(coffee.id);
    }
  }

  function handleIncreaseQuantity() {
    setQuantity((state: number) => state + 1);
  }

  function handleDecreaseQuantity() {
    setQuantity((state: number) => state - 1);
  }

  return (
    <CoffeCardContainer>
      <ImageBox>
        <Image src={coffee.image} />
      </ImageBox>

      <Tags>
        {coffee.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>

      <TextBox>
        <Title>{coffee.title}</Title>
        <Description>{coffee.description}</Description>
      </TextBox>

      <BuyBox>
        <Price>
          <span>R$</span>
          <h3>{transformedPrice}</h3>
        </Price>

        <Counter onSubmit={handleSendToCart}>
          <QuantityInput
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
            quantity={quantity}
          />

          <div>
            <AddToCartButton type="submit" title="Adicionar ao carrinho" disabled={quantity === 0}>
              <img
                src="src/assets/ShoppingCartWhite.svg"
                alt="Botão de carrinho de compras"
              />
            </AddToCartButton>
          </div>
        </Counter>
      </BuyBox>
    </CoffeCardContainer>
  );
}
