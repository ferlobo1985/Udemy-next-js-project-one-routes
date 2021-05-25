import { useRouter } from 'next/router'

const ContactPage = () => {
    const router = useRouter();

    const redirectUser = () => {
        router.push({
            pathname:'/wheels/[id]/[color]/[type]',
            query:{id:1,color:'red',type:'round'}
          })
    }

    return(
        <>
            <h1>contact</h1>
            <button onClick={redirectUser}>
                Go to home
            </button>
        </>
    )
}

export default ContactPage;