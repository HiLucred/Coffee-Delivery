import styled from "styled-components";

export const CoffeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  margin-top: 2.5rem;
  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme["base-card"]};
`;

export const ImageBox = styled.div`
  width: 7.5rem;
  height: 7.5rem;

  margin-top: -25px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Tags = styled.div`
  width: 100%;

  margin-top: 0.75rem;

  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

export const Tag = styled.h3`
  padding: 0.3rem;
  font-size: 0.625rem;
  border-radius: 10px;

  color: ${(props) => props.theme["yellow-dark"]};
  background: ${(props) => props.theme["yellow-light"]};
`;

export const TextBox = styled.div`
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const Title = styled.h2`
  margin-top: 1rem;

  font: 700 1.25rem "Baloo 2", sans-serif;
`;

export const Description = styled.h3`
  margin-top: 0.5rem;

  font: 400 0.875rem "Roboto", sans-serif;

  color: ${(props) => props.theme["base-label"]};
`;

export const BuyBox = styled.div`
  width: 100%;
  height: 2.375rem;

  margin-top: 2.0625rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  span {
    font: 400 0.875rem "Roboto", sans-serif;

    padding-top: 0.15rem;
  }

  h3 {
    font: 800 1.5rem "Baloo 2", sans-serif;
  }
`;

export const Counter = styled.form`
  height: 100%;
  display: flex;
  gap: 0.5rem;
`;

export const AddToCartButton = styled.button`
  width: 2.375rem;
  height: 100%;

  cursor: pointer;
  border: none;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme["purple-dark"]};

  &:hover {
    background: ${(props) => props.theme["purple"]};
  }

  &:disabled {
    opacity: 0.3;
  }

  &:hover:disabled {
    background: ${(props) => props.theme["purple-dark"]};
  }
`;
