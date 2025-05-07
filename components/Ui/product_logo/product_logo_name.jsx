const Product_Logo_Name = ({ productName, customClass }) => {
  return (
    <div
      className={`font-fh  text-black font-bold ps-5 lg:ps-[2vw] ${customClass}`}
    >
      {productName}
    </div>
  );
};

export default Product_Logo_Name;
