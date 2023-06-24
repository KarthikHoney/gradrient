import {ListItem, ButtonItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {
    GradientDirectionItemDetails,
    clickingDirectionButton,
    isActive,
  } = props
  const {displayText, value} = GradientDirectionItemDetails

  const onClickButton = () => {
    clickingDirectionButton(value)
  }

  return (
    <ListItem>
      <ButtonItem type="button" onClick={onClickButton} isActive={isActive}>
        {displayText}
      </ButtonItem>
    </ListItem>
  )
}
export default GradientDirectionItem
