document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("add");
    const taskList = document.getElementById("task-list");

    // Add event listeners for the new elements and store their values when adding a task

    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        // Get the values of the new elements
        const priority = document.getElementById("priority").value;
        const timeframe = document.getElementById("timeframe").value;
        const taskType = document.getElementById("task-type").value;
        const urgency = document.getElementById("urgency").value;
        const category = document.getElementById("category").value;
        const location = document.getElementById("location").value;
        const moodEnergy = document.getElementById("mood-energy").value;
        const timeOfDay = document.getElementById("time-of-day").value;
        const customTags = document.getElementById("custom-tags").value;

        const taskItem = document.createElement("li");
        taskItem.innerHTML = `<b>${priority}</b> - <i>${timeframe}</i><br>${taskText}<br>Task Type: ${taskType}<br>Urgency: ${urgency}<br>Category: ${category}<br>Location: ${location}<br>Mood/Energy: ${moodEnergy}<br>Time of Day: ${timeOfDay}<br>Custom Tags: ${customTags}`;
        
        taskItem.addEventListener("click", function () {
            taskItem.classList.toggle("completed");
        });

        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
});
