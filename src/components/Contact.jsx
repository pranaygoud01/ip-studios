import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    mail: '',
    company: '',
    description: '',
    access_key: '1d855b03-2e49-4877-9865-87b554de005f', 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    const result = await response.json();
    if (result.success) {
      alert('Form submitted successfully!');
      setFormData({ name: '', mobile: '', mail: '', company: '', description: '', access_key: 'your-web3forms-access-key' });
    } else {
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div id='contact' className='h-fit w-full bg-black text-white flex flex-col items-center py-16'>
      <h1 className='text-9xl font-extrabold max-lg:text-4xl text-slate-100'>GET IN TOUCH</h1>
      <form className='max-w-[1200px] w-full max-lg:w-10/12' onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 max-lg:grid-cols-1  mt-10 gap-10'>
          <div className='flex gap-5 flex-col '>
            <label htmlFor='name' className='font-bold'>Name</label>
            <input name='name' type='text' value={formData.name} onChange={handleChange} className='bg-transparent border-0 border-b border-neutral-300' required/>
            <label htmlFor='mobile' className='font-bold mt-10'>Phone Number</label>
            <input name='mobile' type='text' value={formData.mobile} onChange={handleChange} className='bg-transparent border-0 border-b border-neutral-300' required/>
          </div>
          <div className='flex gap-5 flex-col'>
            <label htmlFor='mail' className='font-bold'>Your Email</label>
            <input name='mail' type='email' value={formData.mail} onChange={handleChange} className='bg-transparent border-0 border-b border-neutral-300' required/>
            <label htmlFor='company' className='font-bold mt-10'>Your Company</label>
            <input name='company' type='text' value={formData.company} onChange={handleChange} className='bg-transparent border-0 border-b border-neutral-300'/>
          </div>
        </div>
        <div className='flex gap-5 flex-col  mt-16'>
          <label htmlFor='description' className='font-bold'>Project Description</label>
          <input name='description' type='text' value={formData.description} onChange={handleChange} className='bg-transparent border-0 border-b border-neutral-300' required/>
          <div className='flex justify-center'>
            <button type='submit' className='bg-white text-black rounded-md py-3 w-fit px-10 font-semibold mt-10'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
