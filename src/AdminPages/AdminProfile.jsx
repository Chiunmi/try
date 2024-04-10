import React, { useState } from "react";
import ProfileLayout from "../Layout/ProfileLayout";
import "./AdminProfile.css";
import { Link } from "react-router-dom";

const AdminProfile = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [showForm, setShowForm] = useState(false); // Initialize showForm state

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedGrade(null); // Reset selected grade when category changes
  };

  const handleGradeClick = (grade) => {
    setSelectedGrade(grade);
  };

  const toggleForm = () => {
    setShowForm(!showForm); // Toggle showForm state
  };
  return (
    <ProfileLayout>
      <div className="adminProfile">
        <span className="healthRecord"> Health Record </span>
        <div className="container_one">
          <div className="c2_button">
            <button className="jhs" onClick={() => handleCategoryClick("JHS")}>
              Junior High School
            </button>
            <button className="shs" onClick={() => handleCategoryClick("SHS")}>
              Senior High School
            </button>
            <button
              className="college"
              onClick={() => handleCategoryClick("College")}
            >
              College
            </button>
          </div>
          <div className="c1_button">
            <button className="cAccount" onClick={toggleForm}>
              Create Account
            </button>
            <Link to="/admin_inventory">
              <button className="inventory">View Inventory</button>
            </Link>
          </div>
        </div>

        {/* Display Selected Category Information */}
        {selectedCategory === "JHS" && (
          <div className="selected-category">
            <h2>{selectedCategory} Information</h2>
            <div className="jhs-button">
              <button
                className="gLevel-button"
                onClick={() => handleGradeClick("Grade 7")}
              >
                Grade 7
              </button>
              <button
                className="gLevel-button"
                onClick={() => handleGradeClick("Grade 8")}
              >
                Grade 8
              </button>
              <button
                className="gLevel-button"
                onClick={() => handleGradeClick("Grade 9")}
              >
                Grade 9
              </button>
              <button
                className="gLevel-button"
                onClick={() => handleGradeClick("Grade 10")}
              >
                Grade 10
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

        {selectedCategory === "SHS" && (
          <div className="selected-category">
            <div className="shs-button">
              <button
                className="gLevel-button"
                onClick={() => handleGradeClick("Grade 7")}
              >
                Grade 11
              </button>
              <button
                className="gLevel-button"
                onClick={() => handleGradeClick("Grade 8")}
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
