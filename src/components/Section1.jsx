import logo from '../assets/images/logo.svg'

const Section1 = () => {
   return (
      <section className="bg-[#ec775f] flex justify-between items-center p-6 rounded-2xl">
         <div className="">
            <p className="text-[#f8e9dd] text-md">My balance</p>
            <h2 className="text-white text-4xl font-semibold">$921.48</h2>
         </div>
         <img src={logo} alt="logo" />
      </section>
   )
}

export default Section1
