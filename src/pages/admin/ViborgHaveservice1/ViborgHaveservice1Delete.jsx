import { useEffect } from "react"
import Loader from "../../../compnents/Loader"
import Error from "../../../compnents/Error"
import Title from "../../../compnents/Title"

import { Link } from 'react-router'

import { AiFillDelete, AiFillEdit} from "react-icons/ai"

import { appConfig } from "../../../config/appConfig"
import useRequestData from "../../../hooks/useRequestData"

const ViborgHaveservice1Delete = () => {

    //åbn useRequestData
    // GET
    const { makeRequest, isLoading, data, error } = useRequestData()

    // DELETE
    const { makeRequest:makeRequestDelete, isLoading:isLoadingDelete, data:dataDelete, error:errorDelete } = useRequestData()

    // PATCH
    const { makeRequest:makeRequestPatch, isLoading:isLoadingPatch, data:dataPatch, error:errorPatch } = useRequestData()

    useEffect (() => {
        
        makeRequest({url : "http://localhost:5023/services"})

    }, [dataDelete, dataPatch])

    // SLET - overvej at lave en selvstændig (eller child) component til dette 
    const handleDelete = (sId, sTitle) => {

        // alert(zzzId)

        if ( window.confirm("Er du sikker på at du ville slette: " + sTitle)) {

            makeRequestDelete( { url: "http://localhost:5023/services/admin/" + sId, method: "DELETE" } )
        }

        //kald delete method i API

    }



  return (
    
      <section> 
       <title>{appConfig.companyName + "ViborgHaveservice1Delete"}</title>

        <div className="mb-10 pt-5"><Title>ViborgHaveservice1 Edit/Delete</Title></div>

        {/* loades */}
        {
            (isLoading || isLoadingDelete) && <Loader></Loader>
        }

        {/* der er fejl */}
        {
            (error || errorDelete) && <Error></Error>
        }
        


        {/* der er data */}
        <table className="border-2 ml-10 p-5 bg-gray-400">
            <thead>
                <tr className="bg-gray-600 border-b-2"> 
                    <th className="border-l-2">IMG</th>
                    <th className="border-l-2">ID</th>
                    <th className="border-l-2">Title</th>
                    <th className="border-l-2">Beskrivelse</th>
                    <th className="border-l-2">RET</th>
                    <th className="border-l-2">SLET</th>
                </tr>
            </thead>

            <tbody>
                
                {
                    
                    data && data.map((s) =>
                        <tr key={ s._id } className="even:bg-gray-500">
                            <td className="p-5 border-b-2"><img className="w-10 h-10 border" src={"http://localhost:5023/images/" + s.image} alt={"Foto: " + s.title} /></td>
                            <td className="p-5 border-b-2">{ s._id }</td>
                            <td className="p-5 border-b-2">{ s.title }</td>
                            <td className="p-5 border-b-2">{ s.content.slice( 0, 30 ) } ...</td>

                            <td className="p-5 border-b-2 border-l-2">
                                <Link to={"/admin/ViborgHaveservice1AdminEdit/" + s._id}>
                                <AiFillEdit className="text-green-600 cursor-pointer"/></Link>
                            </td>

                            <td className="p-5 border-b-2 border-l-2">
                                <AiFillDelete onClick={ () => handleDelete( s._id, s.title ) } className="text-red-600 cursor-pointer"/>
                            </td>
                        </tr>   
                    )
                }

            </tbody>
            
        </table>
        

        <p className='ml-16 mt-5'> fra ViborgHaveservice1</p>

        <p className=" ml-18"> Go back <Link className='text-decoration-line: underline text-blue-600' to="/admin/ViborgHaveservice1Admin"> ViborgHaveservice1Admin </Link> </p> 
    </section>

  )
}

export default ViborgHaveservice1Delete