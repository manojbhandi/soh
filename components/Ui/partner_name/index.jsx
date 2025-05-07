const PartnerName = ({ partnerName, customClass }) => {
  return (
    <h3
      className={`text-[#99742B] text-[20px] xl:text-[1.5vw] font-bold ${customClass}`}
    >
      {partnerName}
    </h3>
  );
};

export default PartnerName;
