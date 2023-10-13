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
        taskItem.textContent = taskText;

        const attributes = {
            Priority: prioritySelect.value,
            Timeframe: timeframeSelect.value,
            "Task Type": taskTypeSelect.value,
            Urgency: urgencySelect.value,
            "Mood and Energy": moodEnergySelect.value,
            "Time of Day": timeOfDaySelect.value,
        };

        for (const [key, value] of Object.entries(attributes)) {
            if (value !== "") {
                const attributeItem = document.createElement("div");
                attributeItem.textContent = key + ": " + value;
                taskItem.appendChild(attributeItem);
            }
        }

        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
});
