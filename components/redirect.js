import { useRouter } from 'next/router';

const Redirect = () => {
    const router = useRouter();


    const redirectUser = () => {
        router.push('/')
    }

    return(
        <>
            <button onClick={redirectUser}>
                Go home
            </button>
        </>
    )
}

export default Redirect;