import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    // this is for navbar /*here the border-b-2px is used for bottom border*/
    <div className="max-w-screen-xl mx-auto py-6 flex items-center  justify-between  border-b-[2px]  border-zinc-700">
      <div className="nleft flex items-center">
        <a href="https://www.refokus.com/">
          <img
            src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
            alt=""
          />
        </a>
        <div className="links flex gap-20 ml-16">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-1 h-7 bg-zinc-800"></span>
            ) : (
              <a key={index}
                className="font-regular text-sm flex items-center gap-1"
                href=""
              >
                {index === 1 && (
                  <span
                    /*this is for box shadow*/ style={{
                      boxShadow: "0 0 0.45em #00FF19",
                    }}
                    /*here the inline block is used for small scale work and span tag 
                 also for small scale work like drwing points*/ className="inline-block w-1 h-1 bg-green-500 text-shadow:4px rounded"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
