function div(total, e) {

    let labels_ = ''
    e.labels.forEach(n => {
        if (n == "bug") {
            console.log(n)
            labels_ += ` <button class="bg-red-200/50 text-red-500 font-bold rounded-full px-5 " >${n}</button>  `
        }
        else if (n == "help wanted") {
            labels_ += ` <button class="bg-yellow-200/50 text-yellow-500 font-bold rounded-full px-5 " >${n}</button>  `
        }
        else if (n == "enhancement") {
            labels_ += ` <button class="bg-green-200/50 text-green-500 font-bold rounded-full px-5 " >${n}</button>  `
        }
        else {
            labels_ += ` <button class="bg-neutral-200/50 text-neutral-500 font-bold rounded-full px-5 " >${n}</button>  `
        }

    });
    const div = document.createElement('div')
    div.innerHTML = `  <div class="bg-white rounded-lg">
                    <div class="px-5 py-5">
                        <div class="flex justify-between">
                            <div>${e.status == "open" ? ' <img src="images/3.png" alt="">' : '<img src="images/1.png" alt=""></img>'} </div>
                            <div>
                            ${e.priority == "high" ? '<button class="bg-red-200/50 text-red-500 font-bold rounded-full px-5 ">High</button>' :
            e.priority == "medium" ? '<button class="bg-yellow-200/50 text-yellow-500 font-bold rounded-full px-5 ">Medium</button>' :
                '<button class="bg-neutral-200/50 text-neutral-500 font-bold rounded-full px-5 ">Low</button>'}
                            
                            </div>
                        </div >
                        <p class="text-2xl font-bold my-2">${e.title}</p>
                        <p class="text-neutral-500/50 text-justify">${e.description} </p>

                    <div class="py-2">${labels_}</div>
                        
                    </div >
                    <div class="text-neutral-300/50">
                        <hr>
                    </div>
                    <div class="px-5 py-5">
                        <p class="text-neutral-500/50">#${e.id} by ${e.author}</p>
                        <p class="text-neutral-500/50">${e.createdAt.split('T')[0]}</p>
                    </div>
                </div > `

    div.classList.add('bg-white', 'rounded-lg')
    total.appendChild(div)

}