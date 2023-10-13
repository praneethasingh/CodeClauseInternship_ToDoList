document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("add");
    const taskList = document.getElementById("task-list");
    const prioritySelect = document.getElementById("priority");
    const timeframeSelect = document.getElementById("timeframe");
    const taskTypeSelect = document.getElementById("task-type");
    const urgencySelect = document.getElementById("urgency");
    const moodEnergySelect = document.getElementById("mood-energy");
    const timeOfDaySelect = document.getElementById("time-of-day");

    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const taskItem = document.createElement("li");

        const taskAttributes = [];
        
        if (prioritySelect.value !== "Select Priority") {
            taskAttributes.push(prioritySelect.value);
        }

        if (timeframeSelect.value !== "Select Time Frame") {
            taskAttributes.push(timeframeSelect.value);
        }

        if (taskTypeSelect.value !== "Select Task Type") {
            taskAttributes.push(taskTypeSelect.value);
        }

        if (urgencySelect.value !== "Select Urgency") {
            taskAttributes.push(urgencySelect.value);
        }

        if (moodEnergySelect.value !== "Select Mood and Energy") {
            taskAttributes.push(moodEnergySelect.value);
        }

        if (timeOfDaySelect.value !== "Select Time of Day") {
            taskAttributes.push(timeOfDaySelect.value);
        }

        if (taskAttributes.length > 0) {
            const attributesDiv = document.createElement("div");
            attributesDiv.innerHTML = `<strong>Attributes:</strong> ${taskAttributes.join(", ")}`;
            taskItem.appendChild(attributesDiv);
        }

        taskItem.innerHTML += `<strong>Task:</strong> ${taskText}`;
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
});

