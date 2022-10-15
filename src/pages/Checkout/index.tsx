import { FormProvider, useForm } from "react-hook-form";
import { CheckoutContainer, CompleteOrderForm } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutForm } from "./components/CheckoutForm";
import { SelectedCoffees } from "./components/SelectedCoffees/index";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const newCheckoutFormValidationSchema = zod.object({
  cep: zod.number().min(1, "Digite um CEP de 8 digitos"),
  rua: zod.string().min(1, "Digite um endereço válido"),
  numero: zod.number().min(1, "Digite um número válido"),
  complemento: zod.string(),
  bairro: zod.string().min(1, "Digite um bairro válido"),
  cidade: zod.string().min(1, "Infor uma Cidade"),
  uf: zod.string().min(2, "Digite um UF de dois caracteres"),
  paymentOption: zod.string(),
});

export type CheckoutFormData = zod.infer<
  typeof newCheckoutFormValidationSchema
>;

export function Checkout() {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(newCheckoutFormValidationSchema),
    defaultValues: {
      paymentOption: undefined,
    },
  });

  const { handleSubmit, reset } = checkoutForm;
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  function handleSubmitCheckoutForm(data: CheckoutFormData) {
    console.log(data);
    navigate("/finished", {
      state: data,
    });

    clearCart();
    reset();
  }

  return (
    <CheckoutContainer>
      <FormProvider {...checkoutForm}>
        <CompleteOrderForm onSubmit={handleSubmit(handleSubmitCheckoutForm)}>
          <CheckoutForm />
          <SelectedCoffees />
        </CompleteOrderForm>
      </FormProvider>
    </CheckoutContainer>
  );
}
