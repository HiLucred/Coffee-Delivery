import styled from "styled-components";

export const FinishedContainer = styled.div`
  margin-top: 10rem;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FinishedText = styled.div`
  h2 {
    font: 800 2rem "Baloo 2", sans-serif;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  p {
    margin-bottom: 2.5rem;

    font: 400 1.25rem "Roboto", sans-serif;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const FinishedImage = styled.div`
  margin-top: 6rem;
`;

export const AddressBox = styled.div`
  width: 32.875rem;
  height: 16.875rem;

  border: double 1px transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(hsla(259, 93%, 63%, 1), hsla(44, 71%, 52%, 1));
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-radius: 6px 36px 6px 36px;

  display: flex;
  align-items: center;

  ul {
    padding-left: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  li {
    width: 22rem;
    line-height: 1.3rem;

    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
  }
`;

export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
