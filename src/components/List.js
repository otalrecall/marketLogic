import React, { PropTypes } from 'react'
import ListItem from './ListItem'

const List = ({ list }) => (
	<ul>
		{list.map(listItem =>
			<ListItem
				key={listItem.id}
				{...listItem}
			/>
		)}
	</ul>
)

List.propTypes = {
	list: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		amount: PropTypes.number.isRequired
	}).isRequired).isRequired
}

export default List