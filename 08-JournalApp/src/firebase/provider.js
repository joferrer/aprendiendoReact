import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { connectFirestoreEmulator } from 'firebase/firestore/lite';
import { FireBaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async ()=>{

    try{
        const result = await signInWithPopup( FireBaseAuth, googleProvider );

        const credentials = GoogleAuthProvider.credentialFromResult(result);

        const {displayName, email, photoURL, uid } = result.user;
        
        return {
            ok: true,
            //userInfo
            displayName, email, photoURL, uid
        }

    } catch (error){

        const errorCode = error.code;
        const errorMessage= error.message;       

        return {
            ok: false,

            errorCode, errorMessage

        }
    }

}

export const registerUserWithEmailPassword = async ({email,password,displayName})=>{

    try {
        
       const resp = await createUserWithEmailAndPassword(FireBaseAuth,email, password);

       const {uid,photoURL} = resp.user;
       await updateProfile(FireBaseAuth.currentUser, { displayName });

       return {
        ok: true,
        email,
        password,
        uid,
        photoURL
       }

    } catch (error) {
        
        return {
            ok: false,
            errorMessage: error.message
        }
    }

}