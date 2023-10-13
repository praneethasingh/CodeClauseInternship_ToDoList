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

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const taskItem = document.createElement("li");

        // Make the task name bold
        const taskNameElement = document.createElement("strong");
        taskNameElement.textContent = taskText;

        taskItem.appendChild(taskNameElement);

        const attributes = {
            Priority: prioritySelect.value,
            Timeframe: timeframeSelect.value,
            "Task Type": taskTypeSelect.value,
            Urgency: urgencySelect.value,
            "Mood and Energy": moodEnergySelect.value,
            "Time of Day": timeOfDaySelect.value,
        };

        const attributesList = document.createElement("ul");

        for (const [attributeName, attributeValue] of Object.entries(attributes)) {
            if (attributeValue !== "") {
                const attributeItem = document.createElement("li");

                // Make the attribute name bold
                const attributeNameElement = document.createElement("strong");
                attributeNameElement.textContent = attributeName;

                attributeItem.appendChild(attributeNameElement);

                attributeItem.innerHTML += `: ${attributeValue}`;
                attributesList.appendChild(attributeItem);
            }
        }

        taskItem.appendChild(attributesList);
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
});


