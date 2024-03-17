

const Evnt = () => {

  const handleClick = (name, age) => {
    let num = Math.floor(Math.random() * 20);
    console.log(name, age, num);
  }
  return (
    <div className="space-y-5">
      <button onClick={() => {
        handleClick('ram', 30)
      }} className="bg-black p-4 text-white">Press</button>
    </div>
  )
}

export default Evnt
