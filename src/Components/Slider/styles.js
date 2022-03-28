import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 25rem;
  background-color: black;
  color: #ccc;
  text-align: center;
  padding: 5.5rem 2% 1rem 2%;

  h2 {
    font-weight: normal;
    margin: 2rem 0;
    font-size: 16px;
  }

  h3 {
    font-weight: normal;
  }

  p {
    font-size: 12px;
    color: #555;
  }
`;

export const Circle = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  border: 2px solid #777;
  border-radius: 50%;
  margin: 0 auto;
`;