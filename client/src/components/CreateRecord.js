import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';


const CreateRecord = (props) => {

  const navigate = useNavigate();
  const [hsptlmmt, setHsptl] = useState({
    name: '',
    age: '',
    address: '',
    phone: '',
    diseases: '',
    doctor: '',
  });

  const onChange = (e) => {
    setHsptl({ ...hsptlmmt, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://5000-subhasree03-hsptlmmt-sem1r6p9rir.ws-us93.gitpod.io/api/hsptlmmt', hsptlmmt)
      .then((res) => {
        setHsptl({
          name: '',
          age: '',
          address: '',
          phone: '',
          diseases: '',
          doctor: '',
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateRecord!');
        console.log('The error is -> ')
        console.log(err)
      });
  };

  return (
    <div className='CreateRecord'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Record List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Record</h1>
            <p className='lead text-center'>Create new Record</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  className='form-control'
                  value={hsptlmmt.name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Age'
                  name='age'
                  className='form-control'
                  value={hsptlmmt.age}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Address'
                  name='address'
                  className='form-control'
                  value={hsptlmmt.address}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Phone number'
                  name='phone'
                  className='form-control'
                  value={hsptlmmt.phone}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Mention the disease'
                  name='disease'
                  className='form-control'
                  value={hsptlmmt.disease}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Your Doctor'
                  name='doctor'
                  className='form-control'
                  value={hsptlmmt.doctor}
                  onChange={onChange}
                />
              </div>

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRecord;
