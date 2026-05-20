import { Link } from 'react-router'
import Title from '../../../compnents/Title'

import { appConfig } from '../../../config/appConfig'

const ViborgHaveservice1Admin = () => {
  return (
    <div>

<title>{appConfig.companyName + "ViborgHaveservice1Admin"}</title>

      <Title>ViborgHaveservice1Admin</Title> 

     <p className='text-decoration-line: underline text-blue-600 ml-16 mt-3 text-2xl'> <Link to="/admin/ViborgHaveservice1AdminDelete"> ViborgHaveservice1EditDelete </Link> </p> 

     <p className='text-decoration-line: underline text-blue-600 ml-16 mt-3 text-2xl'> <Link to="/admin/ViborgHaveservice1AdminCreate"> ViborgHaveservice1Create </Link> </p> 

     <p className='text-decoration-line: underline text-blue-600 ml-16 mt-3 text-2xl'> <Link to="/admin/ViborgHaveservice1AdminPut"> ViborgHaveservice1Put </Link> </p> 

    </div>
    
  )
}

export default ViborgHaveservice1Admin