import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  height: 5rem;
`;

export const Upper = styled.div`
  background-color: #efefef;
  width: 100%;
  height: 15rem;
  display: flex;
  justify-content: space-around;
  padding-top: 4.5rem;
  flex-wrap: wrap;
`;

export const Icon = styled.div`
  background-color: #444;
  width: 8rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  color: white;
`;

export const Bottom = styled.div`
  width: 100%;
  height: 12rem;
  background: #f7f7f7;
  color: #777;
  font-size: 14px;
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  p {
    width: 24rem;
    word-spacing: 0.1rem;
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  .box {
    width: 12rem;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 750px) {
    height: auto;
  }
`;

export const Minicon = styled.div`
  background-color: #aaa;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  color: white;
`;