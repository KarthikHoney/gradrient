import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
`
export const ButtonItem = styled.button`
  align-items: center;
  border: none;
  border-radius: 5px;
  color: black;
  font-size: 12px;
  font-family: sans-serif;
  cursor: pointer;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  background-color: ${props => (props.isActive ? '#4287f5' : '#ab34ad')};
`
