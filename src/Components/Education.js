import React, { useState } from 'react';
import classes from './Education.module.css';
import Sidebar from './Sidebar.js';
import { BiRightArrowAlt } from "react-icons/bi";

const Education = () => {
  const [formData, setFormData] = useState([
    {
      schoolName: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: ''
    },
    {
      schoolName: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: ''
    }
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newFormData = [...formData];
    newFormData[index][name] = value;
    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const addNewProgram = () => {
    setFormData([
      ...formData,
      {
        schoolName: '',
        degree: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: ''
      }
    ]);
  };

  const deleteProgram = (index) => {
    const newFormData = formData.filter((_, i) => i !== index);
    setFormData(newFormData);
  };

  return (
    <div className={classes.container}>
      <Sidebar />

      <div className={classes.contentSpace}>
        <section className={classes.skip}>
          <a href=''>Skip<BiRightArrowAlt className={classes.arrowIcon} /></a>
        </section>
        <div className={classes.heading}>
          <h3>Educational Background</h3>
          <p>Enter your educational background details</p>
        </div>

        {formData.map((program, index) => (
          <div key={index}>
            <h6 style={{ textAlign: 'left' }}>{`Academic Program ${index + 1}`}</h6>
            <div className={classes.formContainer}>
              <br />
              <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.formGroup}>
                  <label htmlFor={`schoolName-${index}`}>Program name</label>
                  <input
                    type="text" placeholder='John'
                    id={`schoolName-${index}`}
                    name="schoolName"
                    value={program.schoolName}
                    onChange={(e) => handleChange(e, index)}
                    className={classes.inputs}
                  />
                </div>
                <div className={classes.formGroup}>
                  <label htmlFor={`degree-${index}`}>Institution attended</label>
                  <input
                    type="text" placeholder='Doe'
                    id={`degree-${index}`}
                    name="degree"
                    value={program.degree}
                    onChange={(e) => handleChange(e, index)}
                    className={classes.inputs}
                  />
                </div>
                <div className={classes.formGroup}>
                  <label htmlFor={`startDate-${index}`}>Start Date</label>
                  <input
                    type="date"
                    id={`startDate-${index}`}
                    name="startDate"
                    value={program.startDate}
                    onChange={(e) => handleChange(e, index)}
                    className={classes.inputs}
                  />
                </div>
                <div className={classes.formGroup}>
                  <label htmlFor={`endDate-${index}`}>Completion date</label>
                  <input
                    type="date"
                    id={`endDate-${index}`}
                    name="endDate"
                    value={program.endDate}
                    onChange={(e) => handleChange(e, index)}
                    className={classes.inputs}
                  />
                </div>
              </form>
            </div>
            <br />
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
          <div className={`btn btn-success ${classes.btn}`} style={{ paddingRight: '50px' }}>
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
