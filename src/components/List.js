import React, { PropTypes } from 'react'
import ListItem from './ListItem'

const List = ({ list, onItemClick }) => (
	<ul className="list-group">
		{list.map(listItem =>
			<ListItem
				key={listItem.id}
				{...listItem}
				onClick={() => onItemClick(listItem.id)}
			/>
		)}
	</ul>
)

List.propTypes = {
	list: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		amount: PropTypes.number.isRequired,
		checked: PropTypes.bool.isRequired
	}).isRequired).isRequired,
	onItemClick: PropTypes.func.isRequired
}

export default List