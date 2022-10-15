import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  z-index: 1000;

  position: fixed;
  top: 0;

  padding-top: 2rem;
  padding-bottom: 2rem;

  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.1);

  background: ${(props) => props.theme["background"]};
`;

export const Nav = styled.nav`
  max-width: 70rem;
  margin: 0 auto;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div``;

export const ActionsBox = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Location = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem;
  border-radius: 6px;

  font-size: 0.875rem;
  color: ${(props) => props.theme["purple-dark"]};
  background: ${(props) => props.theme["purple-light"]};
`;

export const ShoppingCart = styled.div`
  cursor: pointer;
  position: relative;

  display: flex;
  align-items: center;

  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme["yellow-light"]};
  position: relative;

  &:hover {
    background: #F1E1D1;
  }
`;

export const ItemsInCart = styled.div`
  width: 1.25rem;
  height: 1.25rem;

  position: absolute;
  top: -0.5rem;
  right: -0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font: 700 0.75rem 'Roboto', sans-serif;
  border-radius: 10px;
  
  color: ${(props) => props.theme["white"]};
  background: ${(props) => props.theme["yellow-dark"]};
`;
