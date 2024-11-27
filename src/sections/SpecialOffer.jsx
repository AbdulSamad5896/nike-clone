import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
          <img src={offer} alt="offer image" width={773} height={687} className="object-contain" />
      </div>
      <div className="flex flex-1 flex-col">
      <h2 className="font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
            <span className="text-coral-red"> Special </span> 
             Offer
          </h2>
          <p className="mt-4 lg:max-w-lg info-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vel architecto aperiam quam molestias exercitationem! Lorem ipsum dolor sit amet.</p>
          <p className="mt-6 lg:max-w-lg info-text ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, incidunt!
          </p>
          <div className="mt-11 flex max-lg:justify-center gap-5">
            <Button label="View Details" primary="true" iconURL={arrowRight}/>
            <Button label="View Details" />
          </div>
      </div>
    </section>
  )
}

export default SpecialOffer
