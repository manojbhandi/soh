const MenuBtn = ({customClass, handleClick}) => {
  return (
    <button className={`menuBtn ${customClass}`} onClick={handleClick}>
      <span></span>
      <span></span>
    </button>
  )
}

export default MenuBtn
