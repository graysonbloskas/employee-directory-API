import React from 'react';
import { library, icon } from '@fortawesome/fontawesome-svg-core';

export default function SearchBar(props) {
    const _icon = icon({ prefix: 'fas' })
    return (
        <form>
            <div className="input-group">
            <div className="form-outline">
            <input id="search-input" type="search" id="form1" className="form-control" placeholder="Search for Employee" />
            </div>
            <button id="search-button" type="button" className="btn btn-primary">
             <i className="fas fa-search"></i>
            </button>
            </div>
        </form>
    )
}
