import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ShimmerEffect from "./ShimmerEffect";
import axios from "axios";
const Images = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.jsonbin.io/v3/b/67f224058561e97a50f98e47",
          {
            headers: {
              "Content-Type": "application/json",
              "X-Master-Key":
                "$2a$10$5wJahouHL9KEgb/2wIQKR.19Ou3RBuZcmoPARWNj03Nhzj76HV6dq",
            },
          }
        );

        setData(response.data.record);
      } catch (error) {
        console.error("Axios Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {data.length == 0 ? (
        <ShimmerEffect />
      ) : (
        <div className="max-w-[1420px] min-h-[500px] my-[100px] p-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`w-full rounded-2xl overflow-hidden ${
                index === 0 || index === 4 || index === 5 || index === 7
                  ? "lg:row-span-2 h-auto lg:h-full"
                  : "h-auto lg:h-[440px]"
              }`}
            >
              <LazyLoadImage
                src={item.url}
                effect="blur"
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x200?text=Image+Not+Found";
                }}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default React.memo(Images);
