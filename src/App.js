import React from 'react'
import HomePage from './features/home/HomePage'
import Header from './ui/Header'
import Footer from './ui/Footer'
// import Evnt from './components/Evnt'
// import Box from '../src/components/Box'

const App = () => {

  // const newObj = new Object();
  // newObj.title = 'ghj';
  // newObj.time = 77;

  // const Person = {
  //   firstName: 'ram',
  //   lastName: 'shah',
  //   age: 90,
  //   isAdmin: true,
  //   fullName: function () {
  //     return `${this.firstName} $(this.lastName)`
  //   },
  // };

  // const movie1 = {
  //   "Title": "The Lion King",
  //   "Year": "2019",
  //   "Runtime": "118 min",
  //   "Poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"
  // };
  // const movie2 = {
  //   "Title": "Mowgli: Legend of the Jungle",
  //   "Year": "2018",
  //   "Runtime": "104 min",
  //   "Poster": "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg"
  // };

  // console.log(newObj);
  return (
    <div>
      {/* <div className='flex justify-center items-center mx-auto'>
        <h2 className='text-2xl '>{movie1.Title}</h2>
        <p>{movie1.Runtime}</p>

      </div>
      <Box /> */}
      {/* <Evnt /> */}
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
