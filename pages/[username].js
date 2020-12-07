import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css'

const User = () => {
  const router = useRouter()
  const { username } = router.query
  return (
    <div className='ml-2'>
      <h1 className='text-primary'>{username}'s Media List</h1>
    </div>
)}

export default User