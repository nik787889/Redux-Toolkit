// //
import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import users from '../redux-toolkit/loginUserSlice';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBRow, MDBCol, MDBCheckbox } from 'mdb-react-ui-kit';
import { app } from '../firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const auth = getAuth(app)
const firestore = getFirestore(app)

function SignUp() {

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleSignup = async (e) => {
        e.preventDefault()
        // dispatch(users(fname))
        createUserWithEmailAndPassword(auth, email, password).then(resp => navigate('/signin'))
        const result = await addDoc(collection(firestore, 'users'), { FirstName: fname, LastName: lname, Email: email, Password: password })
        setFname("")
        setLname("")
        setEmail("")
        setPassword("")
        return result
    }



    return (
        <MDBContainer fluid className='my-5' style={{ width: "100%", display: "flex", justifyContent: "center" }}>

            <MDBRow className='g-0 align-items-center' style={{ width: "80%" }}>
                <MDBCol col='6'>

                    <MDBCard className='my-5 cascading-right' style={{ backgroundColor: 'white', borderRadius: "100px 0 0 100px" }}>
                        <MDBCardBody className='p-5 text-center'>

                            <h2 className="fw-bold mb-5">Sign up now</h2>

                            <MDBRow>
                                <MDBCol col='6'>
                                    <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' value={fname} onChange={e => setFname(e.target.value)} />
                                </MDBCol>

                                <MDBCol col='6'>
                                    <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' value={lname} onChange={e => setLname(e.target.value)} />
                                </MDBCol>
                            </MDBRow>

                            <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' value={email} onChange={e => setEmail(e.target.value)} />
                            <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' value={password} onChange={e => setPassword(e.target.value)} />


                            <button style={{ width: "100%", background: " black", color: "white", padding: "1rem" }} onClick={(e) => handleSignup(e)}>
                                Sign Up
                            </button>
                                

                            <div className="text-center">

                                <p>or sign up with:</p>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='facebook-f' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='twitter' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='google' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='github' size="sm" />
                                </MDBBtn>

                               <br />
                               If you already have an account <Link style={{color:"#00fdff"}} to='/signin'>sign in</Link>

                            </div>

                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol col='6' style={{ borderRadius: "0 100px 100px 0" }}>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="w-100 rounded-4 shadow-4"
                        alt="" fluid style={{ background: "white", height: "36rem" }} />
                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default SignUp;