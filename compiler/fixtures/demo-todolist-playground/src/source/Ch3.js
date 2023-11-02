/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { createContext, useState, useRef, useContext } from "react";

/**
 * Ch3 TaskBoard use dedicated context.
 *
 * Motivation:
 * Replace `useState` with `useContext`
 */

const TasksContext = createContext(null);

// Admittedly, this is a really weird pattern...
// but it save me from copying in the reducer...
const SetTasksContext = createContext(null);

export default function FilterableTaskBoardUsingContext() {
  const count = useRef(0);
  const [visibility, setVisibility] = useState("all");
  const [tasks, setTasks] = useState(initialTasks);
  const getFilteredTasks = tasks => {
    count.current++;
    switch (visibility) {
      case "all":
        return tasks;
      case "active":
        return tasks.filter(t => !t.done);
      case "completed":
        return tasks.filter(t => t.done);
    }
  };

  return (
    <>
      <select
        size="3"
        value={visibility}
        onChange={e => setVisibility(e.target.value)}
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      <SetTasksContext.Provider value={setTasks}>
        <TasksContext.Provider value={tasks}>
          <TaskBoard getFilteredTasks={getFilteredTasks} />
        </TasksContext.Provider>
      </SetTasksContext.Provider>
    </>
  );
}

function TaskBoard({ getFilteredTasks }) {
  const tasks = useContext(TasksContext);
  const filtered = getFilteredTasks(tasks);

  return (
    <div>
      <AddTask />
      {filtered.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

function Task({ task }) {
  const setTasks = useContext(SetTasksContext);
  const onChange = task =>
    setTasks(ts => ts.map(t => (t.id === task.id ? task : t)));

  const count = useRef(0);
  const [isEditing, setIsEditing] = useState(false);
  const taskContent = isEditing ? (
    <>
      <input
        value={task.text}
        onChange={e => {
          onChange({
            ...task,
            text: e.target.value,
          });
        }}
      />
      <button onClick={() => setIsEditing(false)}>Save</button>
    </>
  ) : (
    <>
      {task.text}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={e => {
            onChange({
              ...task,
              done: e.target.checked,
            });
          }}
        />
        {taskContent}
        {count.current++}
      </label>
    </li>
  );
}

let nextId = 3;
const defaultTask = "Code bugs";
const initialTasks = [
  { id: 0, text: "Buy milk", done: true },
  { id: 1, text: "Eat tacos", done: false },
  { id: 2, text: "Brew tea", done: false },
];

function AddTask() {
  const setTasks = useContext(SetTasksContext);
  const [text, setText] = useState(defaultTask);
  const handleAddTask = text => {
    setTasks(ts => [
      ...ts,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  };

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText(defaultTask);
          handleAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
}