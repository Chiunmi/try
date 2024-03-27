import React from "react";
import MainLayout from "../Layout/MainLayout";
import "./Home.css";
import doctor from "./../assets/doctor.jpg";

function Home() {
  return (
    <MainLayout>
      <div className="index">
        <span className="hello">Hello, Jenine! </span>
        <div className="welcome">
          <h1>
            {" "}
            Welcome to Philippine Christian University Clinic! Have a healthy
            day:)
          </h1>
          <p>
            {" "}
            Welcome to Philippine Christian University Welcome to Philippine
            Christian University may missioon vision ba sila ilagya dito di ko
            alam ahahahaha
          </p>

          <div className="hi">
            <img src={doctor} alt="" className="doctor" />
          </div>
          <div className="buttons">
            <button class="learnMore">Learn More</button>
            <button class="upgrade">Upgrade</button>
          </div>
        </div>

        <div className="announce">
          <span className="announcement1"> Announcement</span>

          <div className="announcementnAdmin">
            <svg
              className="announcementAdd"
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-plus"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="#003163"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 5l0 14" />
              <path d="M5 12l14 0" />
            </svg>

            <svg
              className="announcementEdit"
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-pencil"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="#003163"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
              <path d="M13.5 6.5l4 4" />
            </svg>
          </div>

          <div className="container2">
            <span>
              <h> Announcement 1</h>
              <h2>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h2>{" "}
              <p> {">"} See details</p>
            </span>
            <span>
              <h> Announcement 1</h>
              <h2>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h2>{" "}
              <p> {">"} See details</p>
            </span>
            <span>
              <h> Announcement 1</h>
              <h2>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h2>{" "}
              <p> {">"} See details</p>
            </span>
            <span>
              <h> Announcement 1</h>
              <h2>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h2>{" "}
              <p>{">"} See details</p>
            </span>
            <span>
              <h> Announcement 1</h>
              <h2>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h2>{" "}
              <p> {">"} See details</p>
            </span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
