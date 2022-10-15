import styled from "styled-components";

export const PaymentOptionContainer = styled.label`
  padding: 1rem;
  width: 11.125rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;

  font: 400 0.75rem "Roboto", sans-serif;

  border-radius: 6px;
  cursor: pointer;

  background: ${(props) => props.theme["base-button"]};
`;
