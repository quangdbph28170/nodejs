import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
interface category {
    _id:string,
    name: string,
    createdAt: string,
    updatedAt: string
  }
interface IProps {
    categories: category[],
    onRemove: (id: string) => void
}

const AdminCategory = (props:IProps) => {
    
    const [data, setData] = useState<category[]>([])
    useEffect(() => {
        setData(props.categories)
        
      }, [props])
      
      const navigate = useNavigate();
      const onNavigate = (id:string) => {
        navigate(`/admin/category/${id}/update`)
      }
      return(
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-[1200px]">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Create At</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Update At</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                <a href="/admin/category/add">Thêm danh mục</a>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
  
            {data.map(item => {
              
              return (
                <tr key={item._id} className="hover:bg-gray-50">
                  <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                    <div className="relative h-10 ">
                      <div className="font-medium text-gray-700">{item.name}</div>  
                    </div>
  
                  </th>
        
                  <td className="px-6 py-4">
                    
                  <span>
                        {item.createdAt}
                      </span></td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <span>
                        {item.updatedAt}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <span
                        className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600"
                      >
                        <button onClick={() => props.onRemove(item._id)}>Delete</button>
                      </span>
                      <span
                        className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                      >
                        <button onClick={() => onNavigate(item._id)}>Update</button>
                      </span>
                    </div>
                  </td>
  
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      )
}
export default AdminCategory