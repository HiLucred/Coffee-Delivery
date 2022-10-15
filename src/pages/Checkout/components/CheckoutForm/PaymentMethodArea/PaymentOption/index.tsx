import { useFormContext } from "react-hook-form";
import { PaymentOptionContainer } from "./styles";
import { CreditCard, Bank, Money } from "phosphor-react";
import { useTheme } from "styled-components";

interface PaymentOptionProps {
  id: string;
  name: string;
  value: string;
}

export function PaymentOption({ id, name, value }: PaymentOptionProps) {
  const { register } = useFormContext();
  const colors = useTheme();

  function handleSetIcon(name: string) {
    switch (name) {
      case "CARTÃO DE CRÉDITO":
        return <CreditCard size={"1rem"} color={colors.purple} />;
      case "CARTÃO DE DÉBITO":
        return <Bank size={"1rem"} color={colors.purple} />;
      case "DINHEIRO":
        return <Money size={"1rem"} color={colors.purple} />;
      default:
        console.log("Nenhum ícone encontrado.");
    }
  }

  return (
    <>
      <PaymentOptionContainer htmlFor={id}>
        {handleSetIcon(name)}
        {name}
      </PaymentOptionContainer>
      <input
        type="radio"
        value={value}
        id={id}
        {...register("paymentOption")}
      />
    </>
  );
}
