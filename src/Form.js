import React, {useState} from "react";
import "./Form.css"


function Form(props) {
  // const [formData, setFormData] = useState ({name: '', date: '', address: ''});
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
     const handleDateChange = (event) => {
      setDate(event.target.value)
     }

    const handleAddressChange = (event) => {
      setAddress(event.target.value);
    }

    const submitData = () =>{
      const data = {
        name: name,
        address: address,
        date: date
      };
      
  if (data.name !== '' && data.address !== '' && data.date !== '') {
        props.onSubmit({data});
        console.log(name)
        console.log(date)
        console.log(address)
  }
      // очистити поля форми
      setName('');
      setAddress('');
      setDate('');
    }

    return (
      <>
      <form className="App-input" id='form' >
        <div className="App-input-block name">
          <label htmlFor="name">Name:</label>
          <input type = "text" onChange={handleNameChange} id='name' value={name} required />
        </div>
        <div className="App-input-block dateOfBirth">
          <label htmlFor="date">Date of birth:</label>
          <input type = "date" onChange={handleDateChange} id='date' value={date} required />
        </div>
        <div className="App-input-block address">
          <label htmlFor="address">Address:</label>
          <input type = "text" onChange={handleAddressChange}  id='address' value={address} required />
        </div>
      </form>
      <div className="App-button">
        <button onClick={submitData} htmlFor='form'>Submit</button>
      </div>

      </>
  );
  
}

export default Form;
