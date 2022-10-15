import styled from "styled-components";

export const SelectedCoffeesContainer = styled.div`
  h3 {
    font-family: "Baloo 2", sans-serif;
    margin-bottom: 0.9375rem;
  }
`;

export const SelectedCoffesCard = styled.div`
  width: 28rem;
  min-height: 31.125rem;
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;
  background: ${(props) => props.theme["base-card"]};
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;

  h4,
  h5 {
    font: 400 0.875rem "Roboto", sans-serif;
  }

  h3 {
    font: 700 1.25rem "Roboto", sans-serif;
  }
`;

export const TextTotal = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.84375rem;
  color: ${(props) => props.theme["base-text"]};
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.84375rem;
`;

export const ConfirmOrderButton = styled.button`
  width: 100%;
  height: 2.875rem;

  border: none;
  border-radius: 6px;
  cursor: pointer;

  font-weight: 700;
  font-size: 0.875rem;

  color: ${(props) => props.theme["white"]};
  background: ${(props) => props.theme["yellow"]};
  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
    transition: 0.2s;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:disabled {
    background: ${(props) => props.theme["yellow"]};
  }
`;
