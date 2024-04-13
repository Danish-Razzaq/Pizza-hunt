import { useEffect, useState } from 'react'
import { PropagateLoader } from "react-spinners"

const Success = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  })



  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      {loading ? (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/50 z-10 flex items-center justify-center">
          <PropagateLoader color="#36d7b7" />
        </div>
      ) : (
        <>
          <h2 className="text-3xl font-semibold mb-4 ">Order Successfull!</h2>
          <p>Your order has been succesfully placed</p>
        </>
      )}
    </div>
  );
}

export default Success