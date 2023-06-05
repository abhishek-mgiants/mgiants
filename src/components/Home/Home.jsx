import './Home.css'
export function Home() {
  return (
    <>
    <div className="relative w-full bg-black">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
        <img
            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[550px] mx-auto xl:aspect-[16/9]"
            src="src/assets/mascot.jpg"
            alt=""
            />  </div>
              <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <img src="src/assets/logoFormats-03.png" width="300px" height="100px" className="" alt="" />
          <h2 className="text-3xl text-cyan-500 ">
            We Strategies and create the most innovative solutions
                  </h2>
                  <button className="connect-button">
                     Lets Connect
                  </button>   
        </div>
      
      </div>
      
      </div>

      
      </>
  )
}
