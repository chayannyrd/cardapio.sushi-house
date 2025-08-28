import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  padding-inline: 32px;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  height: 60px;
  background-color: rgb(232 108 81);
  color: #888888;
  z-index: 1000;
  box-shadow: 0 2px 5px hsla(0, 0%, 0%, 0.2);
`;
export const LogoLink = styled.div`
  cursor: pointer;
  display: flex;

  img {
    border-radius: 50%;
    height: 40px;
    width: 40px;
    margin-right: 9px;
  }

    span {
    font-size: 1.5rem;
    color: #fff; 
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 9px;
  }
`;


export const CartButton = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative; /* necessário pro badge ficar em cima */

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    position: relative;
  }

  svg {
    transition: transform 0.2s;
  }

  &:hover svg {
    transform: scale(1.1);
  }

  .badge {
    position: absolute;
    top: -8px;
    right: -12px;
    background: #dfc7c22d;
    color: white;
    font-size: 0.75rem;

    padding: 2px 6px;
    border-radius: 50%;
    min-width: 6px;
    height: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
