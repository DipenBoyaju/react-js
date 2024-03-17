

const Header = () => {
  return (
    <div className="flex justify-between content-center flex-row bg-blue-500 p-4 text-white">
      <h1 className="uppercase">header</h1>
      <nav className="flex flex-row gap-4">
        <a href="#">Home</a>
        <a href="#">About</a>
      </nav>
    </div>
  )
}

export default Header
