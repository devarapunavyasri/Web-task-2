let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask(){

let task=document.getElementById("taskInput").value;
let date=document.getElementById("dueDate").value;
let priority=document.getElementById("priority").value;

if(task==""){
alert("Enter Task");
return;
}

tasks.push({
task,
date,
priority,
completed:false
});

localStorage.setItem("tasks",JSON.stringify(tasks));

document.getElementById("taskInput").value="";

displayTasks();

}

function displayTasks(){

let list=document.getElementById("taskList");

list.innerHTML="";

tasks.forEach((item,index)=>{

let li=document.createElement("li");

li.innerHTML=`
<b>${item.task}</b><br>
Due: ${item.date}<br>
Priority: ${item.priority}<br>

<button onclick="completeTask(${index})">Complete</button>

<button onclick="editTask(${index})">Edit</button>

<button onclick="deleteTask(${index})">Delete</button>
`;

if(item.completed){
li.classList.add("completed");
}

list.appendChild(li);

});

}

function completeTask(index){

tasks[index].completed=!tasks[index].completed;

localStorage.setItem("tasks",JSON.stringify(tasks));

displayTasks();

}

function editTask(index){

let newTask=prompt("Edit Task",tasks[index].task);

if(newTask){
tasks[index].task=newTask;
}

localStorage.setItem("tasks",JSON.stringify(tasks));

displayTasks();

}

function deleteTask(index){

tasks.splice(index,1);

localStorage.setItem("tasks",JSON.stringify(tasks));

displayTasks();

}
