import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  padding: 7rem 7%;
  flex-wrap: wrap;
`;

export const Textblock = styled.div`
  width: 50%;
  padding: 0 5%;

  h2 {
    font-size: 36px;
    font-weight: normal;
    margin-bottom: 1rem;
  }

  p {
    margin: 1rem 0;
    font-size: 14px;
    line-height: 2;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 2rem 0;
  }
`;

export const Blackblock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.6rem;

  button {
    border: 2px solid #ccc;
    background: none;
    cursor: pointer;
    height: 2.2rem;
    padding: 0 0.8rem;
  }

  p {
    margin: 0 0.5rem;
  }
`;



