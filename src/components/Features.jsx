import React from 'react';
function Features(){
  const list = [
    {title:'Real-Time Chat',description:'Connect instantly with your learning partner.'},
    {title:'Smart Matching',description:'Find the right skill partner with our AI-powered system.'},
    {title:'Flexible Scheduling',description:'Book a session at a time that works for both of you.'}
  ];
  return (
    <section id="features" className="features">
      <h2>Platform Features</h2>
      <div className="feature-grid">
        {list.map((f,i)=> (
          <div key={i} className="feature-card">
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features