type Props = {
    onClick: () => void
    children: string
  }
  
  export const Button = (props: Props) => {
    const { onClick, children } = props
  
    return (
      <button
        onClick={onClick}
        className="buttonReset flex items-center h-10 px-8 text-lg  font-semibold bottons-color w-full"
      >
        {children}
        <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                fill="none"
                viewBox="0 0 8 9"
              >
                <path
                  fill="currentColor"
                  d="M8 4.505c0 .285-.09.57-.273.799a4.37 4.37 0 01-.318.35l-.068.065c-.955.997-3.33 2.495-4.534 2.975 0 .01-.716.296-1.057.306h-.045a1.437 1.437 0 01-1.262-.743C.307 8.005.182 7.272.17 7.262.068 6.605 0 5.6 0 4.495c0-1.159.068-2.21.193-2.855 0-.01.125-.601.205-.798C.523.559.75.317 1.034.164 1.261.056 1.5 0 1.75 0c.261.012.75.175.943.252C3.966.732 6.398 2.307 7.33 3.27c.159.153.33.34.375.382.193.241.295.536.295.853z"
                ></path>
              </svg>
      </button>
    )
  }