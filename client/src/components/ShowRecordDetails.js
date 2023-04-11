import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowRecordDetails(props) {
  const [hsptlmmt, setHsptl] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://5000-subhasree03-hsptlmmt-sem1r6p9rir.ws-us93.gitpod.io/api/hsptlmmt/${id}`)
      .then((res) => {
        setHsptl(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowRecordDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`https://5000-subhasree03-hsptlmmt-sem1r6p9rir.ws-us93.gitpod.io/api/hsptlmmt/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowRecordDetails_deleteClick');
      });
  };

  const RecordItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Name</td>
            <td>{hsptlmmt.name}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Age</td>
            <td>{hsptlmmt.age}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Address</td>
            <td>{hsptlmmt.address}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Phone</td>
            <td>{hsptlmmt.phone}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Diseases</td>
            <td>{hsptlmmt.diseases}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Doctor</td>
            <td>{hsptlmmt.doctor}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  return (
    <div className='ShowRecordDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Record List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Patient's Record</h1>
            <p className='lead text-center'>View Patient's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{RecordItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(hsptlmmt._id);
              }}
            >
              Delete Record
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-record/${hsptlmmt._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Record
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default ShowRecordDetails