import { useParams, useNavigate } from "react-router";
import { Link } from "react-router";
import Title from "../../../compnents/Title";

import { appConfig } from "../../../config/appConfig";

import useRequestData from "../../../hooks/useRequestData"
import Loader from "../../../compnents/Loader";
import Error from "../../../compnents/Error";
import { useEffect } from "react"; 

const ViborgHaveservice1Edit = () => {

    const navigate = useNavigate()

    const { id } = useParams() // snup id fra params i url'en

    // GET
     const { makeRequest, isLoading, data, error } = useRequestData()
    // PUT
     const { makeRequest:makeRequestPUT, isLoading:isLoadingPUT, data:dataPUT, error:errorPUT } = useRequestData()

  useEffect(() => {
    
    makeRequest({url: "http://localhost:5023/services/" + id})
    
  }, [])

  const handleSubmit = (e) => {

    e.preventDefault()

    const formdata = new FormData(e.target)

    makeRequestPUT( { url: "http://localhost:5023/services/admin/" + id, method: "PUT", body:formdata } )
    .then( () => navigate("/admin/ViborgHaveservice1AdminDelete") )

  }
  

  return (

    <section>

      <Title>Edit Service</Title>

      { (isLoading || isLoadingPUT) && <Loader/>}
      { (error || errorPUT) && <Error/> }
      
      { data && 
      <form onSubmit= { handleSubmit } className="border-2 w-100 ml-16 p-5 bg-gray-400">

        <div> <p className="text-2xl mb-1">Title</p>
      <label> 
        <input name="title" 
        defaultValue={data.title} 
        className="border ml-1 mb-2 focus:outline-none focus:ring-2 focus:ring-gray-900" type="textarea" 
        placeholder="Title her..."/>
      </label>
      </div>

        <div> <p className="text-2xl mb-1">Content</p>
      <label> 
        <input name="descripttion" 
        defaultValue={data.content} 
        className="border ml-1 mb-2 focus:outline-none focus:ring-2 focus:ring-gray-900" type="textarea" 
        placeholder="Descripttion her..."/>
      </label>
      </div>

        <p className="ml-2 italic">minst 2 tegn</p>


        <div> <p className="text-2xl mb-1">vælg evt. nyt img (overskriver det esksisterende)</p>
      <label>
        <input name="image" 
        className="border ml-1 mb-2 focus:outline-none focus:ring-2 focus:ring-gray-700" type="file"/>
        <br />
        <p>Nuværende img : </p> 
        <img className="border-2" src={"http://localhost:5023/images/" + data.image} 
        alt="nuværende image" />
      </label>
      </div>
      

     <div className="ml-1 mt-2">
      <button className="border bg-gray-500 p-2 cursor-pointer">
            Edit Service
       </button>
    </div>

     </form>
      }

        <p className=" ml-18 mt-3"> Go back <Link className='text-decoration-line: underline text-blue-600' to="/admin/ViborgHaveservice1AdminDelete"> Edit/Delete </Link> </p> 

    </section>

  )
}

export default ViborgHaveservice1Edit