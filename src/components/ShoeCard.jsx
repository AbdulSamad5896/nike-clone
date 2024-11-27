const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg}) => {

    const handleClick = () => {
        if(bigShoeImg !== imgURL.bigShoe){
            changeBigShoeImage(imgURL.bigShoe);
        }
    }


  return (
    <div className={`border-2  rounded-xl  ${imgURL.bigShoe === bigShoeImg ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1 `} onClick={handleClick}>
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:flex-1">
        <img src={imgURL.thumbnail} alt="shoe Image"
        width={127}
        height={103}
        className="object-contain" />
      </div>
    </div>
  )
}

export default ShoeCard
