import woman from "../assets/woman.jpg";
import tron from "../assets/devpost.svg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center px-20 gap-5 justify-between py-10">
        <div className="md:w-1/2">
          <h1 className="font-medium break-word  text-3xl text-white">
            DECENTRALISED PAYMENT SYSTEM THAT ALLOWS CRYPTO HOLDERS TO DISBURSE
            THIER ASSETS TO THEIR LOVED ONE'S
          </h1>
          <p className="mt-5 text-white text-md break md:text-xl">
            Decide your crypto assets shares !{" "}
            <span role="img" aria-label="bird">
              🚀
            </span>
          </p>
          <Link
            to="./GetStarted"
            className="inline-block text-white mt-3 bg-green-600 px-5 py-2 rounded"
          >
            Get started
          </Link>
        </div>
        <img className="md:w-1/2 flex" src={woman} alt=""></img>
      </div>

      <div className="flex max-w-[100%] h-[100px] justify-around py-3 px-5 bg-slate-200  ">
        <img
          alt=""
          className="flex block"
          src="https://cryptologos.cc/logos/filecoin-fil-logo.png?v=023"
        ></img>
        <img
          className="block"
          alt=""
          src="https://cryptologos.cc/logos/chainlink-link-logo.png?v=023"
        ></img>
        <img className="block" alt="" src={tron} width={"150px"}></img>
      </div>
      <div className="mt-10 px-10 justify-between gap-3 flex flex-col md:flex-row ">
        <div className="flex items-center gap-2 text-white flex-col md:flex-row">
          <div className="text-[10rem]  font-bold">01</div>
          <div>
            <div>Add Next of kin</div>
            <p>Decide who to add as a beneficiary to your crypto account</p>
          </div>
        </div>
        <div className="flex items-center gap-2  text-white flex-col md:flex-row">
          <div className="text-[10rem] font-bold">02</div>
          <div>
            <div>Funds Disbursement</div>
            <p>Decide the percentage to give out to each beneficiaries added</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
