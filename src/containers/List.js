import { connect } from 'react-redux'
import List from '../components/List'
import { toggleChecked } from '../actions/ItemsActions'

const mapStateToProps = (state) => {
	return {
		list: state.items
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (id) => {
      	dispatch(toggleChecked(id))
    }
  }
}

const ListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(List)

export default ListContainer