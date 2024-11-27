const Button = ({label, iconURL, primary, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${primary ? "bg-coral-red text-white group hover:bg-white hover:text-coral-red" : "bg-white hover:text-white group hover:bg-coral-red text-coral-red border-black" } rounded-full  border-coral-red ${fullWidth && "w-full"} `}>
        {label}
        {iconURL && <img src={iconURL} alt="arrow icon" className="ml-2 rounded-full w-5 h-5 group-hover:translate-x-2 transition-transform duration-150" />}
    </button>
  
  )
}

export default Button
