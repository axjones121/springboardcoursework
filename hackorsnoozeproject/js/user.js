"use strict"


let currentUser;

async function login(evt) {
    console.debug("login", evt);
    evt.preventDefault();

    const username = $("#login-username").val()
    const password = $("login-password").val()

    currentUser = await User.login( username, password);

    $loginForm.trigger("reset");

    saveUserCredentialsInLocalStorage();
    updataUIOnUserLogin();
}


$loginForm.on("submit", login);






async function signup(evt) {
    console.debug("signup", evt);
    evt.preventDefault();
  
    const name = $("#signup-name").val();
    const username = $("#signup-username").val();
    const password = $("#signup-password").val();
  
    // User.signup retrieves user info from API and returns User instance
    // which we'll make the globally-available, logged-in user.
    currentUser = await User.signup(username, password, name);
  
    saveUserCredentialsInLocalStorage();
    updateUIOnUserLogin();
  
    $signupForm.trigger("reset");
  }
  
  $signupForm.on("submit", signup);







  function logout(evt) {
    console.debug("logout", evt);
    localStorage.clear();
    location.reload();
  }
  
  $navLogOut.on("click", logout);



  async function checkForRememberedUser() {
    console.debug("checkForRememberedUser");
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if (!token || !username) return false;
  
    // try to log in with these credentials (will be null if login failed)
    currentUser = await User.loginViaStoredCredentials(token, username);
  }
  
  /** Sync current user information to localStorage.
   *
   * We store the username/token in localStorage so when the page is refreshed
   * (or the user revisits the site later), they will still be logged in.
   */
  
  function saveUserCredentialsInLocalStorage() {
    console.debug("saveUserCredentialsInLocalStorage");
    if (currentUser) {
      localStorage.setItem("token", currentUser.loginToken);
      localStorage.setItem("username", currentUser.username);
    }
  }
  
  /******************************************************************************
   * General UI stuff about users & profiles
   */
  
  /** When a user signs up or registers, we want to set up the UI for them:
   *
   * - show the stories list
   * - update nav bar options for logged-in user
   * - generate the user profile part of the page
   */
  
  async function updateUIOnUserLogin() {
    console.debug("updateUIOnUserLogin");
  
    hidePageComponents();
  
    // re-display stories (so that "favorite" stars can appear)
    putStoriesOnPage();
    $allStoriesList.show();
  
    updateNavOnLogin();
    generateUserProfile();
  }
  
  /** Show a "user profile" part of page built from the current user's info. */
  
  function generateUserProfile() {
    console.debug("generateUserProfile");
  
    $("#profile-name").text(currentUser.name);
    $("#profile-username").text(currentUser.username);
    $("#profile-account-date").text(currentUser.createdAt.slice(0, 10));
  }