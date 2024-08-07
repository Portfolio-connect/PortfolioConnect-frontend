import { FallingLines } from "react-loader-spinner";

const PageLoader = () => {
  return (
    <div className="h-s flex items-center justify-center">
         <FallingLines
                color="#1F2937"
                width="50"
                visible={true}
                ariaLabel="falling-circles-loading"
              />
  
    </div>
  )
}

export default PageLoader