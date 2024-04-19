// //
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { app } from '../firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { loginUser } from '../redux-toolkit/loginUserSlice';

const auth = getAuth(app)
const firestore = getFirestore(app)


function Signin() {
  
  const navigate = useNavigate()
  const dispatch = useDispatch() // for dispatch email 

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // const userSignin = async () => {
  //   const ref = doc(firestore, 'users', 'email')
  //   const snap = await getDoc(ref)
  //   console.log(snap.data())
  // }

  const handleSignin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password).then(resp =>  navigate('/')).catch(err => alert("Invalid Credantial"))
    dispatch(loginUser(email))
    setEmail("")
    setPassword("")
    // userSignin()
  }

  return (

    <MDBContainer fluid className="p-3 my-5 " style={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }} >

      <MDBRow style={{ background: "white", borderRadius: "20px", padding: "20px", boxShadow: " 2px 2px 20px 8px black" }}>

        <MDBCol col='5' md='6'>
          <img style={{ width: "100%" }} src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>



        <MDBCol col='1' md='6' style={{ display: "grid", marginTop: "2rem" }} >


          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={email} onChange={e => setEmail(e.target.value)} />
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={password} onChange={e => setPassword(e.target.value)} />


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <button onClick={(e) => handleSignin(e)} className="mb-4 w-100" size="lg" style={{ background: "black", color: "white" }}>Sign in</button>

          <button onClick={() => navigate('/signup')} className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998', color: "white" }}>
            Continue with Sign up
          </button>

          {/* <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
            <MDBIcon fab icon="twitter" className="mx-2"/>
            Continue with twitter
          </MDBBtn> */}

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Signin;