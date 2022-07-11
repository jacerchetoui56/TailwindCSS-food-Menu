
function App() {
  return (
    <>
      <div>
        <div>
          <nav>
            <div>
              <h1 className="text-mamoth font-bold uppercase p-4 border-b border-gray-100">
                <a href="/" className="">Food Ninja</a>
              </h1>
            </div>
            <ul>
              <li className="text-gray-700 font-bold">
                <a href="/">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <main className="px-16 py-6 bg-gray-100">
          <div className="flex justify-center md:justify-end">
            <a href="/" className="text-primary">Log in</a>
            <a href="/" className="text-primary ml-2">Sign up</a>
          </div>

          <header>
            <h2 className="font-nunito text-gray-700 text-6xl font-semibold">Recipes</h2>
            <h3 className="text-2xl font-semibold">For Ninjas</h3>
          </header>

          <div>
            <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">Latest Recipes</h4>

            <div className="mt-8 flex space-y-4 justify-center flex-col md:flex-row md:space-x-2">
              <div className="card">
                <div className="badge">24 min</div>
                <img className="w-full h-32 sm:h-48 object-cover" src="img/stew.jpg" alt="stew" />
                <div className="m-4">
                  <span className="font-bold">5 Bean Chili Stew</span>
                  <span className="block text-gray-500">Recipe by Mario</span>
                </div>
              </div>
              <div className="card">
                <div className="badge">24 min</div>
                <img className="w-full h-32 sm:h-48 object-cover" src="img/noodles.jpg" alt="noodles" />
                <div className="m-4">
                  <span className="font-bold">5 Bean Chili Stew</span>
                  <span className="block text-gray-500">Recipe by Mario</span>
                </div>
              </div>
              <div className="card">
                <div className="badge">24 min</div>
                <img className="w-full h-32 sm:h-48 object-cover" src="img/curry.jpg" alt="curry" />
                <div className="m-4">
                  <span className="font-bold">5 Bean Chili Stew</span>
                  <span className="block text-gray-500">Recipe by Mario</span>
                </div>
              </div>
            </div>

            <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">Most Popular</h4>

            <div className="mt-8">
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="bg-secondary-100 text-secondary-200 p-1 rounded-sm ">Load more</div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
