
import './App.css'
 import Granpa from './components/GrandPa/Granpa'
import ReusuableForm from './components/ReusableForm/ReusuableForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  const handleSignupSubmit = (data) => {
  console.log("sign up data",data)
}
  const handleUpdateProfile = (data) => {
    console.log("update profile data",data)
}

  return (
    <>
    <h1>form master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
    {/* <RefForm></RefForm> */}
    <ReusuableForm 
    formTitle={'Sign Up'}
    handleSubmit={handleSignupSubmit}>
   <div>
    <h2>sign up</h2>
    <p>sign up here</p>
   </div>
    </ReusuableForm>
    <ReusuableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText={'Update'}>
      <div>
        <h2>update profile</h2>
        <p>always keep your profile updated</p>
      </div>
    </ReusuableForm>
    <Granpa></Granpa>
    </>

  )
}

export default App
