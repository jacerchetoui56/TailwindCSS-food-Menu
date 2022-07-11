
import { AiOutlineClockCircle, AiOutlineMail } from 'react-icons/ai';
import { BsQuestionSquare } from 'react-icons/bs';
import { BiHomeAlt } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react'
function App() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="grid md:grid-cols-4">
        <div>
          <nav>
            <div className='flex justify-between px-2 items-center'>
              <h1 className="text-gray-500 hover:text-gray-700 font-bold uppercase p-4 border-b border-gray-100">
                <a href="/" className="">Food Master</a>
              </h1>
              <GiHamburgerMenu onClick={toggleMenu} className='md:hidden text-xl mr-2 text-gray-600 cursor-pointer' />
            </div>
            <ul className={`mt-4 ${!isOpen && 'hidden'} md:block `}>
              <li className="text-gray-700 font-bold ml-2 pr-4 border-r-primary border-r-4">
                <a href="/">
                  <span className='flex items-center justify-end gap-2 md:hover:text-gray-900'>Home <BiHomeAlt /></span>
                </a>
              </li>
              <li className=' pr-4 '>
                <a href="/">
                  <span className='flex items-center justify-end gap-2 md:hover:text-gray-900'>About <BsQuestionSquare /></span>
                </a>
              </li>
              <li className=' pr-4 '>
                <a href="/">
                  <span className='flex items-center justify-end gap-2 md:hover:text-gray-900 '>Contact <AiOutlineMail /></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <main className="px-16 py-6 bg-gray-100 md:col-span-3">
          <div className="flex justify-center md:justify-end">
            <a href="/" className="btn border-primary md:border-[1px] text-primary md:hover:bg-primary md:hover:text-white transition duration-200">Log in</a>
            <a href="/" className="btn border-primary md:border-[1px] text-primary ml-2 md:hover:bg-primary md:hover:text-white">Sign up</a>
          </div>

          <header>
            <h2 className="font-nunito text-gray-700 text-6xl font-semibold">Recipes</h2>
            <h3 className="text-2xl font-semibold">For Ninjas</h3>
          </header>

          <div>
            <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">Latest Recipes</h4>

            <div className="mt-8 grid md:grid-cols-3 gap-4 ">
              <div className="card">
                <div className="badge">
                  <AiOutlineClockCircle className='text-gray-700 font-bold mr-1' />
                  24 min
                </div>
                <img className="w-full h-32 sm:h-48 object-cover" src="img/stew.jpg" alt="stew" />
                <div className="m-4">
                  <span className="font-bold">5 Bean Chili Stew</span>
                  <span className="block text-gray-500">Recipe by Mario</span>
                </div>
              </div>
              <div className="card">
                <div className="badge">
                  <AiOutlineClockCircle className='text-gray-700 font-bold mr-1' />
                  24 min
                </div>
                <img className="w-full h-32 sm:h-48 object-cover" src="img/noodles.jpg" alt="noodles" />
                <div className="m-4">
                  <span className="font-bold">Veg Noodles</span>
                  <span className="block text-gray-500">Recipe by Mario</span>
                </div>
              </div>
              <div className="card">
                <div className="badge">
                  <AiOutlineClockCircle className='text-gray-700 font-bold mr-1' />
                  24 min
                </div>
                <img className="w-full h-32 sm:h-48 object-cover" src="img/curry.jpg" alt="curry" />
                <div className="m-4">
                  <span className="font-bold">Tofu Curry</span>
                  <span className="block text-gray-500">Recipe by Mario</span>
                </div>
              </div>
            </div>

            <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">Most Popular</h4>

            <div className="mt-8">
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="bg-secondary-100 text-secondary-200 p-1 rounded-sm tracking-wider hover:shadow-sm transition btn">Load more</div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
