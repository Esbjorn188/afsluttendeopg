import { useEffect } from "react"
import Loader from "../../../compnents/Loader"
import Error from "../../../compnents/Error"
import Title from "../../../compnents/Title"

import { Link } from 'react-router'

import { AiFillDelete, AiFillEdit} from "react-icons/ai"

import { appConfig } from "../../../config/appConfig"
import useRequestData from "../../../hooks/useRequestData"

const ViborgHaveservice1Put = () => {

    //åbn useRequestData
    // GET
    const { makeRequest, isLoading, data, error } = useRequestData()



    // PATCH
    const { makeRequest:makeRequestPatch, isLoading:isLoadingPatch, data:dataPatch, error:errorPatch } = useRequestData()

    useEffect (() => {
        
        makeRequest({url : "http://localhost:5023/aboutus"})

    }, [dataPatch])


  return (
    
      <section> 
       <title>{appConfig.companyName + "ViborgHaveservice1PutAdmin"}</title>

        <div className="mb-10 pt-5"><Title>ViborgHaveservice1 Admin Put</Title></div>

        {/* loades */}
        {
            (isLoading) && <Loader></Loader>
        }

        {/* der er fejl */}
        {
            (error) && <Error></Error>
        }
        


        {/* der er data */}
        <table className="border-2 ml-10 p-5 bg-gray-400">
            <thead>
                <tr className="bg-gray-600 border-b-2"> 
                    <th className="border-l-2">Title</th>
                    <th className="border-l-2">content</th>
                    <th className="border-l-2">RET</th>
                </tr>
            </thead>

            <tbody>
                
                {
                    
                    data && (<tr>
                            <td className="p-5 border-b-2">{ data.title }</td>
                            <td className="p-5 border-b-2">{ data.content.slice( 0, 30 ) } ...</td>

                            <td className="p-5 border-b-2 border-l-2">
                                <Link to={"/admin/ViborgHaveservice1AdminPutEdit/" + data._id}>
                                <AiFillEdit className="text-green-600 cursor-pointer"/></Link>
                            </td>
                            
                        </tr>   
                    )
                }

            </tbody>
            
        </table>
        

        <p className='ml-16 mt-5'> fra ViborgHaveservice1API</p>

        <p className=" ml-18"> Go back <Link className='text-decoration-line: underline text-blue-600' to="/admin/ViborgHaveservice1Admin"> ViborgHaveservice1Admin </Link> </p> 
    </section>

  )
}

export default ViborgHaveservice1Put