

const Content = ({ main }) => {
  return (
    <div className="bg-pink-500 p-4 col-span-3 text-white">
      <h1>{main.title}</h1>
      <p>{main.detail}</p>
    </div>
  )
}

export default Content
