import InputField from "../Forms/InputField";

const SearchContainer = ({ customClass }) => {
  return (
    <div className={`searchWrp ${customClass}`}>
      <div className="flex h-full justify-center items-center">
        <div className="container">
          <div className="searchInputWrp">
            <InputField type={"name"} placeholder={"Search Here..."} />
            <button>
              <svg viewBox="0 0 28 29" fill="none">
                <path
                  d="M24.5962 13.415C24.5962 19.9212 19.4009 25.165 13.0295 25.165C6.65813 25.165 1.46289 19.9212 1.46289 13.415C1.46289 6.90889 6.65813 1.66504 13.0295 1.66504C19.4009 1.66504 24.5962 6.90889 24.5962 13.415Z"
                />
                <line
                  y1="-1.25"
                  x2="7.94378"
                  y2="-1.25"
                  transform="matrix(0.702067 0.712111 -0.702067 0.712111 20.4238 22.4775)"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
