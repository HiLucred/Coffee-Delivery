import styled, { css } from "styled-components";

export interface QuantityInputContainerProps {
  size: "medium" | "small";
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  width: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  flex: 1;

  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};

  input {
    width: 100%;
    
    text-align: center;
    border: none;

    color: ${(props) => props.theme["base-title"]};
    background: none;

    &:focus {
      outline: none;
    }
  }

  ${({ size }) =>
    size === "medium" &&
    css`
      padding: 0.5rem;
    `}

  ${({ size }) =>
    size === "small" &&
    css`
      padding: 0.3rem 0.5rem;
    `}
`;

export const IconWrapper = styled.button.attrs({
  type: "button",
})`

  width: 0.875rem;
  height: 0.875rem;

  border: none;
  transition: 0.4s;

  color: ${(props) => props.theme["brand-purple"]};
  background: none;

  &:disabled {
    opacity: 0.4;
  }
  
  &:not(:disabled):hover {
    color: ${(props) => props.theme["brand-purple-dark"]};
  }

  svg {
    border-radius: 6px;
    transition: 0.1s;
  }

  svg:hover {
    background: ${(props) => props.theme["base-hover"]};
    transition: 0.1s;
  }
`;
