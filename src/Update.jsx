import { useState } from 'react';
import './App.css';

const Update = () => {
  const [formData, setFormData] = useState({
    name: 'Sahaya Antho Jenifer S',
    college: 'National Engineering College',
    course: 'B.Tech IT',
    cgpa: '8.72',
    school: 'Everest Mariappa Nadar Hr.sec.school',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    alert('Details updated successfully!');
    console.log('Updated data:', formData);
  };

  return (
    <div className="update-container">
      <h2>Update Your Details</h2>
      
      {!isEditing ? (
        <div className="view-mode">
          <table className="info-table">
            <tbody>
              <tr>
                <td className="label">Name</td>
                <td className="value">{formData.name}</td>
              </tr>
              <tr>
                <td className="label">College</td>
                <td className="value">{formData.college}</td>
              </tr>
              <tr>
                <td className="label">Course</td>
                <td className="value">{formData.course}</td>
              </tr>
              <tr>
                <td className="label">CGPA</td>
                <td className="value">{formData.cgpa}</td>
              </tr>
              <tr>
                <td className="label">School</td>
                <td className="value">{formData.school}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={() => setIsEditing(true)} className="btn-edit">
            Edit Details
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="edit-form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>College:</label>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Course:</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>CGPA:</label>
            <input
              type="number"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleChange}
              step="0.01"
              required
            />
          </div>

          <div className="form-group">
            <label>School:</label>
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="btn-save">
              Save Changes
            </button>
            <button type="button" onClick={() => setIsEditing(false)} className="btn-cancel">
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Update;