import React, { useState, useEffect , Component } from "react";
import product1 from '../partials/Images/product1.jpg';
import { Modal } from "./Welcome";
function Header() {
  
    const cart = document.getElementById('cartholder');
  return (

    <section class="w-full px-6 pb-12 antialiased bg-white">
    <div class="mx-auto max-w-7xl">

        <nav class="relative z-50 h-24">
            <div class="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2 lg:px-0">
                <div class="flex items-center justify-start w-1/4 h-full pr-4">
                    <a href="#_" class="inline-block py-4 md:py-0">
                        <span class="p-1 text-xl font-black leading-none text-gray-900">tails.</span>
                    </a>
                </div>
                <div class="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex">
                    <div class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
                        <a href="#_" class="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden">tails<span class="text-indigo-600">.</span></a>
                        <div class="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                            <a href="#_" class="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-indigo-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">Men</a>
                            <a href="#_" class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Women</a>
                            <a href="#_" class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Collection</a>
                            <a href="#_" class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">About Us</a>
                            <a href="#_" class="absolute top-0 left-0 hidden py-2 mt-6 ml-10 mr-2 text-gray-600 lg:inline-block md:mt-0 md:ml-2 lg:mx-3 md:relative">
                            </a>
                        </div>
                        <div class=" flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
                        <Modal />
                            {/* <a href="#_" class=" inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-orange-900 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-orange-200 transition ease=in-out delay 150 bg-orange-900 hover:-translate-y-1 hover:scale-120 hover:bg-orange-200 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2" >Profile</a> */}
                        <script src="Cart.jsx"></script>
                        </div>
                    </div>
                </div>

            </div>
        </nav>


    </div>
</section>

  );
}

export default Header;
