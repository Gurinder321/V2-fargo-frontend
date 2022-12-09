import React , { useState , useEffect } from 'react'
import Sidebar from '../../../admin/components/sidebar/Sidebar'
import Header from '../../components/header/Header'
import { FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [ users , setUsers ] = useState([]);
  useEffect(() =>{
    const getUsers =  async () =>{
      let token = localStorage.getItem('auth_admin');
      if(!token) return console.log(`You are not authorized for this`);
      await axios.get(`/admin/users` , {
        headers:{
          Authorization:`Bearer ${token}`,
        }
      })
      .then( response =>{
        console.log(response);
        setUsers(response.data.users);
      })
      .catch((error) =>{
        console.log(error , "from fetching all users");
      })
    }
    getUsers();
  } ,[]);
  // user not logged in as admin
  let tkn = localStorage.getItem('auth_admin');

  if(!tkn) return <h1>You are not logged in <br/>
    <Link
    to={"/admin/login"}
    >Go To Login</Link>

  </h1>
  return (
    <>
 <div className='flex justify-start relative'>

   <Sidebar className="absolute" />
   <div  className='w-full'>

    <Header />

<div className='m-10 '>
<h3 className='text-2xl font-medium pb-3 border-b-2'>Administration</h3>
<div className='lg:flex lg:justify-start lg:items-start  '>
  {/* Overall Users */}
  <div className='mt-3 border p-3 w-full lg:mr-5'>
    <div className='mb-3'>
    <h6 className='text-xl'>
    Overall stats
    </h6>
    <p className='text-sm'>Summary statistics of your project</p> 
    </div>

<div className='mb-4'>
  <div className='flex justify-between items-center border-b-4 border-[#f200ff]'>
    <FiUsers />
  <div className='text-right'>
    <p>{users && users.length}</p>
    <p className='text-sm  pb-4'>Total Users</p>
    </div>
  </div>
</div>
<div className='mb-4'>
  <div className='flex justify-between items-center border-b-4 border-[#f200ff]'>
    <FiUsers />
  <div className='text-right'>
    <p>234</p>
    <p className='text-sm pb-4'>Total Tickets</p>
    </div>
  </div>
</div>
<div className='mb-4'>
  <div className='flex justify-between items-center border-b-4 border-[#f200ff]'>
    <FiUsers />
  <div className='text-right'>
    <p>234</p>
    <p className='text-sm pb-4'>Total Verifications</p>
    </div>
  </div>
</div>
    </div>
    <div className='border mt-3 w-full'>
    <div className='flex justify-between p-3'>
    <h4 className='text-xl p-1 '>Requires action</h4>
    <nav>
      <Link className='p-3 hover:bg-[#666] hover:text-white'>Tickets</Link>
      <Link className='p-3 ml-2 hover:bg-[#666] hover:text-white'>Verifications</Link>
 </nav> 
    </div>
    
<div className="overflow-x-auto relative">
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="py-3 px-6">
          Product name
        </th>
        <th scope="col" className="py-3 px-6">
          Color
        </th>
        <th scope="col" className="py-3 px-6">
          Category
        </th>
        <th scope="col" className="py-3 px-6">
          Price
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Apple MacBook Pro 17"
        </th>
        <td className="py-4 px-6">
          Sliver
        </td>
        <td className="py-4 px-6">
          Laptop
        </td>
        <td className="py-4 px-6">
          $2999
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Microsoft Surface Pro
        </th>
        <td className="py-4 px-6">
          White
        </td>
        <td className="py-4 px-6">
          Laptop PC
        </td>
        <td className="py-4 px-6">
          $1999
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Magic Mouse 2
        </th>
        <td className="py-4 px-6">
          Black
        </td>
        <td className="py-4 px-6">
          Accessories
        </td>
        <td className="py-4 px-6">
          $99
        </td>
      </tr>
    </tbody>
  </table>
</div>


    </div>
</div>
</div>
 </div>
   </div>


    </>
  )
}

export default Dashboard