document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("add");
    const taskList = document.getElementById("task-list");

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
        const moodEnergy = document.getElementById("mood-energy").value;
        const timeOfDay = document.getElementById("time-of-day").value;

        const taskItem = document.createElement("li");
        taskItem.innerHTML = `<b>Task: ${taskText}</b><br>`;
                              <b>Priority: ${priority}</b><br>
                              <b>Time Frame: ${timeframe}</b><br>
                              <b>Task Type: ${taskType}</b><br>
                              <b>Urgency: ${urgency}</b><br>
                              <b>Mood and Energy: ${moodEnergy}</b><br>
                              <b>Time of Day: ${timeOfDay}</b><br>;

        taskItem.addEventListener("click", function () {
            taskItem.classList.toggle("completed");
        });

        taskList.appendChild(taskItem);
        taskInput.value = "";

    }
});


function displayTasks(taskList) {
        // Clear existing task notes
        taskContainer.innerHTML = "";

        taskList.forEach(task => {
            const taskNote = document.createElement("div");
            taskNote.classList.add("task-note");
            taskNote.innerHTML = `
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <p>Priority: ${task.priority}</p>
                <p>Timeframe: ${task.timeframe}</p>
                <!-- Add more task properties here -->
            `;

            taskContainer.appendChild(taskNote);
        });
    }
});
