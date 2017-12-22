import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { BrowserRouter as Router,Switch, Link, Route, withRouter, Redirect } from "react-router-dom";

import { store_change_name_store, store_valid_store_name } from "../services/store/actions";
import Countdown from 'react-countdown-now';

import Apologize from "./route/Apologize";
import Bien from "./route/On_a_bien_compris";


class StoreSelection extends Component {

	state = {
		redirect: false
	}

	constructor(props) {
		super(props);
		this.onClickValidationStore = this._onClickValidationStore.bind(this);
	}

	_onClickValidationStore() {
		this.props.store_valid_store_name();
		this.setState({
			redirect: true
		})
	}

	render() {
		return (
			<Router>
			<div>
				<div>
					<ul>
						<ol><Link to="/apologize" className="link">Apologize</Link></ol> <br/>
						<ol><Link to="/on_a_bien_compris" className="link">On a bien compris</Link></ol>
					</ul>
					
					<Switch>
						
						<Route path="/apologize" component={Apologize}/>
						<Route path="/on_a_bien_compris" component={Bien}/>						
					</Switch>
				</div>

				{
					this.state.redirect ?
						<Redirect to="/store" />
					:
						null
				}
			
			</div>
			</Router>
		);
	}

}

const mapStateToProps = (state) => ({
	store: state.store
});


const mapActionsToProps = (dispatch) => ({
	store_change_name_store: bindActionCreators(store_change_name_store, dispatch),
	store_valid_store_name: bindActionCreators(store_valid_store_name, dispatch)
});


export default connect(mapStateToProps, mapActionsToProps)( StoreSelection );