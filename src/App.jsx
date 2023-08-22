import React, { useRef, useState } from "react";
import Nav from "./pages/Nav";
import visa from "/visa.png";

// ---------------
import { Button, Checkbox, Input } from "@material-tailwind/react";
import { FaRegUserCircle } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
import { BsCoin } from "react-icons/bs";
import { coins, paymentMethods } from "./utils/heplers";
import CustomModal from "./components/CustomModal";
import PayModal from "./components/PayModal";
// ---------------

import { MdOutlineDone } from "react-icons/md";
function App() {
  const [name, setName] = useState("");
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [custom, setCustom] = useState(false);
  const [offer, setOffer] = useState(0);
  const [open, setOpen] = useState(false);
  const [payModal, setPayModal] = useState(false);

  return (
    <>
      <div className="page">
        <Nav />
        <div className="container">
          {/* --------------- */}
          <div className="content py-14 px-3 md:px-14">
            <div className="title flex items-center justify-between flex-col md:flex-row">
              <h3 className="text-2xl font-semibold">Get Coins</h3>
              <p className="font-semibold text-gray-800">
                View transaction history
              </p>
            </div>
            <div className="input-userName md:w-96 mt-10 p-10 bg-gray-50 rounded-lg">
              <Input
                onChange={(e) => setName(e.target.value)}
                value={name}
                label="User Name"
                className="max-w-full bg-white"
                icon={<FaRegUserCircle />}
              />
            </div>
            <div className="boxes mt-5">
              <p className="font-semibold flex gap-2 items-center">
                Recharge:{" "}
                <span className="text-red-500">
                  Save up to 31% compared to-in-app purchase
                </span>
                <BiErrorCircle className="text-gray-500 text-lg" />
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-10 mt-5">
                {coins.map((coin, index) => {
                  return (
                    <div
                      onClick={() => {
                        setCustom(null);
                        setSelectedOffer(index);
                      }}
                      key={index}
                      className={`border px-3 py-7 flex flex-col gap-3 items-center justify-center rounded-md cursor-pointer ${
                        selectedOffer === index ? "bg-gray-100" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <BsCoin className="text-yellow-800 text-xl" />
                        <span className="inline-block font-semibold text-md">
                          {coin}
                        </span>
                      </div>

                      <span className="text-sm">
                        $ {Math.fround(coin * 0.010571).toFixed(2)}
                      </span>
                    </div>
                  );
                })}

                <div
                  onClick={() => {
                    setSelectedOffer(null);
                    setCustom(true);
                  }}
                  className={`border px-3 py-7 flex flex-col gap-3 items-center justify-center rounded-md cursor-pointer `}
                >
                  <div className="flex justify-center items-center gap-2">
                    <BsCoin className="text-yellow-800 text-xl" />
                    {custom ? (
                      <Input
                        type="number"
                        min={0}
                        onChange={(e) => setOffer(e.target.value)}
                        variant="standard"
                        containerProps={{
                          className: "min-w-[90px] w-[40%] h-fit",
                        }}
                        className="!py-0"
                        value={offer}
                      />
                    ) : (
                      <span className="inline-block font-semibold text-md">
                        Custom
                      </span>
                    )}
                  </div>

                  <span className="text-sm">
                    ${" "}
                    {custom
                      ? Math.fround(offer * 0.010571).toFixed(2)
                      : "Large amount supported"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 mt-3">
              <p className="text-sm">Payment method</p>
              <div className="flex items-center gap-2">
                {paymentMethods.map((method, index) => (
                  <img
                    key={index}
                    src={method}
                    className="w-[20px] h-[20px] object-contain"
                  />
                ))}
              </div>
            </div>

            <p className="text-sm">
              Total : ${" "}
              {custom
                ? Math.fround(offer * 0.010571).toFixed(2)
                : selectedOffer >= 0
                ? Math.fround(coins[selectedOffer] * 0.010571).toFixed(2)
                : 0}
            </p>
            <Button
              onClick={() => setOpen(true)}
              className="mt-4 !rounded-md"
              color="red"
            >
              Recharge
            </Button>
            <CustomModal open={open} setOpen={setOpen}>
              <div className="flex justify-between py-3 font-semibold text-black border-b">
                <h4>Account</h4>

                <span>{name}</span>
              </div>
              <div className="flex justify-between mt-5">
                <p className="text-gray-700 text-[12px]">Custom Coins</p>

                <p className="text-gray-700 text-[12px]">
                  Large amount supported
                </p>
              </div>
              <div className="flex justify-between mt-1 pb-3 border-b">
                <p className="text-black font-semibold text-[14px]">Total</p>

                <p className="text-black font-semibold text-[14px]">
                  Large amount supported
                </p>
              </div>
              <div className="px-4 py-3 border-b">
                <div className="flex justify-between">
                  <h4 className="text-black font-semibold text-sm">
                    Select a payment method
                  </h4>
                  <span className="text-sm text-red-700 cursor-pointer">
                    Manage
                  </span>
                </div>

                <div className="mt-4">
                  <span className="block text-[12px]">Method</span>
                  <div className="py-2 px-5 flex justify-between border mt-1">
                    <div className="flex items-center gap-2">
                      <img
                        className="w-[20px] h-[20px] object-contain"
                        src={visa}
                        alt=""
                      />
                      <span className=" leading-4">******12</span>
                    </div>

                    <Checkbox
                      checked={true}
                      ripple={false}
                      labelProps={{ className: "!p-2" }}
                      className="h-4 w-4 rounded-full border-blue-900/20 bg-blue-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                    />
                  </div>
                </div>

                <p className="text-[12px] mt-3">
                  Total ${" "}
                  {custom
                    ? Math.fround(offer * 0.010571).toFixed(2)
                    : selectedOffer
                    ? Math.fround(coins[selectedOffer] * 0.010571).toFixed(2)
                    : 0}
                </p>

                <p className="text-[13px] leading-6 mb-3">
                  By clicking 'Pay now'. you agree to{" "}
                  <strong className="font-semibold text-black">
                    Terms of Purchase for Coins
                  </strong>
                  , By using any amount of Coins with in 14 days after clicking
                  'Pay Now'. you achnowledge and confirm that you will no longer
                  be eligible for a refund of this order.
                </p>

                <p className="text-[13px] leading-6">
                  To access your tax rate in accordance with our{" "}
                  <strong className="font-semibold text-black">
                    Privacy Policy
                  </strong>
                  , TikTok detected that your location is{" "}
                  <strong className="font-semibold text-black">
                    Akiachak, Bethel, Alaska, United States
                  </strong>
                  .
                </p>
              </div>

              <Button
                onClick={() => {
                  setOpen(false);
                  setPayModal(true);
                }}
                className="mt-4 !rounded-sm !text-[10px] !px-8"
                color="red"
              >
                Pay now
              </Button>
            </CustomModal>

            <PayModal open={payModal} setOpen={setPayModal}>
              <div className="flex items-center justify-center flex-col gap-1 pt-10">
                <div className="w-[50px] h-[50px] border-2 border-green-500 flex items-center justify-center rounded-full">
                  <MdOutlineDone className="text-green-500 text-xl" />
                </div>

                <p className="text-center leading-4 font-semibold text-black">
                  Payment Completed
                </p>

                <p className="text-[14px] text-center leading-4">{name}</p>
                <p className="text-[14px] text-center leading-4">
                  You recharge {custom ? offer : coins[selectedOffer]} coins.
                  You can use Coins to send virtual Gift
                </p>

                <Button
                  onClick={() => {
                    setName("");
                    setCustom(null);
                    setSelectedOffer(null);
                    setPayModal(false);
                  }}
                  className="mt-4 !rounded-md"
                  color="red"
                >
                  Go Back
                </Button>
              </div>
            </PayModal>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
