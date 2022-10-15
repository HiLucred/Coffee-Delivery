import { CheckoutFormContainer } from "./styles";
import { AddressArea } from "./AddressArea";
import { PaymentMethodArea } from "./PaymentMethodArea";

export function CheckoutForm() {
  return (
    <CheckoutFormContainer>
      <h2>Complete seu pedido</h2>
      <AddressArea />
      <PaymentMethodArea />
    </CheckoutFormContainer>
  );
}
