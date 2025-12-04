import './App.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <h2>Personal Information</h2>
      <table className="info-table">
        <tbody>
          <tr>
            <td className="label">Name</td>
            <td className="value">Sahaya Antho Jenifer S</td>
          </tr>
          <tr>
            <td className="label">College</td>
            <td className="value">National Engineering College</td>
          </tr>
          <tr>
            <td className="label">Course</td>
            <td className="value">B.Tech IT</td>
          </tr>
          <tr>
            <td className="label">CGPA</td>
            <td className="value">8.72</td>
          </tr>
          <tr>
            <td className="label">School</td>
            <td className="value">Everest Mariappa Nadar Hr.sec.school</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;