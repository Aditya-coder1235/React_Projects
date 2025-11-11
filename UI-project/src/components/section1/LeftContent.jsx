import React from 'react'
import { ArrowUpRight } from "lucide-react";


const LeftContent = () => {
  return (
      <div className="h-full w-1/4">
          <div>
              <h3 className="text-4xl font-bold px-3 py-8">
                  Prospective <br />
                  <span>Customer</span>
                  <br />
                  Segmentation
              </h3>
              <p className="text-1xl px-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                  eius reiciendis dicta similique animi earum. Culpa, natus
                  deleniti.
              </p>
          </div>
          <div className="mt-30">
              <ArrowUpRight />
          </div>
      </div>
  );
}

export default LeftContent
