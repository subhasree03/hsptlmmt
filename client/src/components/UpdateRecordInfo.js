import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateRecordInfo(props) {
  const [hsptlmmt, setHsptl] = useState({
    name: '',
    age: '',
    address: '',
    phone: '',
    diseases: '',
    doctor: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://5000-subhasree03-hsptlmmt-sem1r6p9rir.ws-us93.gitpod.io/api/hsptlmmt/${id}`)
      .then((res) => {
        setHsptl({
          name: res.data.name,
          age: res.data.age,
          address: res.data.address,
          phone: res.data.phone,
          diseases: res.data.disease,
          doctor: res.data.doctor,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateRecordInfo GET request');
        console.log(err)
      });
  }, [id]);

  const onChange = (e) => {
    setHsptl({ ...hsptlmmt, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: hsptlmmt.name,
      age: hsptlmmt.age,
      address: hsptlmmt.address,
      phone: hsptlmmt.phone,
      diseases: hsptlmmt.disease,
      doctor: hsptlmmt.doctor,
    };

    axios
      .put(`https://5000-subhasree03-hsptlmmt-sem1r6p9rir.ws-us93.gitpod.io/api/hsptlmmt/${id}`, data)
      .then((res) => {
        navigate(`/show-record/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateRecordInfo PUT request ->');
        console.log(err)
      });
  };

  return (
    <div className='UpdateRecordInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Record List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Record</h1>
            <p className='lead text-center'>Update Record's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
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
              <label htmlFor='age'>Age</label>
              <input
                type='text'
                placeholder='age'
                name='age'
                className='form-control'
                value={hsptlmmt.age}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='address'>Address</label>
              <input
                type='text'
                placeholder='Address'
                name='address'
                className='form-control'
                value={hsptlmmt.address}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='phone'>Phone number</label>
              <textarea
                type='text'
                placeholder='Phone Number'
                name='phone'
                className='form-control'
                value={hsptlmmt.phone}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='disease'>Disease</label>
              <input
                type='text'
                placeholder='Disease'
                name='disease'
                className='form-control'
                value={hsptlmmt.diseases}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='doctor'>Doctor</label>
              <input
                type='text'
                placeholder='Doctor'
                name='doctor'
                className='form-control'
                value={hsptlmmt.doctor}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Record
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateRecordInfo;