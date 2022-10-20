import React from 'react'
import NavBar from '../components/Home/navBar';
import Router, { useRouter } from 'next/router';


 const souvenirs = () => {
  const router = useRouter();
  return (
  <>
  <NavBar icon={"back"} handleBack={() => router.replace("/")}/>
  </>
  )
}

export default souvenirs;