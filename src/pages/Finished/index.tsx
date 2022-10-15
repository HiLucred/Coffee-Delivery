import { useEffect } from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { CheckoutFormData } from "../Checkout";
import {
  AddressBox,
  FinishedContainer,
  FinishedImage,
  FinishedText,
  TextInfo,
} from "./styles";

interface LocationType {
  state: CheckoutFormData;
}

export function Finished() {
  const { state } = useLocation() as unknown as LocationType;
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;

  return (
    <FinishedContainer>
      <FinishedText>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <AddressBox>
          <ul>
            <li>
              <img src="src/assets/items/Icon.svg" />
              <TextInfo>
                <div>
                  Entrega em {""}
                  <strong>
                    {state.rua}, {state.numero}
                  </strong>
                </div>

                <div>
                {state.bairro} {" - "} {state.cidade}, {state.uf}
                </div>
              </TextInfo>
            </li>

            <li>
              <img src="src/assets/items/Icon-1.svg" />
              <TextInfo>
                Previsão de entrega <strong>20 min - 30 min </strong>
              </TextInfo>
            </li>

            <li>
              <img src="src/assets/items/Icon-2.svg" />
              <TextInfo>
                Pagamento na entrega
                <strong>{state.paymentOption}</strong>
              </TextInfo>
            </li>
          </ul>
        </AddressBox>
      </FinishedText>

      <FinishedImage>
        <img src="src/assets/Illustration.svg" alt="" />
      </FinishedImage>
    </FinishedContainer>
  );
}
