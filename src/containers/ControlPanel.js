import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions/itemsActions'

let ControlPanel = ({ dispatch }) => {

    const styleButton = {
        width: "80px",
        marginRight: "10px",
        marginLeft: "10px"
    }
    let input

    return (
        <form id="controlPanelForm" className="input-group" >
            <span className="input-group-btn">
                  <button 
                      className="btn btn-default" 
                      style={styleButton}
                      onClick={ e => {
                          e.preventDefault()
                          // If there is input, check if item is in the list and if so, add it to the ids to check
                          if (input.value.trim()) {
                              return
                          }
                          // dispatch decrease items
                          input.value = ''
                      }}
                  > - </button>
              </span>
            <input 
                type="text" 
                ref={ node => { input = node }}
                className="form-control" />
              <span className="input-group-btn">
                  <button 
                      className="btn btn-default" 
                      style={styleButton}
                      onClick={ e => {
                          e.preventDefault()
                          // If there is input, check if item is in the list and if so, add it to the ids to check
                          // If it's not in the list, dispatch add item 
                          if (input.value.trim()) {
                              //
                          }
                          // dispatch increase items with all the checked items in the list
                      }}
                  > + </button>
              </span>
        </form>
    )
}

ControlPanel = connect()(ControlPanel)

export default ControlPanel