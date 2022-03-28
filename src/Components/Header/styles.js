import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
  background-color: rgba(255,255,255,0.8);
  position: fixed;
  top: 0;
  box-shadow: 0px -1.5px 2px 1px;

  img {
    width: 8rem;
    height: 2.8rem;
  }

  .desktop {
    display: flex;
    list-style: none;
    margin-left: -4%;
    
    li {
      padding: 0 1rem;
      cursor: pointer;
      transition: 0.2s;

      :first-of-type {
        color: #a0a0a0;
      }
    }

    li:hover {
        color: #a0a0a0;
        text-decoration: underline;
    }
  }

  .mobile {
    display: none;
    cursor: pointer;
  }

  @media screen and (max-width: 1250px) {
    .desktop {
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 1100px) {
    .desktop {
      display: none;
    }

    .mobile {
      display: block;
    }
  }
`;

export const Button = styled.button`
  background-color: #a4cd39;
  width: 13rem;
  height: 2.2rem;
  transition: 0.3s;
  cursor: pointer;
  color: white;
  outline: none;
  border: none;

  :hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const Icons = styled.div`
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    width: 7rem;
  }
`;

export const MenuLine = styled.header`
  width: 1.7rem;
  height: 0.1rem;
  background-color: black;
  margin: 0.4rem 0;
`;