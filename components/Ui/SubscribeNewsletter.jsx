import { useState } from "react"
import InputField from "./Forms/InputField"
import { API_END_POINTS, validateEmail } from "@/utils/constants"
import { postPageData } from "@/utils/fetchPageData"

const SubscribeNewsletter = () => {
  const errorKey = 'error'
  const succesKey = 'succes'
  const [email, setEmail] = useState("")
  const [error, setError] = useState({ type: errorKey, message: "" })
  const errorObj = { type: errorKey, message: "Please enter a valid email address" }
  const succesObj = { type: succesKey, message: "" }
  const dummyObj = { type: "", message: "" }


  const submitForm = async (e) => {
    e.preventDefault()
    if (!email) {
      setError(errorObj);
      return
    }
    if (validateEmail(email)) {
      console.log("Submitting with email:", email)
      const payload = { email: email }
      try {
        const response = await postPageData(API_END_POINTS.psotSubscriberEmailForNewsLetter, payload)
        console.log("response", response)
        if (response?.statusCode === 201 || response?.statusCode === 200) {
          setError({ type: succesKey, message: response?.message })
          setEmail("")
        } else {
          console.log("Error submitting form:", response?.message)
          setError({ type: errorKey, message: "Internal server error, Please try again!" })
        }
        // if(response)
      } catch (error) {
        console.log("Error submitting form:", error)
        setError({ type: errorKey, message: "Internal Server Error, Please try again!" })

      }
    }
  }


  const handleEmailChange = (value) => {
    setEmail(value)
    if (value.length > 0) {
      validateEmail(value) ? setError(dummyObj) : setError(errorObj);
    } else {
      setError(dummyObj)
    }
  }

  return (
    <>
      <h4 className="text-black xl:mr-[7.813vw] font-fh text-[22px] xl:text-[1.667vw] mb-[15px] xl:mb-[4.167vw]">Subscribe for our Newsletters</h4>
      <form onSubmit={submitForm} className="">
        <div className="flex border-b border-solid border-[#000] xl:gap-x-[1vw]">
          <InputField type={'email'} email={email} setEmail={handleEmailChange} placeholder={'Enter Email ID'} customClass={'flex-1 xl:text-[0.833vw] placeholder:text-black text-black'} />
          <button type="submit" className="flex-none w-[30px] h-[30px] xl:w-[2.5vw] xl:h-[2.5vw]">
            <svg viewBox="0 0 48 48" fill="#000" className="w-full h-full">
              <path d="M38.1575 25.0002H9C8.71533 25.0002 8.4775 24.9047 8.2865 24.7137C8.0955 24.5227 8 24.2849 8 24.0002C8 23.7155 8.0955 23.4777 8.2865 23.2867C8.4775 23.0957 8.71533 23.0002 9 23.0002H38.1575L33.677 18.5077C33.482 18.313 33.38 18.0835 33.371 17.8192C33.362 17.5552 33.4678 17.313 33.6885 17.0927C33.9088 16.8797 34.1467 16.7714 34.402 16.7677C34.657 16.7637 34.891 16.872 35.104 17.0927L40.869 22.8692C41.1923 23.1925 41.354 23.5695 41.354 24.0002C41.354 24.4309 41.1923 24.8079 40.869 25.1312L35.0925 30.9077C34.9052 31.095 34.6775 31.195 34.4095 31.2077C34.1415 31.2207 33.8973 31.1207 33.677 30.9077C33.4563 30.6874 33.346 30.4495 33.346 30.1942C33.346 29.9392 33.4563 29.7015 33.677 29.4812L38.1575 25.0002Z" />
            </svg>
          </button>
        </div >
      </form>
      {error.type ? <p className={`${error.type === succesKey ? "text-green-600" : "text-red-500 "} mt-2 text-right`}>{error.message}</p> : null}
    </>
  )
}

export default SubscribeNewsletter
