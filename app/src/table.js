import React from 'react';

function TablePage({ formDataList }) {
  return (
    <div>
      <h2 className='tableh2'>Submitted Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Languages</th>
            <th>Country</th>
            <th>Additional Comments</th>
          </tr>
        </thead>
        <tbody>
          {formDataList.map((formData, index) => (
            <tr key={index}>
              <td>{formData.Name}</td>
              <td>{formData.email}</td>
              <td>{formData.gender}</td>
              <td>{formData.language.join(', ')}</td>
              <td>{formData.country}</td>
              <td>{formData.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablePage;
