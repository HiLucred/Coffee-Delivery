import styled from "styled-components";

export const CoffeeCartCardContainer = styled.div`
  height: 4rem;
  display: flex;
  margin-bottom: 1.5rem;

  img {
    margin-right: 1.25rem;
  }

  h4 {
    font: 400 1rem "Roboto", sans-serif;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const ItemsAction = styled.div`
  width: 10.6875rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemsActionInput = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export const RemoveItemButton = styled.button`
  width: 5.6875rem;
  height: 2rem;

  border-radius: 6px;
  border: none;
  background: ${(props) => props.theme["base-button"]};

  font-size: 0.75rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;

  transition: 0.1s;

  svg {
    font-size: 1rem;
    color: ${(props) => props.theme["brand-purple"]};
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
    transition: 0.1s;
  }
`;

export const Price = styled.span`
  font: 700 1rem "Roboto", sans-serif;
  color: ${(props) => props.theme["base-text"]};
  margin-left: 3rem;
`;

export const Separator = styled.div`
  height: 1px;
  margin-bottom: 1.5rem;
  background: ${(props) => props.theme["base-button"]};
`;
