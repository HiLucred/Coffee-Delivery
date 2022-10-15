import styled from "styled-components";

export const TitlePaymentMethod = styled.div`
  font-family: "Roboto", sans-serif;
  line-height: 1.2rem;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const PaymentSection = styled.footer`
  padding: 2.5rem;
  border-radius: 6px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;

  background: ${(props) => props.theme["base-card"]};
`;

export const PaymentOptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  input[type="radio"] {
   display: none;
  }
`;
