import './Contactus.css'
const Contactus = () => {
  return (
    <div className="contact-container">
          <div className="contact-content-container" >
              <div className="item contact-form-container">
                  <form action="" className='contact-form'>
                      <h1 className='heading'>Contact us</h1>
                      <label htmlFor="Name" >Name:</label>
                      <input type="text" name="Name"  id="" />
                      <label htmlFor="Email" >Email:</label>
                      <input type="email" name="Email"  id="" />
                      <label htmlFor="Name" >Share your thoughts:</label>
                      <textarea name="message"  id="textmessage" cols="30" rows="3"></textarea>
                      <input type="submit"  />
                  </form>
              </div>
              <div className="item contact-img-container">
                  <img src="src/assets/ContactUsAsset.png" alt="" />
              </div>
          </div>
    </div>
  )
}

export default Contactus
