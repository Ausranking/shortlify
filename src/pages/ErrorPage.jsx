import { error } from "../assets/images"

const ErrorPage = () => {
  return (
    <div className="h-[100vh] w-screen ">
      <img src={error} alt="error-ui" className="w-full h-full object-cover" />
    </div>
  )
}

export default ErrorPage
