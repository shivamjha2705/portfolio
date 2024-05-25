import { React, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { watsapp, mail } from '../assets';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_mnvk6yd', 'template_nh3fj1j',
      {
        from_name: form.name,
        to_name: 'Shivam Kumar',
        from_email: form.email,
        to_email: 'shivam0510kr@gmail.com',
        message: form.message,

      },
      'ieaThHoaGAz0TsjiH'
    )
      .then(() => {
        setLoading(false);
        alert('Thank you, I will get back to you as soon as possible !!');

        setForm({
          name: '',
          email: '',
          message: ''
        })

      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('oops ! something went wrong');
      })
  }

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <div className='flex items-center justify-between'>
          <div>
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3 className={styles.sectionHeadText}>Contact.</h3>
          </div>
          <div className='flex flex-col gap-5'>
            <div
              onClick={()=>{window.open('https://wa.me/+918581049721',"_blank")}}
              className="black-gradient border-2 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
              title="Watsapp"
            >
              <img
                src={watsapp}
                alt="Watsapp"
                className="w-100 h-100 object-contain"
              />
            </div>
            <div
            onClick={()=>{window.open('mailto:shivam0510kr@gmail.com',"_blank")}}
              className="black-gradient border-2 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
              title="Gmail"
            >
              <img
                src={mail}
                alt="Gmail"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>


        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");