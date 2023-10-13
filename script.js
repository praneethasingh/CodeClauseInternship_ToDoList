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
        taskItem.textContent = taskText;

        const attributeNames = [
            "Priority",
            "Time Frame",
            "Task Type",
            "Urgency",
            "Mood and Energy",
            "Time of Day",
        ];

        const attributesList = document.createElement("ul");

        for (let i = 0; i < attributeNames.length; i++) {
            const attributeName = attributeNames[i];
            const attributeValue = getSelectedValue(i);
            if (attributeValue !== "") {
                const attributeItem = document.createElement("li");
                attributeItem.textContent = `${attributeName}: ${attributeValue}`;
                attributesList.appendChild(attributeItem);
            }
        }

        taskItem.appendChild(attributesList);
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }

    function getSelectedValue(index) {
        switch (index) {
            case 0: return prioritySelect.value;
            case 1: return timeframeSelect.value;
            case 2: return taskTypeSelect.value;
            case 3: return urgencySelect.value;
            case 4: return moodEnergySelect.value;
            case 5: return timeOfDaySelect.value;
            default: return "";
        }
    }
});
