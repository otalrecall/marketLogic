import React, { PropTypes } from 'react'

const Button = ({ onClick, text }) => (
	<button 
		className="btn btn-default" 
		style={{
	        width: "80px",
	        marginRight: "10px",
	        marginLeft: "10px"
		}}
		onClick={ onClick }
	> {text} </button>
)

Button.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
}

export default Button