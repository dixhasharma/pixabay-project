import React, { useEffect, useState } from 'react'

function Section({heading = "", description = "",showDescription,setShowDescription = ()=>{} }){
  console.log(showDescription,"showDesciortpion")
  function handleDescription(){
    setShowDescription()
  }
  return(
    <div className='section'>
      <h3>{heading}</h3>
      <button onClick={handleDescription}>{showDescription ? "Hide" : "Show"}</button>

      {showDescription && <p>{description}</p>}
    </div>
  )
}

const Home = () => {
  const[isVisible, setIsVisible] = useState({
    info:true,
    about:false,
    timepass:false
  })

  isVisible = {}

  useEffect(()=>{
    console.log(isVisible,"isVisible")
  },[isVisible])

  function handleDescription(key){
    setIsVisible((prev)=> {
      return {...prev,[key]:!prev[key]}
      // console.log(prev,isVisible,"prev")
    })
  }
  return (
    <div>
      <Section heading = {"This is my info "} description = {"This is the desciptifdgdfgdfjljdfkgjkldfgkldfgjfdlkdfjgjdfldkon" } showDescription={isVisible.info} setShowDescription={()=>{
        handleDescription("info")
      }}/>
      <Section heading = {"About Us "} description = {"This is the about us sectiosjdfjdsklfjdsklfkldsjfkldsfjdslfjlsdjfkldsfkljdslfjldsjflsdjfljsfklsdfjkldsjfklsdklfslkfdsn"} showDescription={isVisible.about} setShowDescription={()=>{
        handleDescription("about")
      }}/>
         <Section heading = {"This section is for timepass "} description = {"This is the about us sectiosjdfjdsklfjdsklfkldsjfkldsfjdslfjlsdjfkldsfkljdslfjldsjflsdjfljsfklsdfjkldsjfklsdklfslkfdsn"} showDescription={isVisible.timepass} setShowDescription={()=>{
        handleDescription("timepass")
      }}/>
    </div>
  )
}

export default Home