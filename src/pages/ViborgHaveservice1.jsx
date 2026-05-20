import { useEffect } from "react";
import Loader from "../compnents/Loader";
import Error from "../compnents/Error";
import Title from "../compnents/Title";

import { appConfig } from "../config/appConfig";

//hook til akald api
import useRequestData from "../hooks/useRequestData";

const ViborgHaveservice1 = () => {
  //åbn useRequestData
  const { 
    makeRequest, 
    isLoading, 
    data, 
    error 
  } = useRequestData();

  const {
    makeRequest: makeRequestService,
    isLoading: isLoadingService,
    data: dataService,
    error: errorService,
  } = useRequestData();

  useEffect(() => {
    makeRequest({ url: "http://localhost:5023/aboutus" });
  }, []);

  useEffect(() => {
    makeRequestService({ url: "http://localhost:5023/services" });
  }, []);

  return (
    <section className="mb-5">
      <title>{appConfig.companyName + "Viborg Haveservice"}</title>

      {/* loades */}
      {isLoading && <Loader></Loader>}

      {/* der er fejl */}
      {error && <Error></Error>}

      {/* der er data */}
      {
        <div className="ml-14 mt-5 bg-gray-300 w-450 h-150 p-5 rounded-2xl flex">
          {data && (
            <div className="">
              <h2 className="w-100 text-4xl font-bold">{data.title} </h2>
              <p className="text-green-800 text-3xl mb-5">____________</p>
              <div
                className="w-150 mb-5"
                dangerouslySetInnerHTML={{ __html: data.content }}
              ></div>
              <div>
                <button className="bg-lime-600 p-4 rounded-2xl text-white cursor-pointer">
                  SE ALLE YDELSER
                </button>
              </div>
            </div>
          )}

          <div className="flex justify-evenly w-300">
            {dataService &&
              dataService
              .sort(() => 0.5 - Math.random())
              .slice(0, 2)
              .map((s) => (
                <div className="w-100" key={s.id} s={s}>
                  <img
                    className="w-100 h-100"
                    src={"http://localhost:5023/images/" + s.image}
                    alt="image"
                  />
                  <h2 className="mt-2 text-3xl mb-2 font-bold">{s.title}</h2>
                  <p>{s.content}</p>
                </div>
                
              ))}
          </div>
        </div>
      }

      <p className="ml-16"> fra ViborgHaveserviceAPI</p>
    </section>
  );
};

export default ViborgHaveservice1;
