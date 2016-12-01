import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions/itemsActions'
import Button from '../components/Button'

const ControlPanel = ({ 
    onIncreaseButtonClick, 
    onDecreaseButtonClick, 
    textIncreaseButton, 
    textDecreaseButton }) => {

    let input

    return (
        <form style={{
            paddingTop: "10px",
            paddingBottom: "10px"
        }} 
        className="input-group" >
            <span className="input-group-btn">
                <Button 
                    text={textDecreaseButton}
                      onClick={ e => {
                          e.preventDefault()
                          onDecreaseButtonClick(input.value)
                      }}/>
            </span>
            <input 
                type="text" 
                ref={ node => { input = node }}
                className="form-control" />
            <span className="input-group-btn">
                  <Button 
                      text={textIncreaseButton}
                      onClick={ e => {
                          e.preventDefault()
                          onIncreaseButtonClick(input.value)
                      }}/>
            </span>
        </form>
    )
}

ControlPanel.propTypes = {
    textIncreaseButton: PropTypes.string.isRequired,
    textDecreaseButton: PropTypes.string.isRequired,
    onIncreaseButtonClick: PropTypes.func.isRequired,
    onDecreaseButtonClick: PropTypes.func.isRequired
}

export default ControlPanel