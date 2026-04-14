function calc() {
    let m = document.getElementById("marks").value;
    document.getElementById("result").innerText = "CGPA: " + (m/10);
}

function addTask() {
    let task = document.getElementById("task").value;
    let li = document.createElement("li");
    li.innerText = task;
    document.getElementById("list").appendChild(li);
}

function startTimer() {
    let time = 1500;
    let interval = setInterval(() => {
        let min = Math.floor(time/60);
        let sec = time%60;
        document.getElementById("time").innerText = min + ":" + sec;
        time--;
        if(time < 0) clearInterval(interval);
    }, 1000);
}
// Load saved tasks
window.onload = function() {
    let saved = JSON.parse(localStorage.getItem("tasks")) || [];
    saved.forEach(task => showTask(task));
};

function addTask() {
    let task = document.getElementById("task").value;

    if(task === "") return;

    showTask(task);

    let saved = JSON.parse(localStorage.getItem("tasks")) || [];
    saved.push(task);
    localStorage.setItem("tasks", JSON.stringify(saved));

    document.getElementById("task").value = "";
}

function showTask(task) {
    let li = document.createElement("li");
    li.innerText = task;

    li.onclick = function() {
        li.remove();
    };

    document.getElementById("list").appendChild(li);
}
