import styled from "styled-components";

export const CheckoutFormContainer = styled.section`
  width: 40rem;

  h2 {
    margin-bottom: 0.9375rem;

    font: 700 1.125rem "Baloo 2", sans-serif;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
