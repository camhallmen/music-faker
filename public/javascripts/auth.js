// Listen for auth state changes
auth.onAuthStateChanged(user => {
    if (user) {
        console.log("User logged in: ", user)
        $("#show-user").html(user.email)
    } else {
        console.log("User logged out")
        $("#show-user").html("")
    }
})


// Singup
$("#signup").on("click", function() {
    event.preventDefault()

    // Get user info
    const email = $("#user-email").val()
    console.log("Email: " + email)
    const password = $("#user-password").val()
    console.log("Password: " + password)

    // Sign up user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        $("#user-email").val("")
        $("#user-password").val("")
    })
})

// Logout
const logout = $("#logout")
logout.on("click", function() {
    event.preventDefault()
    auth.signOut()
})

// Login
$("#login").on("click", function() {
    event.preventDefault()
     // Get user info
     const email = $("#user-email").val()
     const password = $("#user-password").val()

     auth.signInWithEmailAndPassword(email, password).then(cred => {
         $("#user-email").val("")
         $("#user-password").val("")
     })
})