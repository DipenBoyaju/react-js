import Content from './Content'
import Sidebar from './Sidebar'


const HomePage = () => {
  const mainContent = {
    title: 'This is Main Content',
    detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates sed amet repellat quos architecto iusto ipsam temporibus provident aut fugit cupiditate maiores iste veniam repudiandae fuga, error voluptatem ipsum facilis laudantium molestias praesentium labore numquam."
  };
  const sideBar = [
    'About',
    'Contact'
  ];
  return (
    <div className='space-y-2'>
      <div className="grid grid-cols-4 gap-4 py-4">
        <Sidebar side={sideBar} />
        <Content main={mainContent} />
      </div>
    </div>
  )
}

export default HomePage
