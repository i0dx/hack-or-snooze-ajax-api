"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

/** When the user clicks submit, retrieve form data and send to server */
function navSubmit(evt){
  console.debug("navSubmit", evt);
  let storyFrame = {
   title: $("#form-title").val(),
   author: $("#form-author").val(),
   url: $("#form-url").val()
  }
  console.log(storyFrame);
  document.querySelector("#story-form").reset();
  storyList.addStory(currentUser, storyFrame);
}

$navSubmit.on("click", navSubmit);