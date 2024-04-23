import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import MainLayout from "../Layout/MainLayout";
import "./StudentProfile.css";

function StudentProfile() {
  const [showForm, setShowForm] = useState(false);

  const handleEditAccount = () => {
    setShowForm(!showForm); // Toggle the value of showForm
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // Add logic to handle form submission
    console.log("Form submitted!");
  };
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <MainLayout>
      <Container fluid className="student-profile">
        <Row className="welcome">
          <Col md={6} className="student-col">
            <span className="student-name">Jenine Carpio</span>
            <div className="student-content">
              <label htmlFor="lastName">Last Name:</label>

              <label htmlFor="firstName">First Name:</label>

              <label htmlFor="middleName">Middle Name:</label>

              <label htmlFor="age">Age:</label>

              <label htmlFor="sex">Sex:</label>

              <label htmlFor="civilStatus">Civil Status:</label>

              <label htmlFor="telNo">Tel No:</label>

              <label htmlFor="address">Address:</label>

              <label htmlFor="birthdate">Birthdate:</label>

              <label htmlFor="religion">Religion:</label>

              <label htmlFor="guardian">Guardian:</label>

              <label htmlFor="guardianAddress">Guardian's Address:</label>

              <label htmlFor="guardianTelNo">Guardian's Tel No:</label>

              <label htmlFor="department">Department:</label>

              <div className="student-edit-button">
                <Button
                  variant="primary"
                  className="edit-Saccount"
                  onClick={handleEditAccount}
                >
                  Edit Account
                </Button>
              </div>
            </div>

            {showForm && (
              <div className="account-popup show">
                {" "}
                {/* Apply the account-popup and show classes */}
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
                  <h3>Edit Account</h3>
                  <div className="eAccount-container">
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

                      <label htmlFor="guardianAddress">
                        Guardian's Address:
                      </label>
                      <input
                        type="text"
                        id="guardianAddress"
                        name="guardianAddress"
                      />

                      <label htmlFor="guardianTelNo">Guardian's Tel No:</label>
                      <input
                        type="tel"
                        id="guardianTelNo"
                        name="guardianTelNo"
                      />

                      <label htmlFor="department">Department:</label>
                      <input type="text" id="department" name="department" />
                      <div className="button-submit">
                        <button type="submit">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}

export default StudentProfile;
