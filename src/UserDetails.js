import React, { useState } from 'react';

export const UserDetails = ({ configData }) => {
  const [showOutput, setShowOutput] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [postcode, setPostcode] = useState('');
  const [address, setAddress] = useState('');

  const Output = (evt) => {
    console.log(evt);
    return (
      <>
        <div>firstName: {firstName}</div>
        <div>lastName: {lastName}</div>
        <div>country: {country}</div>
        <div>email: {email}</div>
        <div>phoneNumber: {phone}</div>
        <div>postCode: {postcode}</div>
        <div>address: {address}</div>
      </>
    );
  };
  // submit function
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setShowOutput(true);
    setFirstName(evt.target[0].value);
    setLastName(evt.target[1].value);
    setCountry(evt.target[6].value);
    setEmail(evt.target[2].value);
    setPhone(evt.target[3].value);
    setPostcode(evt.target[5].value);
    setAddress(evt.target[4].value);
  };
  return (
    <>
      <div className='stock-container'>
        <form onSubmit={handleSubmit}>
          {configData.map((data) => {
            return (
              <div key={data.title}>
                <h1>{data.title}</h1>
                {data.fields.map((item) => (
                  <div key={item.name}>
                    <label>
                      <div>{item.label}: </div>
                      {item.type === 'text' ? (
                        <input type={item.type} />
                      ) : (
                        <select>
                          <option>{item.options[0]}</option>
                          <option>{item.options[1]}</option>
                        </select>
                      )}
                    </label>
                  </div>
                ))}
              </div>
            );
          })}
          <input type='submit' value='Submit' className='button' />
        </form>
        {showOutput && <div>{Output()}</div>}
      </div>
    </>
  );
};
