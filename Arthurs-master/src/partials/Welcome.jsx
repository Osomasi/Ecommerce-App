import React, { useState } from "react";
import product1 from "../partials/Images/product1.jpg";
import ImageSlider from "./Imageslider";

// see !!!!! line :D

/* if you wish, you can write modal as real component at external file like
    function Modal() {
        const [state, setState] = useState(false);

        return (
            jsx like divs 
            <button onClick={() => setShow(true)}>          
        )
    }
*/

/**
 *
 * @param {props: {}} props
 * @returns JSX.Element
 */
export const Modal = (props) => {
  //  modal state
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <button className="m-3 buy-now" onClick={handleShowModal}>
        Cart
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Cart</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Items have been added to Cart!
                  </p>
                </div>
                {/*footer for Modal*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    // you can edit this as shown above !
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

//Counter Function here
export const Counter = () =>{
  
  const [count, setCount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const addToCartButton = document.querySelector("addtocartbtn");
    addToCartButton.onClick = alert(`You have added ${count} Items to the Cart!`)
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label className="m-0">Qty:
        <input 
          type="text" 
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
      </label>
    </form>
    </div>
  )
};
//Counter Function End
function Welcome() {
  return (
    <section class="w-full px-6 pb-12 antialiased bg-white">
      <div class="mx-auto max-w-7xl bg-blue-500">
        <div class="container max-w-lg px-3 py-32 mx-auto mt-px text-left md:max-w-none md:text-center bg-black">
          <div class="grid grid-rows-3 lg:grid-rows-2 md:grid-rows-2 grid-flow-col gap-4 bg-white">
            <div class=" name1 grid grid-rows-1 min-w-fit place-items-center row-span-1 bg-green-200 lg:row-span-1 md:row-span-1 ...">
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
                <div class="bg-orange-200 row-span-1 text-left pl-4 ...">Fall Limited Edition Sneakers</div>

                <div class="bg-red-200 grid grid-cols-2 gap-1 row-span-1 ...">
                  <div class="bg-red-200 col-span-1 ...">20 USD</div>
                  <div class="bg-red-200 col-span-1 ...">In Stock</div>
                </div>

                <div class="bg-gray-400 grid grid-cols-2 gap-1 row-span-1 ...">
                   <div class="p-[50px]" >
                   <Counter/>
                   </div> 
                  {/* <button class=" m-3 buy-now">Counter</button>  */}
                  <button className=" addtocartbtn m-3 buy-now"> Add to Cart</button>
                </div>
                <div class="bg-pink-400 row-span-1 text-left pl-4 ...">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</div>

                <div class="bg-purple-400 row-span-1 ...">
                  {/* <p class="p-8"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum saepe amet alias quo magnam sapiente, nisi odit veniam, eius repellat harum explicabo molestiae? Aut, iste quo! Ut possimus minus a commodi libero facere aspernatur eveniet, saepe rem provident, temporibus aliquam magni expedita neque deleniti iste vitae beatae, fugiat similique ab? </p> */}
                </div>

                <div class="place-items-center grid grid-rows-1 bg-gray-400 row-span-1 ...">
                  {" "}
                  {/*This creates a grid in between the current grid the container is inside so we can center align it while still being the outter grids child*/}
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
