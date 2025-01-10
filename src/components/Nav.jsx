import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Nav = () => {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/* <!-- Logo --> */}
            <Link className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-auto "
                src={ logo }
                alt="React Jobs"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >React Jobs</span
              >
            </Link>
            <div className="md:ml-auto">
              <div className="flex space-x-2 sm:space-x-8">
                <Link
                  to="/"
                  className="text-white border-b border-slate-100  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                    Home
                </Link>
                <Link
                  to="/jobs"
                  className="text-white border-b border-slate-100 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                    Jobs
                </Link>
                <Link
                  to="/add-job"
                  className="text-white border-b border-slate-100 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                    Add Job
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;