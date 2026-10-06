const ipt = document.getElementById("input");
const ram = document.getElementById("ram");

function docomo() {
    if (ipt.value === '') {
        alert("you must enter something");
    } 
    else {
        let li = document.createElement("li");
        li.textContent = ipt.value;
        ram.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    ipt.value = "";
}

ram.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    } 
    else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
    }
});