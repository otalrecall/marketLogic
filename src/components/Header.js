import React, { PropTypes } from 'react'

const Header = ({ text }) => (
	<div className="container-fluid"
		style={{
			background: "#ffffcc",
			color: "#ff5050",
			textAlign: "center"
		}}
	>
		<h1>{text}</h1>
	</div>
)

Header.propTypes = {
  text: PropTypes.string.isRequired
}

export default Header