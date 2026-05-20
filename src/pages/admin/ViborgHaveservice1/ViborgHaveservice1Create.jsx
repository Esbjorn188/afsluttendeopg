import { Link } from "react-router";
import Title from "../../../compnents/Title";

import { appConfig } from "../../../config/appConfig";

import useRequestData from "../../../hooks/useRequestData"
import Loader from "../../../compnents/Loader";
import Error from "../../../compnents/Error";

const ViborgHaveservice1Create = () => {

    // POST
    const { makeRequest, isLoading, data, error } = useRequestData()

    const handleSubmit = ( e ) => {

        e.preventDefault() 

        const formdata = new FormData(e.target)

        makeRequest( { url: "http://localhost:5023/services/admin", method: "POST", body:formdata } )
        .then( () => e.target.reset() )

    }

  return (

    <section>
      <title>{appConfig.companyName + "ViborgHaveservice1Create"}</title>

      <Title>ViborgHaveservice1Create</Title>

      { isLoading && <Loader/>}
      { error && <Error/> }
      { data && <h2 className="text-2xl ml-16 mb-5">En ny Service er oprettet 😎 med ID: {data._id}</h2>}

     <form onSubmit= { handleSubmit } className="border-2 w-100 ml-16 p-5 bg-emerald-700">

        <div> <p className="text-2xl mb-1">Title</p>
      <label> 
        <input name="title" className="border ml-1 mb-2 focus:outline-none focus:ring-2 focus:ring-green-900" type="textarea" placeholder="Title her..."/>
      </label>
      </div>

        <div> <p className="text-2xl mb-1">content</p>
      <label> 
        <input name="content" className="border ml-1 mb-2 focus:outline-none focus:ring-2 focus:ring-green-900" type="textarea" placeholder="content her..."/>
      </label>
      </div>

        <p className="ml-2 italic">minst 2 tegn</p>

        <div> <p className="text-2xl mb-1">Image</p>
      <label>
        <input name="image" className="border ml-1 mb-2 focus:outline-none focus:ring-2 focus:ring-green-900" type="file"/>
      </label>
      </div>
      

     <div className="ml-1 mt-2">
      <button className="border bg-emerald-900 p-2 cursor-pointer">
            Opret Service
       </button>
    </div>

     </form>

        <p className=" ml-18 mt-3"> Go back <Link className='text-decoration-line: underline text-blue-600' to="/admin/ViborgHaveservice1Admin"> ViborgHaveservice1Admin </Link> </p> 
    </section>
  );
};

export default ViborgHaveservice1Create;