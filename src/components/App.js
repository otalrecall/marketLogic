import React from 'react'
import Header from "../components/Header"
import ControlPanelContainer from "../containers/ControlPanelContainer"
import ListContainer from "../containers/ListContainer"


const App = () => (
    <div style={{
    		backgroundColor:"#f2f2f2"
    	}}>
        <Header 
        	text="Inventory Manager"/>
        <div style={{ backgroundColor:"#ffccff" }}>
            <div className="container">
                <div className="col-md-offset-3 col-md-6 col-xs-12">
                    <ControlPanelContainer />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="col-md-offset-3 col-md-6 col-xs-12">
                <ListContainer />
            </div>
        </div>
    </div>
)

export default App