const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  const btn = document.querySelector(".btn.btn-primary")

  btn.addEventListener("click", handleClick)

  function handleClick(e) {
    fetch('https://randomuser.me/api/')
      .then( res => res.json() )
      .then( data => {
    // access data containing user info, save it to a variable 
    const userData = data['results'][0]

    // slap user image on the DOM
    const profilePic = document.querySelector("#profile_picture")
    profilePic.src = userData['picture']['large']
    
    // slap full name on the DOM
    const userName = document.querySelector("#fullname")
    userName.textContent = `${userData['name']['title']} ${userData['name']['first']} ${userData['name']['last']}`

    // slap email on the DOM
    const email = document.querySelector("#email")
    email.textContent = userData['email']

    // slap street info on the DOM
    const street = document.querySelector("#street")
    street.textContent = `${userData['location']['street']['number']} ${userData['location']['street']['name']}`

    // slap city info on the DOM
    const city = document.querySelector("#city")
    city.textContent = userData.location.city

    // slap state info on the DOM
    const state = document.querySelector("#state")
    state.textContent = userData.location.state

    // slap post code info on the DOM
    const postCode = document.querySelector("#postcode")
    postcode.textContent = userData.location.postcode

    // slap phone on the DOM
    const phone = document.querySelector("#phone")
    phone.textContent = userData.phone

    // slap cell on the DOM  
    const cell = document.querySelector("#cell")
    cell.textContent = userData.cell    
    
    // slap dob on the DOM
    const dob = document.querySelector("#date_of_birth")
    
    /* convert ISO date to YYYY-MM-DD format */
    const date = new Date(userData.dob.date)
    
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    if (day < 10) {
      day = '0' + day
    }

    if (month < 10) {
      month = '0' + month
    }

    const newDobFormat = `${year} - ${month} - ${day}`
    /* end convert */

    dob.textContent = newDobFormat
  })
  }

});
