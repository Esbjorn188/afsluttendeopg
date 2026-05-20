import { useParams, useNavigate } from "react-router";
import { Link } from "react-router";
import Title from "../../../compnents/Title";

import { appConfig } from "../../../config/appConfig";

import useRequestData from "../../../hooks/useRequestData"
import Loader from "../../../compnents/Loader";
import Error from "../../../compnents/Error";
import { useEffect } from "react"; 

const ViborgHaveservice1PutEdit = () => {

    const navigate = useNavigate()

    const { id } = useParams() // snup id fra params i url'en

    // GET
     const { makeRequest, isLoading, data, error } = useRequestData()
    // PUT
     const { makeRequest:makeRequestPUT, isLoading:isLoadingPUT, data:dataPUT, error:errorPUT } = useRequestData()

  useEffect(() => {
    
    makeRequest({url: "http://localhost:5023/aboutus/"})
    
  }, [])

  const handleSubmit = (e) => {

    e.preventDefault()

    const formdata = new FormData(e.target)

    makeRequestPUT( { url: "http://localhost:5023/aboutus/admin/", method: "PUT", body:formdata } )
    .then( () => navigate("/admin/ViborgHaveservice1AdminPut") )

  }
  

  return (

    <section>

      <Title>Edit About Us</Title>

      { (isLoading || isLoadingPUT) && <Loader/>}
      { (error || errorPUT) && <Error/> }
      
      { data && 
      <form onSubmit= { handleSubmit } className="border-2 w-100 ml-16 p-5 bg-gray-400">

        <div> <p className="text-2xl mb-1">Title</p>
      <label> 
        <input 
        name="title"
        defaultValue={data.title} 
        className="border ml-1 mb-2 p-3 focus:outline-none focus:ring-2 focus:ring-gray-900 w-70" 
        type="textarea"/>
      </label>
      </div>

        <div> <p className="text-2xl mb-1">Content</p>
      <label>
    <textarea
      name="Content"
      defaultValue={data.content}
      placeholder="Content here..."
      className="border ml-1 mb-2 p-5 focus:outline-none focus:ring-2 focus:ring-gray-900 h-100 w-70 resize-none"
    />
  </label>
      </div>

        <p className="ml-2 italic">minst 2 tegn</p>
      

     <div className="ml-1 mt-2">
      <button className="border bg-gray-500 p-2 cursor-pointer">
            Edit Service
       </button>
    </div>

     </form>
      }

        <p className=" ml-18 mt-3"> Go back <Link className='text-decoration-line: underline text-blue-600' to="/admin/ViborgHaveservice1AdminPut"> ViborgHaveservice1AdminPut </Link> </p> 

    </section>

  )
}

export default ViborgHaveservice1PutEdit