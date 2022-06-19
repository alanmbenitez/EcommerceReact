import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
    /*     signInWithGoogleRedirect */
} from '../../utils/firebase/firebase.utils'

import Button from '../button/button.component'
import FormInput from '../form-input/form-input.componente'
import './sign-in.styles.scss'


const defaultFormFields = {
    email: '',
    password: ''
}


const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)

    const { email, password } = formFields


    //reset inputs
    const resetFormField = () => {
        setFormFields(defaultFormFields)
    }


    //button submit 
    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await signInAuthUserWithEmailAndPassword(email,password)
           console.log(response);
            resetFormField()

        } catch (error) {
            //se puede usar switch
            if (error.code === 'auth/wrong-password') {
                alert('incorrect password')
            } else if (error.code === 'auth/user-not-found') {
                alert('user not exists')
            }else {
                console.error('use creation encounter an error', error);
            }
        }
    }

    //update  state 
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
    }


    return (
        <div className='sign-up-container' >
            <h2>already have an account</h2>
            <span>Sing in with your email</span>
            <form onSubmit={handleSubmit}>

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
            <div className='buttons-container'>
                <Button type='submit'>Sign In</Button>
                <Button type='button' onClick={logGoogleUser} buttonType='google'>Sign in with Google Popfdup</Button>
            </div>
                

            </form>
        </div>
    )
}

export default SignInForm