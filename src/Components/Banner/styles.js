import styled from 'styled-components'

export const Container = styled.section`
  background-image: url('https://crm7.com.br/wp-content/uploads/2013/03/sc-zoho-brasil.jpg');
  background-position: center;
  width: 100%;
  height: 32rem;
  color: white;
  font-size: 32px;
  margin-top: 5rem;
  background-repeat: no-repeat;
  background-size: cover;

  h2{
    font-weight: normal;
    width: 32rem;
    text-align: center;
    position: relative;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;

    @media screen and (max-width: 520px) {
      width: auto;
    }
  }
`;