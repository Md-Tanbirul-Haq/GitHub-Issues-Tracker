
const log_in = () => {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    if (username == "admin" && password == "1234") {
        window.location.assign("project.html")
    }
}
const search_ = () => {
    const search = document.getElementById('search').value
    search_issues(search)
}
function search_issues(search) {

    document.getElementById('total').innerText = ""
    document.getElementById('all_btn').classList.remove('btn-primary')
    document.getElementById('closed_btn').classList.remove('btn-primary')
    document.getElementById('open_btn').classList.remove('btn-primary')

    let i = 0
    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${search}`)
        .then(response => response.json())
        .then(data => {
            const total = document.getElementById('total')
            data.data.forEach(e => {
                i++
                div(total, e)
                document.getElementById('issues_number').innerText = i
            });
        })

}
function all_issues() {

    document.getElementById('total').innerText = ""
    document.getElementById('all_btn').classList.add('btn-primary')
    document.getElementById('closed_btn').classList.remove('btn-primary')
    document.getElementById('open_btn').classList.remove('btn-primary')

    let i = 0
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then(response => response.json())
        .then(data => {
            const total = document.getElementById('total')
            data.data.forEach(e => {
                i++
                div(total, e)
                document.getElementById('issues_number').innerText = i
            });
        })
}

all_issues()
function total_issues(status_) {

    document.getElementById('total').innerText = ""
    document.getElementById('all_btn').classList.remove('btn-primary')
    document.getElementById('open_btn').classList.remove('btn-primary')
    document.getElementById('closed_btn').classList.remove('btn-primary')
    document.getElementById(status_ + "_btn").classList.add('btn-primary')
    let i = 0
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then(response => response.json())
        .then(data => {
            const total = document.getElementById('total')
            data.data.forEach(e => {
                if (e.status == status_) {
                    i++
                    div(total, e)
                }
                document.getElementById('issues_number').innerText = i
            });
        })
}