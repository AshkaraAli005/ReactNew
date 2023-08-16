import React, { useState } from 'react';

function FormPage({ onSubmit }) {

    const cities = [{
        
    }]

  const defaultFormData = {
    Name: '',
    email: '',
    gender: '',
    password: '',
    language: [],
    country: '', // Set the default country value here
    message: '',
  };

  const [formData, setFormData] = useState(defaultFormData);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
        setFormData((prevData) => ({
          ...prevData,
          [name]: checked
            ? [...prevData[name], value]
            : prevData[name].filter((item) => item !== value),
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    };

    const handleReset = () => {
        setFormData(defaultFormData); // Reset the form fields to default values
      };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <h2>Fill out the Form</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor="Name">Name:</label>
      <input type="text" id="Name" name="Name" value={formData.Name} onChange={handleInputChange} required />
    <div>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required/>
    </div>
    <div>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} required/>
    </div>
    <div>
      <label>Gender:</label>
      <label htmlFor='male'><input type="radio" name="gender" value="male" onChange={handleInputChange}/>Male</label>
      <label htmlFor='female'><input type="radio" name="gender" value="female" onChange={handleInputChange}/> Female</label>
      <label htmlFor='other'><input type="radio" name="gender" value="other" onChange={handleInputChange}/> Other</label>
    </div>
      <div>
      <label>Languages:</label>
      <span><label><input type="checkbox" name="language" value="english" onChange={handleInputChange}/> English</label></span>
      <span>`<label><input type="checkbox" name="language" value="spanish" onChange={handleInputChange}/> Spanish</label></span>
      <span><label><input type="checkbox" name="language" value="french"onChange={handleInputChange}/> French</label></span>
    </div>
      <label htmlFor="country">Country:</label>
      <select id="country" name="country" onChange={handleInputChange}>
        <option value="usa">United States</option>
        <option value="canada" >Canada</option>
        <option value="uk" >United Kingdom</option>
        <option value="australia" >Australia</option>
      </select>
      
      <label htmlFor="message">Additional Comments:</label>
      <textarea id="message" name="message" rows="4" onChange={handleInputChange} required></textarea>
        {/* Your form fields */}
        <button type="submit" value="Submit">Submit</button>
        <button type='reset' onClick={handleReset} >Reset</button>
      </form>
    </div>
  );
}

export default FormPage;
