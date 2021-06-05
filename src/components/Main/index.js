import React, { useState, useEffect } from 'react'
import SearchBar from '../Search';
import Data from '../Data';
import API from '../../utils/API';

function Main() {
    const [employees, setEmployees] = useState([]);
    const [searchVal, setsearchVal] = useState('');
    const [sortOrder, setSortOrder] = useState(false);

    useEffect(() => {
        API.getUsers().then((res) => setEmployees(res.data.results))
    }, []);

    const handleInputChange = (e) => {
        setsearchVal(e.target.value);
    };

    const handleSort = (e) => {
        setSortOrder(!sortOrder);
        let sorted = (!sortOrder ? employees.sort((a, b) => a.name.last.localeCompare(b.name.last)) : employees.sort((a, b) => b.name.last.localeCompare(a.name.last)));
        setEmployees(sorted);
    }

    return ( 
        <div>
            <SearchBar handleInputChange={handleInputChange} value={searchVal} />
            <Data employees={employees} handleSort={handleSort} searchVal={searchVal} />
        </div>
    )
}

export default Main
