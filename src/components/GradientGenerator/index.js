import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  Heading,
  gradientBackground,
  gradientContainer,
  Choose,
  unOrderList,
  PickColor,
  ColorPicker,
  ValueAndColor,
  InputContent,
  GenerateButton,
  Value,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    gradientId: gradientDirectionsList[0].value,
    fromLeft: '#4dbbbd',
    fromRight: '#4ca63a',
    gradientValue: ` to ${gradientDirectionsList[0].value},#4dbbbd,#4ca63a`,
  }

  getGradient = () => {
    const {gradientId, fromLeft, fromRight} = this.state
    this.setState({
      gradientValue: `to ${gradientId},${fromLeft},${fromRight}`,
    })
  }

  onChangeLeft = event => {
    this.setState({fromLeft: event.target.value})
  }

  onChangeRight = event => {
    this.setState({fromRight: event.target.value})
  }

  clickingDirectionButton = direction => {
    this.setState({gradientId: direction})
  }

  render() {
    const {gradientValue, fromLeft, fromRight, gradientId} = this.state

    return (
      <gradientBackground
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <gradientContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Choose>Choose Direction</Choose>
          <unOrderList>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                key={eachItem.directionId}
                GradientDirectionItemDetails={eachItem}
                clickingDirectionButton={this.clickingDirectionButton}
                isActive={gradientId === eachItem.value}
              />
            ))}
          </unOrderList>
          <PickColor>Pick the colors</PickColor>
          <ColorPicker>
            <ValueAndColor>
              <Value>{fromLeft}</Value>
              <InputContent
                type="color"
                onChange={this.onChangeLeft}
                value={fromLeft}
              />
            </ValueAndColor>

            <ValueAndColor>
              <Value>{fromRight}</Value>
              <InputContent
                type="color"
                onChange={this.onChangeRight}
                value={fromRight}
              />
            </ValueAndColor>
            <GenerateButton onClick={this.getGradient}>Generate</GenerateButton>
          </ColorPicker>
        </gradientContainer>
      </gradientBackground>
    )
  }
}
export default GradientGenerator
