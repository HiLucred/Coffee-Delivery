import { QuantityInputContainer, IconWrapper } from "./styles";
import { Minus, Plus } from "phosphor-react";

interface QuantityInputProps {
  size?: "medium" | "small";
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
  size = "medium",
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper
        onClick={onDecrease}
        disabled={quantity <= 0}
        title="Remover quantidade de Itens"
      >
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease} title="Adicionar quantidade de Itens">
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  );
}
