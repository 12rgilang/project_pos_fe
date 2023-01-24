import { useState, useEffect } from "react";
import axios from "axios";

function Menu() {
  const [data, setData] = useState([]);

  useEffect(() => {
    onGetData();
  }, []);

  let onGetData = async () => {
    try {
      let response = await axios.get(`http://localhost:5000/products`);
      console.log(response.data);
      setData(response.data);
    } catch (error) {}
  };

  return (
    <>
      <div className="justify-center grid grid-cols-4 mt-3">
        {data.length
          ? data.map((value, index) => {
              return (
                <div className="rounded-lg shadow-lg bg-white max-w-sm px-3 my-3 mx-3 h-auto">
                  <a
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      className="rounded-t-lg h-fit w-full"
                      src={value.image}
                      alt="Food"
                    />
                  </a>
                  <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                      {value.name}
                    </h5>
                    <h6 className="text-gray-900 text-xl font-medium mb-2 ">
                        Rp. {value.size[0].price.toLocaleString()}
                    </h6>
                    {/* <p className="text-gray-700 text-base mb-4">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p> */}
                    <div className="btn flex flex-col justify-end items-center ">
                        <button
                        type="button"
                        className=" inline-block px-6 py-2.5 my-bg-secondary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                        Add To Cart
                        </button>
                    </div>
                  </div>
                </div>
              );
            })
          : "Loading.."}
      </div>
    </>
  );
}

export default Menu;
