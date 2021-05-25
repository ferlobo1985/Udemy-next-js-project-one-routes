import { useRouter } from 'next/router';


const UsersByIdPage = () =>{
    const router = useRouter();
    //console.log(router.query);

    return(
        <>
            <h1>The user ID is: {router.query.id}</h1>
        </>
    )
}

export default UsersByIdPage;