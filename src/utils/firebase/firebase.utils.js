import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
 } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDknWRc-m0T3CnedRkjMbEDjoAnepyGyLI",
    authDomain: "ecommercereact-6e71d.firebaseapp.com",
    projectId: "ecommercereact-6e71d",
    storageBucket: "ecommercereact-6e71d.appspot.com",
    messagingSenderId: "1085274151057",
    appId: "1:1085274151057:web:a49e699f2575df7aca4730"
};


const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account",
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)


export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInformation= {}) =>{
    const userDocRef = doc(db,'users', userAuth.uid );
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async ( email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password)
}

export const signInAuthUserWithEmailAndPassword = async ( email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password)
}