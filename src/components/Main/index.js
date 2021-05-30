import React, { useState, useEffect } from 'react'
import SearchBar from '../Search';
import Data from '../Data';


function Main() {
    const [employees, setEmployees] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [sortOrder, setSortOrder] = useState(false);

    useEffect(() => {
        api.getUsers().then((res) => setEmployees(res.data.results))
    }, []);

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSort = (e) => {
        setSortOrder(!sortOrder);
        let sorted = (!sortOrder ? employees.sort((a, b) => a.name.last.localeCompare(b.name.last)) : employees.sort((a, b) => b.name.last.localeCompare(a.name.last)));
        setEmployees(sorted);
    }

    return ( 
        <div>
            <SearchBar handleInputChange={handleInputChange} value={searchValue} />
            <Data employees={employees} handleSort={handleSort} searchValue={searchValue} />
        </div>
    )
}

export default Main
