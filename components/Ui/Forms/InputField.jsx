const InputField = ({ type, placeholder, customClass }) => {
  return (
    <input
      type={type && type}
      placeholder={placeholder && placeholder}
      className={customClass && customClass}
    />
  );
};

export default InputField;
