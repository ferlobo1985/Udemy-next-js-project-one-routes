import Link from 'next/link';
import Image from 'next/image';

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


      <Image
        src="/images/image_one.jpg"
        layout="responsive"
        alt="Picture about a horse"
        width={6016}
        height={4016}
      />
{/* 
      <img src="/images/image_one.jpg" width="300"/> */}


    </>
  )
}


export default Home; 