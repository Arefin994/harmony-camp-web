import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailLogin = () => {
    const auth = getAuth(app);
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User successfully logged in
        const user = userCredential.user;
        localStorage.setItem('loged-in-as', 'student'); // Set 'loged-in-as' to 'student'
        navigate('/home', { state: { userRole: 'student' } });
      })
      .catch((error) => {
        // Error occurred during login
        setError(error.message);
      });
  };
  
  const handleGoogleLogin = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
  
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        // User successfully logged in with Google
        const user = userCredential.user;
        localStorage.setItem('loged-in-as', 'student'); // Set 'loged-in-as' to 'student'
        navigate('/home', { state: { userRole: 'student' } });
      })
      .catch((error) => {
        // Error occurred during login
        setError(error.message);
      });
  };
  
  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='btn btn-primary' onClick={handleEmailLogin}>Login with Email</button>
      <button className='btn btn-primary' onClick={handleGoogleLogin}>Login with Google</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
