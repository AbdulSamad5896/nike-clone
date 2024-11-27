import { shoe8 } from "../assets/images";
import Button from "../components/Button";
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        
          <h2 className="font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
            We Provide you
            <span className="text-coral-red"> Super</span> <br />
            <span className="text-coral-red">Quality </span>
            
             Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vel architecto aperiam quam molestias exercitationem! Lorem ipsum dolor sit amet.</p>
          <p className="mt-6 lg:max-w-lg info-text ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, incidunt!
          </p>
          <div className="mt-11 flex max-lg:justify-center">
            <Button label="View Details" primary={true}/>
          </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>
    </section>
  )
}

export default SuperQuality
