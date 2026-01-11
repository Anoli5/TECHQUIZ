import React from "react";
import "./About.css";
import { FaRocket, FaUsers, FaLaptopCode, FaStar } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <div className="about-hero">
        <h1>About TechQuiz Pro</h1>
        <p>
          A smart platform to test, improve & master your technical skills
        </p>
      </div>

      {/* INFO CARDS */}
      <div className="about-cards">
        <div className="about-card">
          <FaRocket className="about-icon" />
          <h3>Our Mission</h3>
          <p>
            To help learners build strong technical foundations through
            interactive quizzes and real-world questions.
          </p>
        </div>

        <div className="about-card">
          <FaLaptopCode className="about-icon" />
          <h3>What We Offer</h3>
          <p>
            Beginner to Expert quizzes in HTML, CSS, JavaScript, React, Python,
            SQL and many more technologies.
          </p>
        </div>

        <div className="about-card">
          <FaUsers className="about-icon" />
          <h3>Who Can Use</h3>
          <p>
            Students, freshers, job seekers and developers preparing for
            interviews or improving skills.
          </p>
        </div>

        <div className="about-card">
          <FaStar className="about-icon" />
          <h3>Why TechQuiz?</h3>
          <p>
            Modern UI, instant results, performance tracking and a smooth quiz
            experience.
          </p>
        </div>
      </div>

      {/* DETAILS SECTION */}
      <div className="about-details">
        <div className="detail-box">
          <h2>📘 Learning Levels</h2>
          <p>
            TechQuiz Pro provides quizzes in three levels – Beginner,
            Intermediate and Expert – so you can learn step by step and grow
            confidently.
          </p>
        </div>

        <div className="detail-box">
          <h2>🎯 Career Focused</h2>
          <p>
            Our questions are designed to help you crack interviews and improve
            your problem-solving skills.
          </p>
        </div>

        <div className="detail-box">
          <h2>🚀 Future Vision</h2>
          <p>
            We aim to become a complete learning and assessment platform with
            certifications, leaderboards and real-time analytics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
