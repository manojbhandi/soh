
const SubMainTitle = ({title, customClass}) => {
  return (
    <h4 className={`subMainTitle 
     ${customClass ? customClass : ''}`}>
      {title}
    </h4>
  )
}

export default SubMainTitle
