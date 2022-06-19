import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss'


const Authentication = () => {


    /* useEffect( () => {
        const googleResult = async()=>{
            const response = await getRedirectResult(auth);
            if (response) {
               const userDocRef = await createUserDocumentFromAuth(response.user)
            }
        }
        googleResult()
        
    }, []) */


    
    return (
        <div className='auth-container'>
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}

export default Authentication