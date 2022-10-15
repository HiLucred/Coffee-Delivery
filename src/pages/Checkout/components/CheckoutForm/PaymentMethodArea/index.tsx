import { CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";
import { useTheme } from "styled-components";
import { PaymentOption } from "./PaymentOption";
import { TitlePaymentMethod } from "./styles";
import { PaymentOptions, PaymentSection } from "./styles";

export function PaymentMethodArea() {
  const colors = useTheme();

  const paymentOptionCard = [
    {
      id: "cartao-credito",
      name: "CARTÃO DE CRÉDITO",
      value: "Cartão de Crédito",
    },
    {
      id: "cartao-debito",
      name: "CARTÃO DE DÉBITO",
      value: "Cartão de Débito",
    },
    {
      id: "dinheiro",
      name: "DINHEIRO",
      value: "Dinheiro",
    },
  ];

  return (
    <PaymentSection>
      <TitlePaymentMethod>
        <CurrencyDollar size={"1.375rem"} color={colors.purple} />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </TitlePaymentMethod>

      <PaymentOptions>
        {paymentOptionCard.map((item) => {
          return (
            <PaymentOption
              key={item.id}
              id={item.id}
              name={item.name}
              value={item.value}
            />
          );
        })}
      </PaymentOptions>
    </PaymentSection>
  );
}
