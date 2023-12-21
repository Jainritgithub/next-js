'use client'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase';
import fetchGiphyData from '../giphy';
import { onAuthStateChanged } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
// const auth = getAuth(app); 


export default function Home() {
  
  const [user] = useAuthState(auth);

 
  const handleSearch = async () => {
   
    const data = await fetchGiphyData('cats');
    console.log(data); 
  };

  
  return (
    <div>
      
      <h1>{user ? `Hello, ${user.displayName}!` : 'Welcome!'}</h1>
      
      {user ? (
        <button onClick={() => auth.signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())}>
          Sign In with Google
        </button>
      )}

      
      <button onClick={handleSearch}>Search GIPHY</button>
    </div>
  );
}