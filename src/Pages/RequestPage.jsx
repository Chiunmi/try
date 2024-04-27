import React, { useState } from "react";
import MainLayout from "../Layout/MainLayout";
import "./RequestPage.css";

function RequestPage() {
  return (
    <MainLayout>
      <div className="request">
        Downlaod the form. Fill out. Submit!
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-search"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </button>
        </div>
        <div className="form-container">
          <div className="form1">
            <p className="form-title"> Absence Leave Form</p>
            <h3>
              Absence leave is for those hsdgshgdahsdghsg. Donload the
              bdhsahdgsahd and submit jdshdsghdshhdfh Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </h3>

            <div className="form-button">
              <button
                className="download"
                onClick={() => {
                  window.open("https://forms.gle/xjxbJs7QtZBhxErg6", "_blank");
                }}
              >
                Submit a Form
              </button>
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form1">
            <p className="form-title"> Absence Leave Form</p>
            <h3>
              Absence leave is for those hsdgshgdahsdghsg. Donload the
              bdhsahdgsahd and submit jdshdsghdshhdfh Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </h3>

            <div className="form-button">
              <button className="download">Submit a Form</button>
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form1">
            <p className="form-title"> Absence Leave Form</p>
            <h3>
              Absence leave is for those hsdgshgdahsdghsg. Donload the
              bdhsahdgsahd and submit jdshdsghdshhdfh Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </h3>

            <div className="form-button">
              <button className="download">Submit a Form</button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default RequestPage;
