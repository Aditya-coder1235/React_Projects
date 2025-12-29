import React from 'react'

const ResultCard = ({item}) => {
  return (
      <div className="w-[18vw] h-80 bg-white rounded relative">
          <div className="h-full">
              {item.type === "photo" ? (
                  <img
                      className="h-full w-full object-cover object-center"
                      src={item.src}
                      alt=""
                  />
              ) : (
                  ""
              )}
              {item.type === "video" ? (
                  <video
                      className="h-full w-full object-cover object-center"
                      autoPlay
                      muted
                      loop
                      src={item.src}
                  ></video>
              ) : (
                  ""
              )}
              {item.type === "GIF" ? (
                  <img
                      className="h-full w-full object-cover object-center"
                      src={item.src}
                      alt=""
                  />
              ) : (
                  ""
              )}
          </div>

          <div
              id="bottom"
              className="py-10 px-6 w-full text-white absolute bottom-0"
          >
              <h2 className='text-xl font-semibold capitalize'>{item.title}</h2>{" "}
          </div>
      </div>
  );
}

export default ResultCard