import { connect } from 'react-redux'
import { increaseItems, decreaseItems} from '../actions/ItemsActions'
import ControlPanel from "../components/ControlPanel"

const mapStateToProps = (state) => {
  return {
      textIncreaseButton: " + ",
      textDecreaseButton: " - "
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncreaseButtonClick: (name) => {
            dispatch(increaseItems(name))
        },
        onDecreaseButtonClick: (name) => {
            dispatch(decreaseItems(name))
        }
    }
}

const ControlPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlPanel)

export default ControlPanelContainer