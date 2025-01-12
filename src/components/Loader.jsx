import { ClipLoader } from "react-spinners";


const overide = {
    display: 'block',
    margin: '100px auto',
}

const Loader = ({ loading }) => {
  return (
        <ClipLoader 
            color='#4338ca'
            loading={loading}
            cssOverride={overide} 
            size={150} 
        />
  )
}

export default Loader;