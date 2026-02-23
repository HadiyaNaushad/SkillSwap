import React, {useState} from 'react';
function Contact(){
  const [form, setForm] = useState({name:'',email:'',message:''});
  const handleChange = e => setForm({...form,[e.target.name]:e.target.value});
  const handleSubmit = e => { e.preventDefault(); if(!form.name||!form.email||!form.message){ alert('Please fill all fields'); return;} alert('Thanks! Message sent'); setForm({name:'',email:'',message:''}); }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p className="contact-intro">Have questions or suggestions? We’d love to hear from you.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button className="btn-primary" type="submit">Send Message</button>
        </form>

        <p className="contact-info">📧 support@skillswap.com <br/>📍 Remote - Worldwide</p>
      </div>
    </section>
  );
}

export default Contact