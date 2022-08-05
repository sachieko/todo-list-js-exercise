
// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false
  };
  return task;
};

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
const completeTask = function(task) {
  task.complete = true;
};

// Print the state of a task to the console in a nice readable way
const logTaskState = function(task) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
};

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "There is a bunch of 💩💩 to remove. Gross."); // task 0
const task2 = newTask("Do Laundry", "So much clothes"); // task 1
const tasks = [task1, task2];

logTaskState(task1); // Clean Cat Litter has not been completed
completeTask(task1);
logTaskState(task1); // Clean Cat Litter has been completed
console.log(tasks);
