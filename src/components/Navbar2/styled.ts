import styled from 'styled-components'

export const Nav = styled.nav`
  position: sticky;
  top: 60px; /* altura da Navbar1 */
  background: #f5f5f5;
  padding: 10px;
  display: flex;
  gap: 15px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  z-index: 1000;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  padding-right: 20px;
`

export const LinkItem = styled.a`
  text-decoration: none;
  color: black;
  font-weight: normal;
  transition: color 0.3s, text-decoration 0.3s;

  &[data-active='true'] {
    color: orange;
    text-decoration: underline;
    font-weight: bold;
  }
`
