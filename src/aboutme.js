
function WhoAmI(){
  return (
    <div>
      <h1>About Me</h1>
    </div>
  )
}

function ThisWebsite(){
  return (
    <div>
      <h1>This Website</h1>
    </div>
  )
}



function AboutMe(){
  return (
    <div className="container">
      <div className="aboutme-container">
        <div className="aboutme-container-left">
          <h1>About Me</h1>
        </div>
        <div className="aboutme-container-right">
          <h1>This Website</h1>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;