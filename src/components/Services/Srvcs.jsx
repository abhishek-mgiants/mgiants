import './Srvcs.css'
const Srvcs = () => {
  return (
    <div className="service-container">
      <div className="inner-container"  >
        <div className="items" id='box1'>
        <a href="/digitalmarketing" >
          <img src="src/assets/digitalicon.png" alt=""   />
        </a>
        </div>
        <div className="items">
        <a href="/webdevelopment" >
          <img src="src/assets/webicon.png" alt=""   />
        </a>
        </div>
        <div className="items">
        <a href="/graphicdesign" >
          <img src="src/assets/graphicicon.png" alt=""   />
        </a>
        </div>
        <div className="items">
        <a href="/appdevelopment" >
          <img src="src/assets/appicon.png" alt=""   />
        </a>
        </div>
        <div className="items">
        <a href="/branding" >
          <img src="src/assets/brandicon.png" alt=""   />
        </a>
        </div>
      </div>
      
    </div>
  )
}

export default Srvcs
