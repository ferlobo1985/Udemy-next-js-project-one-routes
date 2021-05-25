import Link from 'next/link';


const Home = () => {
  return (
    <>
      <h1>Honey i am home</h1>
      <ul>
        <li>
          {/* <a href="/users">User</a> */}
          <Link href="/users/1">
            <a className="styleLink">Users</a>
          </Link>
        </li>
        <li>
          {/* <a href="/users">User</a> */}
          <Link href={{
            pathname:'/wheels/[id]/[color]/[type]',
            query:{id:1,color:'red',type:'round'}
          }}>Go to wheels</Link>
        </li>
      </ul>
    </>
  )
}


export default Home; 