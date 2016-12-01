import React from "react"
import { connect } from "react-redux"

import Header from "../components/Header"
import ControlPanel from "../containers/ControlPanel"
import List from "../components/List"

import * as items from "../actions/itemsActions"

@connect((store) => {
    return {
        items: store.items
    };
})

export default class Main extends React.Component {
    componentWillMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <Header text="Inventory Manager"/>

                <div style={{ backgroundColor:"#ffccff" }}>
                    <div className="container">
                        <div className="col-md-offset-3 col-md-6 col-xs-12">
                            <ControlPanel />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="col-md-offset-3 col-md-6 col-xs-12">
                        <List list={this.props.items}/>
                    </div>
                </div>
            </div>
        )
    }
}