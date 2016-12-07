import React from 'react'
import Header from "./Header"
import ControlPanel from "../containers/ControlPanel"
import List from "../containers/List"


const App = () => (
    <div style={{
    		backgroundColor:"#f2f2f2"
    	}}>
        <Header 
        	text="Inventory Manager"/>
        <div style={{ backgroundColor:"#ffccff" }}>
            <div className="container">
                <div className="col-md-offset-3 col-md-6 col-xs-12">
                    <ControlPanel />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="col-md-offset-3 col-md-6 col-xs-12">
                <List />
            </div>
        </div>
    </div>
)

export default App