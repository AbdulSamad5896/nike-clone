import Button from "../components/Button"
import { useState } from "react";
import { arrowRight } from "../assets/icons"
import {shoes, statistics} from "../Constants/index"
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {

  const [bigShoeImg, setBigShoeImage] = useState(bigShoe1)

  return (
    <section id="home" className="w-full flex flex-col xl:flex-row   justify-center min-h-screen gap-10 max-container relative -top-12">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28  ">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vel architecto aperiam quam molestias exercitationem!</p>
        <Button label={"Show now"} iconURL={arrowRight} primary={true}/>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16  ">
          {statistics.map((stat, index) => (
              <div key={index} >
                <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
                <p className="font-montserrat leading-7 text-slate-gray">{stat.label}</p>
              </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img src={bigShoeImg} alt="shoe image" width={610} height={500} className="object-contain relative z-10"/>

          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe, index) => (
              <div className="" key={index}>
                <ShoeCard
                imgURL={shoe}
                changeBigShoeImage = {
                  (shoe) => {setBigShoeImage(shoe)}
                }
                bigShoeImg = {bigShoeImg}
                />
              </div>

            ))}
          </div>

      </div>

    </section>
  )
}

export default Hero
