import React, { Fragment, useContext, useEffect } from "react";
import { DashboardContext } from "./";
import { GetAllData } from "./Action";

const DashboardCard = (props) => {
  const { data, dispatch } = useContext(DashboardContext);

  useEffect(() => {
    GetAllData(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {/* Card Start */}
      {/* <div className="m-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="flex flex-col justify-center items-center col-span-1 bg-gray-800 p-6 shadow-md hover:shadow-lg transition-all duration-300 ease-in border-b-4 border-gray-600 hover:border-gray-400 text-gray-100">
          <div className="text-3xl font-semibold">
            {data ? data.totalData.Users : 0}
          </div>
          <div className="text-lg font-medium mt-2">Customers</div>
        </div>
        <div className="flex flex-col justify-center items-center col-span-1 bg-gray-800 p-6 shadow-md hover:shadow-lg transition-all duration-300 ease-in border-b-4 border-gray-600 hover:border-gray-400 text-gray-100">
          <div className="text-3xl font-semibold">
            {data ? data.totalData.Orders : 0}
          </div>
          <div className="text-lg font-medium mt-2">Orders</div>
        </div>
        <div className="flex flex-col justify-center items-center col-span-1 bg-gray-800 p-6 shadow-md hover:shadow-lg transition-all duration-300 ease-in border-b-4 border-gray-600 hover:border-gray-400 text-gray-100">
          <div className="text-3xl font-semibold">
            {data ? data.totalData.Products : 0}
          </div>
          <div className="text-lg font-medium mt-2">Products</div>
        </div>
        <div className="flex flex-col justify-center items-center col-span-1 bg-gray-800 p-6 shadow-md hover:shadow-lg transition-all duration-300 ease-in border-b-4 border-gray-600 hover:border-gray-400 text-gray-100">
          <div className="text-3xl font-semibold">
            {data ? data.totalData.Categories : 0}
          </div>
          <div className="text-lg font-medium mt-2">Categories</div>
        </div>
      </div> */}
      {/* End Card */}
    </Fragment>
  );
};

export default DashboardCard;
