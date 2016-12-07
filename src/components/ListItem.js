import React, { PropTypes } from 'react'
import { setCheck } from '../actions/itemsActions'

let input = false

const ListItem = ({ onClick, name, amount, checked }) => (
	<li 
		className="list-group-item"
		onClick={onClick}
	>
		<span style={{
			borderBottom: "2px solid #ff5050",
			color: "#ff5050",
			padding: "5px"
		}}>{amount}</span> 
		<span style={{
			color: "#737373",
			padding: "5px"
		}}>{name}</span>
		<input 
			type="checkbox"
			ref={ node => { input = node }}
			checked={checked}
			style={{
				position: "absolute", 
				right: "0px",
				marginRight: "10px"
			}}/>
	</li>
)

ListItem.propTypes = {
	onClick: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	amount: PropTypes.number.isRequired,
	checked: PropTypes.bool.isRequired
}

export default ListItem