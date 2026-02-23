import React from 'react';
function LearnMore() {
  return (
    <section id="learn-more" className="learn-more">
      <div className="learn-more-container">
        <div className="learn-text">
          <h2>Learn More About SkillSwap</h2>
          <p>SkillSwap isn’t just a platform — it’s a community. Our goal is to make learning and teaching skills simple, free, and accessible for everyone.

            Whether you're here to pick up a new hobby, teach your expertise, or collaborate on projects, SkillSwap helps you connect with the right people and grow faster.</p>
          <a href="#features" className="btn-primary">Explore Features</a>
        </div>
        <div className="learn-image">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" alt="People learning together" />
        </div>
      </div>
    </section>
  );
}

export default LearnMore