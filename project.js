
const log_in = () => {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    if (username == "admin" && password == "1234") {
        window.location.assign("project.html")
    }
}