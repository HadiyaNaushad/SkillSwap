import React from 'react';
function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About SkillSwap</h2>
          <p>SkillSwap is a community-driven platform that makes learning and teaching more collaborative and fun. Our mission is to connect people who want to learn new skills with those who are eager to share their knowledge.

            Whether you’re a beginner looking to learn a hobby, or a professional sharing expertise, SkillSwap helps you grow your skills through meaningful exchanges. Together, we make education accessible to everyone.

          </p>
          <a href="#contact" className="btn-primary">Join the Community</a>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" alt="Team working together" />
        </div>
      </div>
    </section>
  );
}

export default About