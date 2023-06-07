import './NewHome.css'
const NewHome = () => {
  return (
    <div className="home-container">
    <div className="home-content-container">
              <div className="item hero-img">
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons whtsap">
                  
                  <button><i className="fa-brands fa-whatsapp fa-2xl"></i></button>
                  </div>
                  <div className="icons linkedin">
                    <button >
                    <i class="fa-brands fa-linkedin "></i>
                    </button>
                  </div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons web">
                  <button>
                   <i class="fa-solid fa-window-maximize"></i>
                   </button>
                  </div>
                  <div className="icons seo">
                  <button className='serviceBtn'>
                      <i class="fa-solid fa-magnifying-glass-chart"></i>
                      
                      </button>
                  </div>
                  <div className="">
                   
                  </div>
                  <div className="icons insta">
                    <button>
                    <i class="fa-brands fa-instagram"></i>
                    </button>
                  </div>
                  <div className="icons"></div>
                  
              </div>
              {/* Side content */}
              <div className="item content-item">
                <div className='content-logo'>
                  <img className='logoImg' src="src/assets/logoFormats-03.png" alt="" />
                </div>
                <div className="content-heading">
                <h2 className="text-3xl text-cyan-500 ">
            We Strategies and create the most innovative solutions
                  </h2>
                </div>
                <div className="connectBtn">
                <button className="connect-button">
                     Lets Connect
                  </button> 
                </div>
                  
              </div>
    </div>
    </div>
  )
}

export default NewHome
