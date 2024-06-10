const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addtask(){
    if( inputBox.value === ''){
         alert(" you must have write something; ");
}
    else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
        saveData()
}
inputBox.value= "";
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showtask()
// -----------------
const toggleSwitch = document.getElementById('darkModeToggle');

// Function to set theme based on toggle state
function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#222';
        document.body.style.color = '#fff';
    } else {
        document.body.style.backgroundColor = '#f0f0f0';
        document.body.style.color = '#333';
    }
}

// Function to toggle theme
function toggleTheme() {
    if (toggleSwitch.checked) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

// Event listener for toggle switch
toggleSwitch.addEventListener('change', toggleTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        setTheme('dark');
    }
}