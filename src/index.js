'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from "react-redux"
import Main from './containers/Main'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import store from "./store"
import Styles from './static/styles.css';

render (
	<Provider store={store}>
		<Main/>
	</Provider>, 
	document.getElementById('app')
)