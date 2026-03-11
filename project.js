
const log_in = () => {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    if (username == "admin" && password == "1234") {
        window.location.assign("project.html")
    }
}

function detail(Id) {
    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${Id}`)
        .then(response => response.json())
        .then(data => {
            let e = data.data
            const modal = document.getElementById('modal_')
            modal.innerHTML = ""
            const div = document.createElement('div')
            div.innerHTML = `
                 <div class="modal-box">
                    <p class="text-2xl font-bold">${e.title}</p>
                    <p class="text-neutral-500/50 mt-2">${e.description}</p>

                    <div class="flex justify-around bg-neutral-300/50 py-5 rounded-lg my-10">
                        <div>
                            <p class="text-neutral-500/50">Assignee:</p>
                            <p class="text-xl font-bold">${e.assignee}</p>
                        </div>
                        <div>
                            <p class="text-neutral-500/50">Priority:</p>
                            <p><button class="bg-red-400 text-white px-4 rounded-full">${e.priority}</button></p>
                        </div>
                    </div>
                    <div class="modal-action">
                        <form method="dialog">

                            <button class="btn btn-primary">Close</button>
                        </form>
                    </div>
                </div>
                
                `
            modal.appendChild(div)
            modal.showModal()
        });









}

const search_ = () => {
    const search = document.getElementById('search').value
    search_issues(search)
}
function search_issues(search) {

    document.getElementById('total').innerText = ""

    document.getElementById('total').innerHTML = `  <div class="col-span-4 flex justify-center py-10">
        <span class="loading loading-spinner loading-xl"></span></div>`

    document.getElementById('all_btn').classList.remove('btn-primary')
    document.getElementById('closed_btn').classList.remove('btn-primary')
    document.getElementById('open_btn').classList.remove('btn-primary')

    let i = 0
    setTimeout(() => {
        fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${search}`)
            .then(response => response.json())
            .then(data => {
                const total = document.getElementById('total')
                total.innerHTML = ""
                data.data.forEach(e => {
                    i++
                    div(total, e)
                    document.getElementById('issues_number').innerText = i
                });
            })
    }, 1000)

}
function all_issues() {

    document.getElementById('total').innerText = ""

    document.getElementById('total').innerHTML = `  <div class="col-span-4 flex justify-center py-10">
        <span class="loading loading-spinner loading-xl"></span></div>`

    document.getElementById('all_btn').classList.add('btn-primary')
    document.getElementById('closed_btn').classList.remove('btn-primary')
    document.getElementById('open_btn').classList.remove('btn-primary')

    let i = 0
    setTimeout(() => {
        fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
            .then(response => response.json())
            .then(data => {
                const total = document.getElementById('total')
                total.innerText = ""
                data.data.forEach(e => {

                    i++
                    div(total, e)
                    document.getElementById('issues_number').innerText = i
                });
            })
    }, 1000)
}

all_issues()
function total_issues(status_) {

    document.getElementById('total').innerText = ""
    document.getElementById('total').innerHTML = `  <div class="col-span-4 flex justify-center py-10">
        <span class="loading loading-spinner loading-xl"></span></div>`
    document.getElementById('all_btn').classList.remove('btn-primary')
    document.getElementById('open_btn').classList.remove('btn-primary')
    document.getElementById('closed_btn').classList.remove('btn-primary')
    document.getElementById(status_ + "_btn").classList.add('btn-primary')
    let i = 0
    setTimeout(() => {
        fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
            .then(response => response.json())
            .then(data => {
                const total = document.getElementById('total')
                total.innerHTML = ""
                data.data.forEach(e => {
                    if (e.status == status_) {
                        i++
                        div(total, e)
                    }
                    document.getElementById('issues_number').innerText = i
                });
            })
    }, 1000)
}