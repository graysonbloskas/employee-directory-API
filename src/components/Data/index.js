import React from 'react';
import './style.css';


function Data({employees, searchVal, handleSort}) {
    return (

<div className="table table-striped table-bordered customTable">
  <thead>
    <tr>
      <th>Profile Image</th>
      <th><span className="sortBtn" onClick={handleSort}>▼Name</span></th>
      <th>Email</th>
      <th>Phone</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
      {employees.map((employee) => {
          return employee.name.first.includes(searchVal) ? 
          (
                <tr>
                    <td>
                        <img src={employee.picture.thumbnail} />
                    </td>
                    <td>
                        {employee.name.first} {employee.name.last}
                    </td>
                    <td>
                        {employee.email}
                    </td>
                    <td>
                        {employee.phone}
                    </td>
                    <td>
                        {employee.location.state}
                    </td>
                </tr>
          ) : null;
      })}
  </tbody>
</div>
    )
}

export default Data
