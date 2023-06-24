import styled from 'styled-components/macro'

export const Heading = styled.h1`
  color: black;
  font-size: 22;
  font-family: 'Roboto';
  text-align: center;
`
export const gradientContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  align-items: center;
`
export const gradientBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  height: 100vh;
`
export const Choose = styled.p`
  color: black;
  font-size: 15px;
  text-align: center;
`
export const unOrderList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const PickColor = styled.p`
  color: black;
  font-size: 15px;
  text-align: center;
`
export const ColorPicker = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ValueAndColor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Value = styled.p`
  color: black;
  font-size: 13px;
`
export const InputContent = styled.input`
  height: 30px;
  width: 80px;
`
export const GenerateButton = styled.button`
  color: white;
  background-color: blue;
  height: 30px;
  width: 90px;
  border: none;
  border: 8px;
`
