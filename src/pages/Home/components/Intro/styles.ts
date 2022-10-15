import styled from "styled-components";

export const IntroContainer = styled.section`
  padding-top: 5rem;
  padding-bottom: 9.0625rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.5rem;
`;

export const Text = styled.div``;

export const Title = styled.h1`
  text-align: left;

  font: 3rem "Baloo 2", sans-serif;
  color: ${(props) => props.theme["base-title"]};
`;

export const Image = styled.div``;

export const Description = styled.h2`
  margin-top: 1rem;

  font: 400 1.25rem "Roboto", sans-serif;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const ItemsList = styled.ul`
  margin-top: 4.125rem;

  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  list-style-type: none;
  width: 50%;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding-top: 1rem;
`;
