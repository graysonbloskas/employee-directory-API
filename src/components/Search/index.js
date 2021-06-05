import React from 'react';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import './style.css';

export default function SearchBar(props) {
    const _icon = icon({ prefix: 'fas' })
    return (
        <form>
            <div className="search">
            <div className="form-outline">
            <input onChange={props.handleInputChange} id="search-input" type="search" id="form1" className="form-control" placeholder="Search for Employee" />
            </div>
            <button id="search-button" type="button" className="btn btn-primary">
             <i className="fas fa-search">Search</i>
            </button>
            </div>
        </form>
    )
}
