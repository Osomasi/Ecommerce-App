import React, { useState, useEffect } from "react";
import product1 from '../partials/Images/product1.jpg';
import ImageSlider from "./Imageslider";

function Welcome() {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <section class="w-full px-6 pb-12 antialiased bg-white">
        <div class="mx-auto max-w-7xl bg-blue-500">

            <div class="container max-w-lg px-3 py-32 mx-auto mt-px text-left md:max-w-none md:text-center bg-black">
                <div class="grid grid-rows-3 lg:grid-rows-2 md:grid-rows-2 grid-flow-col gap-4 bg-white">
                    <div class=" name1 grid grid-rows-1 min-w-fit place-items-center row-span-1 bg-green-200 lg:row-span-1 md:row-span-1 ..." >
                    <div class=" h-[20em] w-[20em] bg-red-500 ">
                    <img class="object-contain" src={product1} />
                    </div>
                    </div>

                    <div class=" name2 carousel p-12 grid grid-rows-1 row-span-1 bg-yellow-200 lg:row-span-1 md:row-span-1 ...">
                    <div class=" w-[20em] mx-auto lg:w-[400px] md:w-[20em] bg-black">
                    {/* <Carousel /> */}
                    <ImageSlider />
                    </div>
                    </div>

                    <div class=" name3  grid grid-rows-1 row-span-1 bg-blue-200 lg:row-span-2 md:row-span-2 ...">
                    <div class="bg-gray-300 grid grid-rows-6 grid-flow-col">
                    <div class="bg-orange-200 row-span-1 text-left pl-4 ...">Sneakers Velocity Crimson Collection
                    </div>

                    <div class="bg-red-200 grid grid-cols-2 gap-1 row-span-1 ...">
                    <div class="bg-red-200 col-span-1 ...">20 USD</div>
                    <div class="bg-red-200 col-span-1 ...">In Stock</div>
                    </div>

                    <div class="bg-gray-400 grid grid-cols-2 gap-1 row-span-1 ...">
                    <button class=" m-3 buy-now">Counter</button>
                    <button class=" m-3 buy-now">Add to Cart</button>
                    </div>

                    <div class="bg-pink-400 row-span-1 text-left pl-4 ...">Description
                    </div>

                    <div class="bg-purple-400 row-span-1 ...">
                    {/* <p class="p-8"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum saepe amet alias quo magnam sapiente, nisi odit veniam, eius repellat harum explicabo molestiae? Aut, iste quo! Ut possimus minus a commodi libero facere aspernatur eveniet, saepe rem provident, temporibus aliquam magni expedita neque deleniti iste vitae beatae, fugiat similique ab? </p> */}
                    </div>

                    <div class="place-items-center grid grid-rows-1 bg-gray-400 row-span-1 ..."> {/*This creates a grid in between the current grid the container is inside so we can center align it while still being the outter grids child*/}
                        <div class="row-span-1">
                            <button class="m-5 buy-now">Buy Now</button>
                        </div>
                    </div>
                    </div>
                    </div>

                </div>
            </div>
</div>
        </section>

  );
}


export default Welcome;
