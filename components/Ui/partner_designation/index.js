const Partner_Designation = ({ designation, customClass }) => {
    return (
        <div className={`designation text-[#616161] text-[16px] xl:text-[1vw] font-medium ${customClass}`}>
            {designation}
        </div>
    )
}

export default Partner_Designation;