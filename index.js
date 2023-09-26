
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

let saveEl = document.getElementById("save-el")
 
function save() {
        // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let pass = count + " - "
    saveEl.textContent += pass
    countEl.textContent = 0
    count = 0
    
 }





 

 
 




 
 

