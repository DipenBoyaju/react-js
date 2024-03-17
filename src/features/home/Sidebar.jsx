

const Sidebar = ({ side }) => {
  return (
    <div className="p-4 bg-orange-500 text-white">
      <nav>
        <ul>
          {
            side.map((item) => {
              return (
                <li><a href="">{item}</a></li>
              )
            })
          }
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
