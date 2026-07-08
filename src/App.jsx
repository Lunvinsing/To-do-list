import Header from './Header.jsx';
import Footer from './Footer.jsx';
import logo from './assets/logo.webp';

const App = () => {
return (
  <>
  <Header></Header>

  {/* Main Content*/}
  <main
      className="flex-1 w-full flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8"
    >
      <section
        className="bg-[#111928] w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-lg shadow-lg flex flex-col items-center p-4 sm:p-6 md:p-8 text-white"
      >
        <div className="flex items-center justify-center mb-4">
          <img
            src={logo}
            alt="Checkit logo"
            width="48"
            height="48"
            className="h-10 sm:h-12 w-auto"
          />
        </div>

        <div className="text-white text-center w-full" id="welcome">
          <h1
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 leading-tight"
          >
            Welcome to Checkit!
          </h1>

          <p className="text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
            Checkit is a simple to-do list application designed to help you stay
            organized and productive. With Checkit, you can easily create,
            manage, and track your tasks in one convenient place!
          </p>
        </div>

        <div className="w-full">
          <label for="inputBox" className="sr-only">Task input</label>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <input
              type="text"
              id="inputBox"
              name="task-input"
              placeholder="Add your task"
              className="w-full min-w-0 flex-1 px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-[#1d2634] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            />
            <button
              onclick="addTask()"
              type="button"
              className="w-full sm:w-auto px-4 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white hover:from-purple-600 hover:to-pink-600 focus:outline-none whitespace-nowrap"
            >
              Add
            </button>
          </div>
        </div>

        <div className="w-full mt-4 sm:mt-5">
          <ul id="taskList" className="w-full"></ul>
        </div>
      </section>
    </main>


  <Footer></Footer>
  </>
);
}

export default App
