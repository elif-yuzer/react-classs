
import { useOrtakCarpan } from '../context/StudentProvider'

const StudentList = () => {
  
  const {students,deleteStudent,handleModal}=useOrtakCarpan()
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3'>
      {students.map((a)=>(
        
        <div key={a.id} className='relative bg-amber-100 rounded-2xl shadow-md p-4 hover:scale-105 transition-all'>
        <img className='w-24 h-24 mx-auto rounded-full' src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${a.id}`} alt="" />
          <h2>{a.name}</h2>
          <small className='text-shadow-gray-950 me-5'>{a.branch}</small>
          <span className='inline-flex items-center justify-center '>{Math.floor(a.grade)}</span>
          <span className='inline-flex items-center justify-center '>{a.isCompleted}</span>
          
          <button onClick={()=>deleteStudent(a.id)} className='absolute top-2 right-2 cursor-pointer text-red-500 hover:text-red-700'>Delete</button>
          <button onClick={()=>handleModal(a)} className='absolute top-2 left-2 cursor-pointer text-red-500 hover:text-red-700'>Duzenle</button>
        </div>
      ))}
    </div>

    </>
  )
}

export default StudentList