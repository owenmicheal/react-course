
const Card = ({ children, bg= 'bg-gray-100' }) => {
  return (
    <div className={`p-6 shadow-md rounded-lg ${bg}`}>
        { children }
    </div>
  )
}

export default Card;