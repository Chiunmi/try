import React, { useState } from "react";
import ProfileLayout from "../Layout/ProfileLayout";
import "./AdminProfile.css";
import { Link } from "react-router-dom";

const AdminProfile = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedGrade(null);
    setSelectedSection(null);
    setSelectedStudent(null);
  };

  const handleGradeClick = (grade) => {
    setSelectedGrade(grade);
    setSelectedSection(null);
    setSelectedStudent(null);
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setSelectedStudent(null); // Clear student info when changing sections
  };

  const handleNameClick = (studentName) => {
    // Assuming you have a function to fetch student info based on the name
    const studentInfo = getStudentInfoByName(studentName); // Function to get student info
    setSelectedStudent(studentInfo);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const getStudentInfoByName = (studentName) => {
    // Assuming this is a placeholder function that returns mock data for demonstration
    const mockStudentData = {
      name: studentName,
      section: "G7-Counsel",
      age: 13,
      birthdate: "June 25, 2010",
      // Add other student information as needed
    };
    return mockStudentData;
  };

  return (
    <ProfileLayout>
      <div className="adminProfile">
        <span className="healthRecord"> Health Record </span>
        <div className="container_one">
          <div className="c2_button">
            {/* Category buttons */}
            <button
              className={`category-button ${
                selectedCategory === "JHS" ? "selected" : ""
              }`}
              onClick={() => handleCategoryClick("JHS")}
            >
              Junior High School
            </button>
            <button
              className={`category-button ${
                selectedCategory === "SHS" ? "selected" : ""
              }`}
              onClick={() => handleCategoryClick("SHS")}
            >
              Senior High School
            </button>
            <button
              className={`category-button ${
                selectedCategory === "College" ? "selected" : ""
              }`}
              onClick={() => handleCategoryClick("College")}
            >
              College
            </button>
          </div>

          <div className="c1_button">
            {/* Button for Create Account */}
            <button className="cAccount" onClick={toggleForm}>
              Create Account
            </button>
            {/* Link to admin inventory */}
            <Link to="/admin_inventory">
              <button className="inventory">View Inventory</button>
            </Link>
          </div>
        </div>

        {/* Display Selected Category Information */}
        {selectedCategory === "JHS" && (
          <div className="selected-category">
            {/* Grade buttons */}
            <div className="jhs-button">
              <button
                className={`gLevel-button ${
                  selectedGrade === "Grade 7" ? "selected" : ""
                }`}
                onClick={() => handleGradeClick("Grade 7")}
              >
                Grade 7
              </button>
              <button
                className={`gLevel-button ${
                  selectedGrade === "Grade 8" ? "selected" : ""
                }`}
                onClick={() => handleGradeClick("Grade 8")}
              >
                Grade 8
              </button>
              {/* Add other grade buttons */}
            </div>
            {/* Section buttons */}
            {selectedGrade === "Grade 7" && (
              <div className="section-buttons">
                <button
                  className={`section-button ${
                    selectedSection === "G7-Compassion" ? "selected" : ""
                  }`}
                  onClick={() => handleSectionClick("G7-Compassion")}
                >
                  G7-Compassion
                </button>
                <button
                  className={`section-button ${
                    selectedSection === "G7-Courage" ? "selected" : ""
                  }`}
                  onClick={() => handleSectionClick("G7-Courage")}
                >
                  G7-Courage
                </button>
                <button
                  className={`section-button ${
                    selectedSection === "G7-Counsel" ? "selected" : ""
                  }`}
                  onClick={() => handleSectionClick("G7-Counsel")}
                >
                  G7-Counsel
                </button>
              </div>
            )}

            {/* Render grade-specific information */}
            {selectedGrade && (
              <div className="grade-info">
                {/* Render grade-specific information here */}
                <div className="name-list"></div>
              </div>
            )}

            {selectedSection === "G7-Compassion" && !selectedStudent && (
              <div className="name-list">
                {/* List of clickable names */}
                <h3>{selectedSection} </h3>
                <ul>
                  <li onClick={() => handleNameClick("Ahehi, Lobarn A.")}>
                    Ahehi, Lobarn A.
                  </li>
                  <li onClick={() => handleNameClick("Bdjgd Loejd C.")}>
                    Bdjgd Loejd C.
                  </li>
                  <li onClick={() => handleNameClick("Csjfjds Opsdfkdf S.")}>
                    Csjfjds Opsdfkdf S.
                  </li>
                  {/* Add more names as needed */}
                </ul>
              </div>
            )}

            {/* Display selected student's information */}
            {selectedStudent && (
              <div className="student-info">
                <h3>{selectedStudent.name}</h3>
                <p>Name: {selectedStudent.name}</p>
                <p>Gr./Section: {selectedStudent.section}</p>
                <p>Age: {selectedStudent.age}</p>
                <p>Birthdate: {selectedStudent.birthdate}</p>
                {/* Render other personal information */}
              </div>
            )}
          </div>
        )}

        {selectedCategory === "SHS" && (
          <div className="selected-category">
            <div className="shs-button">
              <button
                className={`gLevel-button ${
                  selectedGrade === "Grade 11" ? "selected" : ""
                }`}
                onClick={() => handleGradeClick("Grade 11")}
              >
                Grade 11
              </button>
              <button
                className={`gLevel-button ${
                  selectedGrade === "Grade 12" ? "selected" : ""
                }`}
                onClick={() => handleGradeClick("Grade 12")}
              >
                Grade 12
              </button>
            </div>
            {/* Display grade-specific information */}
            {selectedGrade && (
              <div className="grade-info">
                <h3>{selectedGrade} Information</h3>
                {/* Render grade-specific information here */}
              </div>
            )}
          </div>
        )}

        {selectedCategory === "College" && (
          <div className="selected-category">
            <div className="college-button">
              <button
                className={`gLevel-button ${
                  selectedGrade === "CBAA" ? "selected" : ""
                }`}
                onClick={() => handleGradeClick("CBAA")}
              >
                CBAA
              </button>
              <button
                className={`gLevel-button ${
                  selectedGrade === "CHTM" ? "selected" : ""
                }`}
                onClick={() => handleGradeClick("CHTM")}
              >
                CHTM
              </button>
              <button
                className={`gLevel-button ${
                  selectedGrade === "COI" ? "selected" : ""
                }`}
                onClick={() => handleGradeClick("COI")}
              >
                COI
              </button>
              <button
                className={`gLevel-button ${
                  selectedGrade === "CET" ? "selected" : ""
                }`}
                onClick={() => handleGradeClick("CET")}
              >
                CET
              </button>
              <button
                className={`gLevel-button ${
                  selectedGrade === "COE" ? "selected" : ""
                }`}
                onClick={() => handleGradeClick("COE")}
              >
                COE
              </button>
              <button
                className={`gLevel-button ${
                  selectedGrade === "CASSW" ? "selected" : ""
                }`}
                onClick={() => handleGradeClick("CASSW")}
              >
                CASSW
              </button>
              <button
                className={`gLevel-button ${
                  selectedGrade === "CNAH" ? "selected" : ""
                }`}
                onClick={() => handleGradeClick("CNAH")}
              >
                CNAH
              </button>
              <button
                className={`gLevel-button ${
                  selectedGrade === "COCRIM" ? "selected" : ""
                }`}
                onClick={() => handleGradeClick("COCRIM")}
              >
                COCRIM
              </button>
            </div>
            {/* Display grade-specific information */}
            {selectedGrade && (
              <div className="grade-info">
                <h3>{selectedGrade} Information</h3>
                {/* Render grade-specific information here */}
              </div>
            )}
          </div>
        )}

        {/* Chart Statistics */}
        <span className="chartStat"> Chart Statistics </span>
        <div className="container_three">
          <div className="left">
            <div className="left1"></div>
            <div className="left2"></div>
            <div className="left3"></div>
          </div>
          <div className="middle"></div>
          <div className="right">
            <span className="insight"> Insights </span>
          </div>
        </div>
        <span className="diagram"> Diagram </span>
        <div className="container_four"></div>

        <div className={`account-popup ${showForm ? "show" : ""}`}>
          <div className="popup-inner">
            <div className="close-icon" onClick={toggleForm}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-square-rounded-x"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10l4 4m0 -4l-4 4" />
                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
              </svg>
            </div>
            <h3>Create Account</h3>
            <div className="cAccount-container">
              <form>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" />

                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" />

                <label htmlFor="middleName">Middle Name:</label>
                <input type="text" id="middleName" name="middleName" />

                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" />

                <label htmlFor="sex">Sex:</label>
                <select id="sex" name="sex">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>

                <label htmlFor="civilStatus">Civil Status:</label>
                <select id="civilStatus" name="civilStatus">
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>

                <label htmlFor="telNo">Tel No:</label>
                <input type="tel" id="telNo" name="telNo" />

                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" />

                <label htmlFor="birthdate">Birthdate:</label>
                <input type="date" id="birthdate" name="birthdate" />

                <label htmlFor="religion">Religion:</label>
                <input type="text" id="religion" name="religion" />

                <label htmlFor="guardian">Guardian:</label>
                <input type="text" id="guardian" name="guardian" />

                <label htmlFor="guardianAddress">Guardian's Address:</label>
                <input
                  type="text"
                  id="guardianAddress"
                  name="guardianAddress"
                />

                <label htmlFor="guardianTelNo">Guardian's Tel No:</label>
                <input type="tel" id="guardianTelNo" name="guardianTelNo" />

                <label htmlFor="department">Department:</label>
                <input type="text" id="department" name="department" />
                <div className="button-submit">
                  <button type="submit">Create Account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default AdminProfile;
