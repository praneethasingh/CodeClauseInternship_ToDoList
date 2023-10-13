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

    // Add an event listener to each filter dropdown
    const filterDropdowns = [
        prioritySelect,
        timeframeSelect,
        taskTypeSelect,
        urgencySelect,
        moodEnergySelect,
        timeOfDaySelect,
    ];

    filterDropdowns.forEach((dropdown) => {
        dropdown.addEventListener("change", filterTasks);
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        taskList.appendChild(taskItem);
        taskInput.value = "";
    }

    function filterTasks() {
        const filters = {
            priority: prioritySelect.value,
            timeframe: timeframeSelect.value,
            taskType: taskTypeSelect.value,
            urgency: urgencySelect.value,
            moodEnergy: moodEnergySelect.value,
            timeOfDay: timeOfDaySelect.value,
        };

        // Loop through the task items and check if they match the filters
        const taskItems = taskList.getElementsByTagName("li");
        for (let i = 0; i < taskItems.length; i++) {
            const taskItem = taskItems[i];
            const taskDetails = taskItem.textContent;

            if (isTaskFiltered(taskDetails, filters)) {
                taskItem.style.display = "block";
            } else {
                taskItem.style.display = "none";
            }
        }
    }

    function isTaskFiltered(taskDetails, filters) {
        for (const key in filters) {
            if (filters[key] !== "All" && taskDetails.indexOf(filters[key]) === -1) {
                return false;
            }
        }
        return true;
    }
});
