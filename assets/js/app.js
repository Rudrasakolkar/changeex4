const cl=console.log;

const Watches=document.getElementById("Watches");

function onFilter (eve) {
    let val=eve.target.value;
    let allDivs = [...document.querySelectorAll(".all")]
    allDivs.forEach(d=>{
        d.classList.add('d-none')
    })

    const selectedDiv = [...document.getElementsByClassName(val)]
    selectedDiv.forEach(d=>{
        d.classList.remove('d-none')
    })
}

Watches.addEventListener("change",onFilter)