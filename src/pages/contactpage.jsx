import React from 'react';
import Banner from '../components/Banner';
import Button from '../components/Button';
const ContactPage = () => {
  return (
    <>
<Banner
        heading="CONTACT US"
        item="contact us"
        imageUrl="\images\about_us.jpg\Pexels Photo by fauxels.png"
      />
    <section className='contact-section'>
      <div className='container'>
        <div className='contact-container'>
          <div className='contact-info'>
          <div className='contact-heading'>
            <h3>Contact Us</h3>
            <h2> Get In <span className='highlight'>Touch</span></h2>
            </div>
            <div className='info-wrapper'>
            <div className='info-item'>
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.375" y="0.375" width="51.25" height="51.25" rx="19.625" stroke="#8A2BE2" stroke-width="0.75"/>
              <path d="M24.4292 34.1758C24.9342 34.5925 25.4608 34.9733 26 35.345C26.5403 34.9782 27.0644 34.5881 27.5708 34.1758C28.415 33.4827 29.2095 32.7311 29.9483 31.9266C31.6517 30.0641 33.5 27.3641 33.5 24.3333C33.5 23.3484 33.306 22.3731 32.9291 21.4632C32.5522 20.5532 31.9997 19.7265 31.3033 19.03C30.6069 18.3336 29.7801 17.7811 28.8701 17.4042C27.9602 17.0273 26.9849 16.8333 26 16.8333C25.0151 16.8333 24.0398 17.0273 23.1299 17.4042C22.2199 17.7811 21.3931 18.3336 20.6967 19.03C20.0003 19.7265 19.4478 20.5532 19.0709 21.4632C18.694 22.3731 18.5 23.3484 18.5 24.3333C18.5 27.3641 20.3483 30.0633 22.0517 31.9266C22.7905 32.7314 23.585 33.4824 24.4292 34.1758ZM26 27.0416C25.2817 27.0416 24.5928 26.7563 24.0849 26.2484C23.577 25.7405 23.2917 25.0516 23.2917 24.3333C23.2917 23.615 23.577 22.9261 24.0849 22.4182C24.5928 21.9103 25.2817 21.625 26 21.625C26.7183 21.625 27.4072 21.9103 27.9151 22.4182C28.423 22.9261 28.7083 23.615 28.7083 24.3333C28.7083 25.0516 28.423 25.7405 27.9151 26.2484C27.4072 26.7563 26.7183 27.0416 26 27.0416Z" fill="#8A2BE2"/>
              </svg>
              <div className="info-block">
              <p className='info-label'>Visit Us</p>
              <p className='info-address'>7407 Lansdowne Road, New Ansley 02176</p>
              </div>
            </div>
            <div className="info-item">
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.375" y="0.375" width="51.25" height="51.25" rx="19.625" stroke="#8A2BE2" stroke-width="0.75"/>
            <path d="M31.2735 34.75C30.511 34.75 29.4399 34.4742 27.836 33.5781C25.8856 32.4844 24.377 31.4746 22.4372 29.5398C20.5669 27.6707 19.6567 26.4606 18.3829 24.1426C16.9438 21.5254 17.1891 20.1535 17.4634 19.5672C17.7899 18.8664 18.2719 18.4473 18.895 18.0313C19.2489 17.7994 19.6234 17.6006 20.0137 17.4375C20.0528 17.4207 20.0891 17.4047 20.1216 17.3902C20.3149 17.3031 20.6079 17.1715 20.979 17.3121C21.2266 17.4051 21.4477 17.5953 21.7938 17.9371C22.5036 18.6371 23.4735 20.1961 23.8313 20.9617C24.0716 21.4777 24.2305 21.8184 24.2309 22.2004C24.2309 22.6477 24.0059 22.9926 23.7329 23.3648C23.6817 23.4348 23.6309 23.5016 23.5817 23.5664C23.2844 23.957 23.2192 24.0699 23.2622 24.2715C23.3493 24.6766 23.9989 25.8824 25.0665 26.9477C26.1341 28.0129 27.3051 28.6215 27.7118 28.7082C27.9219 28.7531 28.0372 28.6852 28.4403 28.3773C28.4981 28.3332 28.5575 28.2875 28.6196 28.2418C29.036 27.932 29.3649 27.7129 29.8016 27.7129H29.804C30.1841 27.7129 30.5094 27.8777 31.0485 28.1496C31.7516 28.5043 33.3575 29.4617 34.0618 30.1723C34.4044 30.5176 34.5954 30.7379 34.6887 30.9852C34.8294 31.3574 34.6969 31.6492 34.6106 31.8445C34.5962 31.877 34.5801 31.9125 34.5633 31.952C34.3989 32.3416 34.199 32.7153 33.9661 33.0684C33.5508 33.6895 33.1301 34.1703 32.4278 34.4973C32.0672 34.6679 31.6725 34.7543 31.2735 34.75Z" fill="#8A2BE2"/>
            </svg>

              <div className="info-block">
              <p className='info-label'>Call Us</p>
              <p className='info-address'>(986) 692-5641</p>
              </div>
            </div>
            
            <div className="info-item">
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.375" y="0.375" width="51.25" height="51.25" rx="19.625" stroke="#8A2BE2" stroke-width="0.75"/>
            <path d="M32.75 19H18.75C17.7875 19 17.0087 19.7875 17.0087 20.75L17 31.25C17 32.2125 17.7875 33 18.75 33H32.75C33.7125 33 34.5 32.2125 34.5 31.25V20.75C34.5 19.7875 33.7125 19 32.75 19ZM32.4 22.7188L26.2137 26.5863C25.9338 26.7613 25.5662 26.7613 25.2863 26.5863L19.1 22.7188C19.0123 22.6695 18.9354 22.603 18.8742 22.5231C18.8129 22.4433 18.7684 22.3519 18.7435 22.2544C18.7186 22.157 18.7137 22.0554 18.7291 21.956C18.7446 21.8566 18.78 21.7613 18.8334 21.676C18.8867 21.5907 18.9568 21.5171 19.0394 21.4596C19.122 21.4022 19.2154 21.3621 19.3139 21.3418C19.4125 21.3215 19.5141 21.3213 19.6127 21.3415C19.7113 21.3616 19.8048 21.4015 19.8875 21.4588L25.75 25.125L31.6125 21.4588C31.6952 21.4015 31.7887 21.3616 31.8873 21.3415C31.9859 21.3213 32.0875 21.3215 32.1861 21.3418C32.2846 21.3621 32.378 21.4022 32.4606 21.4596C32.5432 21.5171 32.6133 21.5907 32.6666 21.676C32.72 21.7613 32.7554 21.8566 32.7709 21.956C32.7863 22.0554 32.7814 22.157 32.7565 22.2544C32.7316 22.3519 32.6871 22.4433 32.6258 22.5231C32.5646 22.603 32.4877 22.6695 32.4 22.7188Z" fill="#8A2BE2"/>
             </svg>


              <div className="info-block">
              <p className='info-label'>Email Us</p>
              <p className='info-address'>info@brightpeak.com</p>
              </div>
            </div>
            </div>
          </div>
          <div className='contact-form'>
            <h3>Let’s Talk Business</h3>
            <form>
              <input type="text" className="form-input" id="fullname" placeholder="Full Name*" required />
              <input type="email"className="form-input" placeholder="Email Address*" required />
              <input type="text" className="form-input" placeholder="Subject*" />
              <textarea  className="form-input"placeholder="Write Your Message..." rows="4"/>
              <Button text="SUBMIT" newcl="buttn-text width" />
            </form>
          </div>
        </div>
        </div>
    </section>
    <  section className='map'>
    <div className='map-container'>
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.145316927344!2d9.481544416020245!3d51.31271187960254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bb3ebc4f71d16f%3A0x42a53682c4282d76!2sKassel%2C%20Germany!5e0!3m2!1sen!2sin!4v1682888888888"
          width="100%"
          height="400"
          style={{ border:0}}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
          ></iframe>
        </div>
        </section>
      
        </>
          );
};

export default ContactPage;