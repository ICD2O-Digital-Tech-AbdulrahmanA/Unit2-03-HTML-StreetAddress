// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: Sep 2022
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's first name and age and displays it back to user

  // get first name from text field
  let streetName = document.getElementById("street-name").value
	// get age from text field and cast it to integer
  let streetNumber = parseInt(document.getElementById("street-number").value)

  // display name and age back to user
  document.getElementById('user-info').innerHTML = "Your street name is " + streetName + " and your street number is " + streetNumber

  document.getElementById('user-info2').innerHTML = "You live at " + streetName + " " + streetNumber
  
}
