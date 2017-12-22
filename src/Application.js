import React, { Component } from 'react';
import logo from './css/volkswagen-logo.svg';
import './css/Application.css';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { Switch, Link, Route } from "react-router-dom";

import StoreSelection from "./components/StoreSelection";
import Store from "./components/Store";
import {store_change_name_store} from "./services/store/actions" 
import {store_valid_store_name} from "./services/store/actions"


class App extends Component {

  state = {
    text:"",
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
      <div className="application">


        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <div>
          <div className="nomMag">
            <h1> Nom de la concession : </h1> 
          </div>
           <input type="text" className="rentre_nom" 
                  value={this.props.store.name} 
                  onChange={(e) => this.props.store_change_name_store({ name: e.target.value })} />
          <div>
            <button
                onClick={() => this.onClickValidationStore()}
                className="button"
              >
                Lance ta concession
              </button>
          </div>
          </div>
          <div className="App-title">
            <h1>{this.props.store.name}</h1>
          </div>
        </header>


        <div>
          {
            this.props.store.storeValid ?
              <Store/>
            :
              <StoreSelection/>
          }
        </div>
      </div>
    );
  }

}


const mapStateToProps = (state) => ({
  store: state.store,
});


const mapActionsToProps = (dispatch) => ({
  store_change_name_store: bindActionCreators(store_change_name_store, dispatch),
  store_valid_store_name: bindActionCreators(store_valid_store_name, dispatch)
});


export default connect(mapStateToProps, mapActionsToProps)( App );
