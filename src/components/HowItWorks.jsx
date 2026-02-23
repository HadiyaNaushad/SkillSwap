import React from 'react';
function HowItWorks(){
  const steps = [
    {id:1,title:'Create a Profile',description:'Sign up and tell us what skills you have and what skills you want to learn.'},
    {id:2,title:'Find a Match',description:'Our smart matching system connects you with people who want to exchange skills.'},
    {id:3,title:'Swap & Learn',description:'Schedule a session, swap your skills, and start learning right away.'}
  ];
  return (
    <section id="how-it-works" className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        {steps.map(s=> (
          <div key={s.id} className="step">
            <div className="step-icon">{s.id}</div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks