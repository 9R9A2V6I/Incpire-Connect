import React, { useState } from 'react';
import axios from 'axios';
import './Connection.css';

function ConnectionForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    contactNo: '',
    contentD: '',
    influType: '',
    linkInsta: '',
    facebookLink: '',
    twitterLink: '',
    youtubeLink: '',
    additionalInfo: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate fields on change
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'email':
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
          error = 'Invalid email format';
        }
        break;
      case 'contactNo':
        if (!/^\d{10}$/.test(value)) {
          error = 'Contact number must be 10 digits';
        }
        break;
      case 'linkInsta':
      case 'facebookLink':
      case 'twitterLink':
      case 'youtubeLink':
        if (
          value &&
          !/^(https?:\/\/)?((w{3}\.)?)instagram\.com\/[a-zA-Z0-9._%-]+(\/)?$/.test(
            value
          ) &&
          !/^(https?:\/\/)?((w{3}\.)?)facebook\.com\/[a-zA-Z0-9._%-]+(\/)?$/.test(
            value
          ) &&
          !/^(https?:\/\/)?((w{3}\.)?)twitter\.com\/[a-zA-Z0-9._%-]+(\/)?$/.test(
            value
          ) &&
          !/^(https?:\/\/)?((w{3}\.)?)youtube\.com\/[a-zA-Z0-9._%-]+(\/)?$/.test(
            value
          )
        ) {
          error = 'Invalid URL format';
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submission
    let isValid = true;
    for (const [name, value] of Object.entries(formData)) {
      validateField(name, value);
      if (errors[name]) {
        isValid = false;
      }
    }

    if (!isValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        form: 'Please fix the errors above before submitting.',
      }));
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/workout/influcerInfo',
        formData
      );

      if (response.status === 201) {
        alert('Successfully');
        setFormData({
          username: '',
          email: '',
          contactNo: '',
          contentD: '',
          influType: '',
          linkInsta: '',
          facebookLink: '',
          twitterLink: '',
          youtubeLink: '',
          additionalInfo: '',
        });
        setErrors({});
      } else {
        setErrors({ form: response.data.errors.join(', ') });
      }
    } catch (error) {
      if (error.response && error.response.data.errors) {
        setErrors({ form: error.response.data.errors.join(', ') });
      } else {
        alert('An error occurred. Please try again.');
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="form-style">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <span className="number">1</span>Influencer Info
          </legend>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Your Name *"
              />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email *"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
              <input
                type="text"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                placeholder="Your Contact Number *"
              />
              {errors.contactNo && <p className="error">{errors.contactNo}</p>}
            </div>
            <div>
              <textarea
                name="contentD"
                value={formData.contentD}
                onChange={handleChange}
                placeholder="Your Contain Details"
              ></textarea>
              {errors.contentD && <p className="error">{errors.contentD}</p>}
            </div>
            <div>
              <label htmlFor="influType">Influence Type:</label>
              <select
                id="influType"
                name="influType"
                value={formData.influType}
                onChange={handleChange}
              >
                <optgroup label="Influence">
                  <option value="GYM">GYM</option>
                  <option value="Beauty">Beauty</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Technology">Technology</option>
                  <option value="Tech Product">Tech Product</option>
                  <option value="Sports">Sports</option>
                  <option value="Educational">Educational</option>
                  <option value="Other">Other</option>
                </optgroup>
              </select>
              {errors.influType && <p className="error">{errors.influType}</p>}
            </div>
            <div>
              <input
                type="url"
                name="linkInsta"
                value={formData.linkInsta}
                onChange={handleChange}
                placeholder="Your Instagram Link *"
              />
              {errors.linkInsta && <p className="error">{errors.linkInsta}</p>}
            </div>
            <div>
              <input
                type="url"
                name="youtubeLink"
                value={formData.youtubeLink}
                onChange={handleChange}
                placeholder="Your YouTube Link *"
              />
              {errors.youtubeLink && (
                <p className="error">{errors.youtubeLink}</p>
              )}
            </div>
            <div>
              <input
                type="url"
                name="facebookLink"
                value={formData.facebookLink}
                onChange={handleChange}
                placeholder="Your Facebook Link *"
              />
              {errors.facebookLink && (
                <p className="error">{errors.facebookLink}</p>
              )}
            </div>
            <div>
              <input
                type="url"
                name="twitterLink"
                value={formData.twitterLink}
                onChange={handleChange}
                placeholder="Your Twitter Link *"
              />
              {errors.twitterLink && (
                <p className="error">{errors.twitterLink}</p>
              )}
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            <span className="number">2</span> Additional Info
          </legend>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="About Your Content"
          ></textarea>
          {errors.additionalInfo && (
            <p className="error">{errors.additionalInfo}</p>
          )}
        </fieldset>
        {errors.form && <p className="error">{errors.form}</p>}
        <input type="submit" value="Apply" />
      </form>
    </div>
  );
}

export default ConnectionForm;
