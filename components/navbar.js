import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CustomerLogin from "./customer-login";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {

  const [showCustomerLogin, setShowCustomerLogin] = useState(false);

  const handleOnClose = () => setShowCustomerLogin(false);

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
  <div>
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
            <Image src="/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="M Logo"
                  width="32"
                  height="32"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Medusa Multi-Vendor</span>
        </Link>
        <button className="md:hidden" onClick={handleToggle}>
          {toggle ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
        <ul className={
            toggle
              ? "px-2 hover:text-blue-700 md:hidden p-4 fixed top-[55px] bg-gray-800 w-full h-screen duration-500 left-0 inset-0 bg-opacity-30 backdrop-blur-sm"
              : "px-2 hover:text-blue-700 md:hidden p-4 fixed top-[55px] bg-gray-800 w-full h-screen duration-500 left-[-100%]"
          }>
          <li>
            <Link href="#" >Vendors</Link>
          </li>
          <li>
            <Link href="#" >Products</Link>
          </li>
          <li>
            <Link href="#" >Pricing</Link>
          </li>
        </ul>
        <div className="md:flex hidden">
          <ul className="flex items-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Products</Link>
            </li>
            <li>
              <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Vendors</Link>
            </li>
            <li>
              <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
            </li>
          </ul>
          <div className="flex items-center justify-between">
            <Link href="/login" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Seller signin</Link>
            <div className="flex items-center justify-center">           
              <div 
                className="w-8 h-8 bg-gray-100 rounded-full dark:bg-gray-600 mx-1"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
              </div>
              
              <div 
                className="w-8 h-8 bg-gray-100 rounded-full dark:bg-gray-600 mx-1"
                onClick={()=> setShowCustomerLogin(true)}
              >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>

              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <CustomerLogin onClose={handleOnClose} visible={showCustomerLogin}/>
  </div>
  );
}