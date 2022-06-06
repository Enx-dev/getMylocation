import React, { useState, useRef, useEffect } from "react";
import BGImg from "../../images/pattern-bg.png";
import "./index.d";
import Arrow from "../../images/icon-arrow.svg";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

type Props = {
  setIp: React.Dispatch<React.SetStateAction<string>>;
  data: {
    ip: string;
    isp: string;
    location: {
      city: string;
      country: string;
      timezone: string;
    };
  };
  isFetching: boolean;
};

const Header = ({ setIp, data, isFetching }: Props) => {
  const ipRef = useRef<HTMLInputElement>();
  function setIpAdd() {
    if (ipRef.current) {
      setIp(ipRef?.current?.value);
    }
  }

  const overide = css`
    border-color: purple;
  `;
  return (
    <section className='grid above h-80 relative ' id='Header'>
      <img
        className='col-start-1 h-full col-end-2 row-start-1 row-end-2'
        src={BGImg}
        alt=''
      />
      <div className='col-start-1 h-full py-12 w-full px-9 flex flex-col items-center  space-y-8 place-self-center col-end-2 row-start-1 row-end-2'>
        <h1 className='text-2xl md:text-3xl text-white font-semibold font-sans'>
          {" "}
          IP Address Tracker
        </h1>
        <div className='flex justify-center w-full'>
          <input
            ref={ipRef}
            className='h-12 w-full outline-none text-xl max-w-lg  rounded-l-lg border-0'
            type='text'
            placeholder='  Search for any IP address or domain'
          />
          <button
            onClick={() => setIpAdd()}
            className='w-12 rounded-r-lg flex items-center justify-center h-12 bg-black'>
            <img src={Arrow} alt='arrow' />
          </button>
        </div>
      </div>
      <div
        className='
       col-start-1 lg:flex-row
       lg:gap-8
       lg:items-center
       lg:justify-evenly
       lg:-bottom-20
       lg:space-y-0 
       flex flex-col place-items-center place-content-center text-center z-50 space-y-2 col-end-1 row-start-1 row-end-1 py-10 w-4/5 -bottom-40 shadow-lg rounded-lg place-self-center bg-white absolute'>
        <div
          className='
        lg:border-r-2
        lg:w-full
        '>
          <h1 className='text-sm font-semibold text-gray-600'> IP Address</h1>
          {isFetching ? (
            <ClipLoader css={overide} />
          ) : (
            <h2 className='text-xl font-semibold '>{data.ip}</h2>
          )}
        </div>
        <div
          className='
        lg:border-r-2
        lg:w-full
        '>
          <h1 className='text-sm font-semibold text-gray-600'> Location</h1>
          {isFetching ? (
            <ClipLoader css={overide} />
          ) : (
            <h2 className='text-xl font-semibold '>
              {data.location.city},{data.location.country}
            </h2>
          )}
        </div>
        <hr />
        <div
          className='
        lg:border-r-2
        lg:w-full
        '>
          <h1 className='text-sm font-semibold text-gray-600'>Timezone</h1>
          {isFetching ? (
            <ClipLoader css={overide} />
          ) : (
            <h2 className='text-xl font-semibold '>
              UTC{data.location.timezone}
            </h2>
          )}
        </div>
        <hr />
        <div
          className='
       
        lg:w-full
        '>
          <h1 className='text-sm font-semibold text-gray-600'>ISP</h1>
          {isFetching ? (
            <ClipLoader css={overide} />
          ) : (
            <h2 className='text-xl font-semibold '>{data.isp}</h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
