import { FaCheckDouble, FaRegKeyboard } from "react-icons/fa";

import {
  IoCart,
  BiSearch,
  BsTrash3,
  SlDoc,
  AiTwotoneStar,
  AiOutlineStar,
  RiArrowDropDownLine,
} from "react-icons/all";
function App() {
  return (
    <div className="mx-auto container px-6">
      {/* navbar */}
      <nav className="flex justify-between text-xl py-4">
        <div className="flex gap-2 items-center">
          <div className=" text-green-400">
            <FaCheckDouble />
          </div>
          <div>Job Passcard</div>
        </div>
        <div className=" space-x-6">
          <span>About Us</span>
          <span>Passcard</span>
          <span>Profile</span>
        </div>
        <div className=" space-x-4 flex items-center">
          <span>
            <BiSearch />
          </span>
          <span>
            <IoCart />
          </span>
          <span>Login</span>
          <span>|</span>
          <span>Sign up</span>
        </div>
      </nav>

      <span className="py-10 text-6xl">My cart</span>

      {/* main container */}
      <div className="flex justify-center gap-10">
        {/* left container */}
        <div className="w-1/2 h-full">
          {/* top container */}
          <div className="flex mb-2 items-center rounded-lg h-full border-2 gap-5 shadow-xl p-4">
            <div className="flex border-2 p-2 rounded-full">
              <BsTrash3 size={30} />
            </div>

            <div className="flex w-[250px] px-2 py-16 flex-col border-2 bg-gradient-to-r text-white text-xl font-bold space-y-6 from-[#E4A481] to-[#E7DE93] rounded-lg">
              <span>
                <SlDoc />
              </span>
              <span>Google Docs</span>
              <span>Used for business</span>
            </div>

            <div className="flex px-4 text-xl space-y-6 justify-center flex-col">
              <span>Google Docs</span>
              <div className="flex gap-2">
                <div className="flex items-center">
                  <AiTwotoneStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
                <div className=" border-2 px-3 rounded-lg flex items-center">
                  <span>LV 1-3</span>
                  <RiArrowDropDownLine />
                </div>
              </div>
              <span className="pt-20">THB 150</span>
            </div>
          </div>
          {/* bottom container */}
          <div className="flex mb-2 items-center rounded-lg h-full border-2 gap-5 shadow-xl p-4">
            <div className="flex border-2 p-2 rounded-full">
              <BsTrash3 size={30} />
            </div>

            <div className="flex w-[250px] px-2 py-16 flex-col border-2 bg-gradient-to-r text-white text-xl font-bold space-y-6 from-[#E4A481] to-[#E7DE93] rounded-lg">
              <span>
                <SlDoc />
              </span>
              <span>Google Docs</span>
              <span>Used for business</span>
            </div>

            <div className="flex px-4 text-xl space-y-6 justify-center flex-col">
              <span>Google Docs</span>
              <div className="flex gap-2">
                <div className="flex items-center">
                  <AiTwotoneStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
                <div className=" border-2 px-3 rounded-lg flex items-center">
                  <span>LV 1-3</span>
                  <RiArrowDropDownLine />
                </div>
              </div>
              <span className="pt-20">THB 150</span>
            </div>
          </div>
        </div>

        {/* right container */}
        <div className="border-2 space-y-8 rounded-lg p-4  h-fit w-1/2">
          <span className="text-2xl font-bold">Order Info</span>
          <div className="flex justify-between font-bold text-xl">
            <span>Subtotal</span>
            <span className="font-bold text-xl">THB 300</span>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center">
              <FaRegKeyboard size={30} />
            </div>
            <input
              type="text"
              placeholder="Promotion code"
              className=" border-2 rounded-lg px-2 py-2 w-full"
            />
            <button className="w-1/3 border-2 border-green-400 text-green-400 rounded-lg">
              APPLY
            </button>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <span className="font-bold text-xl">Total payment</span>
            <span className=" text-[#55F1B0] text-5xl font-bold">THB 300</span>
          </div>
          <button className=" bg-[#55F1B0] py-2 w-full rounded-lg">
            LOGIN TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
