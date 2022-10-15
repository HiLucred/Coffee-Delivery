import styled from "styled-components";

export const InputSection = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  margin-bottom: 0.75rem;

  background: ${(props) => props.theme["base-card"]};
`;

export const FormTemplate = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const HeaderForm = styled.header`
  margin-bottom: 2rem;

  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const TitleAddress = styled.div`
  font-family: "Roboto", sans-serif;
  line-height: 1.2rem;
  
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

export const Input = styled.input`
  height: 2.625rem;
  padding-left: 1rem;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme["base-button"]};
  background: transparent;

  width: ${(props) => props.width};
`;
