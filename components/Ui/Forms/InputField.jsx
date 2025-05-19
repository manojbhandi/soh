const InputField = ({ type, placeholder, customClass, email, setEmail }) => {

  return (
    <input
      type={type && type}
      placeholder={placeholder && placeholder}
      className={customClass && customClass}
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  );
};

export default InputField;
