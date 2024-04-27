import React from "react";
import MainLayout from "../Layout/MainLayout";
import "./Home.css";

function Home() {
  return (
    <MainLayout>
      <div className="index">
        <div className="welcome">
          <span className="hello">Hello, Jenine!</span>
          <div className="welcome-content">
            <h1>
              Welcome to Philippine Christian University Clinic! Have a healthy
              day :)
            </h1>
            <p>
              Welcome to Philippine Christian University Welcome to Philippine
              Christian University may mission vision ba sila ilagya dito di ko
              alam ahahahaha
            </p>
            <div className="buttons">
              <button class="learnMore">Learn More</button>
              <button class="upgrade">Upgrade</button>
            </div>
          </div>
        </div>

        <div className="announce">
          <span className="announcement1">Announcement</span>
          <div className="container2">
            <span>
              <h>Announcement 1</h>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h2>
              <p>{" >"} See details</p>
            </span>
            <span>
              <h>Announcement 1</h>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h2>
              <p>{" >"} See details</p>
            </span>
            <span>
              <h>Announcement 1</h>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h2>
              <p>{" >"} See details</p>
            </span>
            <span>
              <h>Announcement 1</h>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h2>
              <p>{" >"} See details</p>
            </span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
