import React from 'react';

export default function SearchBar(props) {
    return (
        <form>
            <div className="searchBox">
                <input
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                className="inputBox"
                placeholder="Search"
                id="search"
                ></input>
            </div>
        </form>
    )
}
