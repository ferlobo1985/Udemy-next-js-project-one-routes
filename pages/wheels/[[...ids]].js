import { useRouter } from 'next/router';

const WheelsPage = () => {
    const router =  useRouter();
    console.log(router.query);

    return(
        <>
            <h1>
                Wheels page
            </h1>
        </>
    )
}

export default WheelsPage;