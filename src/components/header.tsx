export const Header = () => {
    return(
        <>
          <header>
                <nav className="flex items-center justify-between flex-wrap bg-blue-900 p-6 shadow-lg sticky">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <span className="font-semibold text-xl tracking-tight">Tailwind Navbar</span>
                    </div>
                    <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 border rounded text-gray-100 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white mr-4">
                            Menu Item
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white mr-4">
                            Menu Item 2
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white">
                            Blog
                        </a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header