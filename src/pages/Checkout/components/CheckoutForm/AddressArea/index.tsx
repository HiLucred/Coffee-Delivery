import { MapPin } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { useTheme } from "styled-components";
import { HeaderForm, Input, TitleAddress } from "./styles";
import { FormTemplate, InputSection } from "./styles";

export function AddressArea() {
  const { register } = useFormContext();
  const colors = useTheme();

  return (
    <InputSection>
      <HeaderForm>
        <MapPin size={"1.375rem"} color={colors["yellow-dark"]} />
        <TitleAddress>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </TitleAddress>
      </HeaderForm>

      <FormTemplate>
        <Input
          width={"12.5rem"}
          placeholder="CEP"
          {...register("cep", { valueAsNumber: true })}
        />

        <Input width={"100%"} placeholder="Rua" {...register("rua")} />

        <Input
          width={"12.5rem"}
          placeholder="Número"
          {...register("numero", { valueAsNumber: true })}
        />

        <Input
          width={"21.5rem"}
          placeholder="Complemento (Opcional)"
          {...register("complemento")}
        />

        <Input width={"12.5rem"} placeholder="Bairro" {...register("bairro")} />

        <Input width={"15.5rem"} placeholder="Cidade" {...register("cidade")} />

        <Input width={"5rem"} placeholder="UF" {...register("uf")} />
      </FormTemplate>
    </InputSection>
  );
}
