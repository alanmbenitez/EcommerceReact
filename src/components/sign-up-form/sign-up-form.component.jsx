import React, { useContext } from 'react'
import { useState } from 'react'
import { UserContext } from '../../contexts/user.context'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import Button from '../button/button.component'
import FormInput from '../form-input/form-input.componente'
import './sign-up.styles.scss'


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)

    const { displayName, email, password, confirmPassword } = formFields
/* 
    const {setCurrentUser} = useContext(UserContext) */

    

    //reset inputs
    const resetFormField = () => {
        setFormFields(defaultFormFields)
    }


    //button submit 
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }
        try {
            //register new user
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
           /*  setCurrentUser(user) */
            // save firebase store
            await createUserDocumentFromAuth(user, { displayName })
            resetFormField()

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('cannot create user, email already in use')
            } else {
                console.error('use creation encounter an error', error);
            }
        }
    }

    //update  state 
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }



    return (
        <div className='sign-up-container' >
            <h2>Don't have an account?</h2>
            <span>Sing up with your email</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label='Name'
                    type='text'
                    id='name'
                    required
                    onChange={handleChange}
                    name='displayName'
                    value={displayName}
                />

                <FormInput
                    label='Email'
                    type='email'
                    id='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />

                <FormInput
                    label='Password'
                    type='password'
                    id='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />

                <FormInput
                    label='Confirm Password'
                    type='password'
                    id='confirm-password'
                    required
                    onChange={handleChange}
                    name='confirmPassword'
                    value={confirmPassword}
                />
                    <Button type='submit' children={'Create Account'}  />
               
            </form>
        </div>
    )
}

export default SignUpForm