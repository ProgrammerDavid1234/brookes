import React, { useState } from 'react';
import classes from './Qualification.module.css';
import Sidebar from '../src/Components/Sidebar';
import { BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const Qualification = () => {
  const [formData, setFormData] = useState([
    {
      qualificationName: '',
      institution: '',
      dateAwarded: '',
    },
    {
      qualificationName: '',
      institution: '',
      dateAwarded: '',
    },
  ]);

  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newFormData = [...formData];
    newFormData[index][name] = value;
    setFormData(newFormData);
  };

  const addNewProgram = () => {
    setFormData([
      ...formData,
      {
        qualificationName: '',
        institution: '',
        dateAwarded: '',
      },
    ]);
  };

  const deleteProgram = (index) => {
    const newFormData = formData.filter((_, i) => i !== index);
    setFormData(newFormData);
  };

  const handleNext = () => {
    navigate('/nextpage'); // Change the path as per your routing setup
  };

  return (
    <div className={classes.container}>
      <Sidebar />

      <div className={classes.contentSpace}>
        <section className={classes.skip}>
          <a href=''>Skip<BiRightArrowAlt className={classes.arrowIcon} /></a>
        </section>
        <div className={classes.heading}>
          <h3>Professional Qualifications</h3>
          <p>Enter your professional qualifications</p>
        </div>

        {formData.map((program, index) => (
          <div key={index}>
            <h5 style={{ textAlign: 'left' }}>{`Professional Qualification ${index + 1}`}</h5>
            <div className={classes.formContainer}>
              <form className={classes.form}>
                <div className={classes.formGroup}>
                  <label htmlFor={`qualificationName-${index}`}>Qualification</label>
                  <input
                    type="text"
                    id={`qualificationName-${index}`}
                    name="qualificationName"
                    placeholder="Qualification Name"
                    value={program.qualificationName}
                    onChange={(e) => handleChange(e, index)}
                    className={classes.inputs}
                  />
                </div>
                <div className={classes.formGroup}>
                  <label htmlFor={`institution-${index}`} style={{fontSize:'10.2px'}}>Institution qualification was obtained from</label>
                  <input
                    type="text"
                    id={`institution-${index}`}
                    name="institution"
                    placeholder="Institution"
                    value={program.institution}
                    onChange={(e) => handleChange(e, index)}
                    className={classes.inputs}
                  />
                </div>
                <div className={classes.formGroup}>
                  <label htmlFor={`dateAwarded-${index}`}>Date Attained</label>
                  <input
                    type="date"
                    id={`dateAwarded-${index}`}
                    name="dateAwarded"
                    value={program.dateAwarded}
                    onChange={(e) => handleChange(e, index)}
                    className={classes.inputs}
                  />
                </div>
              </form>
            </div>
          </div>
        ))}

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h4 className={classes.new} style={{ textAlign: 'left' }}>
            <a href='#' onClick={addNewProgram}>Add new ⊕</a>
          </h4>
          {formData.length > 2 && (
            <h4 className={classes.delete} style={{ textAlign: 'left', textDecoration: 'none' }}>
              <a href='#' onClick={() => deleteProgram(formData.length - 1)}>Delete Last ⊗</a>
            </h4>
          )}
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <div className={`btn btn-success ${classes.btn}`} style={{ paddingRight: '50px' }} onClick={handleNext}>
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
