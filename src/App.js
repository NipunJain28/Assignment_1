import Navbar from './Components/Navbar';
import './App.css';
import Section1 from './Components/Section1';
import Catergories from './Components/Catergories';
import Hired from './Components/Hired';
import Contact from './Components/Contact'
function App() {
  return (
    <div className='h-screen w-full overflow-y-auto overflow-x-hidden'>
      <Navbar></Navbar>
      <Section1></Section1>
      <div>
        <Catergories/>
      </div>
      <div>
        <Hired/>
      </div>
      <div>
        <Contact/>
      </div>
      
<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">FlexJobs™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

    </div>
  );
}

export default App;
