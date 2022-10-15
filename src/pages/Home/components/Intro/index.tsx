import {
  IntroContainer,
  Text,
  Title,
  Image,
  Description,
  Item,
  ItemsList,
} from "./styles";

export function Intro() {
  return (
    <IntroContainer>
      <Text>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>

        <Description>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Description>

        <ItemsList>
          <Item>
            <img src="src/assets/items/IconShoppingCart.svg" alt="" />
            <span>Compra simples e segura</span>
          </Item>

          <Item>
            <img src="src/assets/items/IconBox.svg" alt="" />
            <span>Embalagem mantém o café intacto</span>
          </Item>

          <Item>
            <img src="src/assets/items/IconTimer.svg" alt="" />
            <span>Entrega rápida e rastreada</span>
          </Item>

          <Item>
            <img src="src/assets/items/IconCoffe.svg" alt="" />
            <span>O café chega fresquinho até você</span>
          </Item>
        </ItemsList>
      </Text>

      <Image>
        <img src="src/assets/Imagem.svg" alt="" />
      </Image>
    </IntroContainer>
  );
}
