import { useState } from "react";
import styles from "./AddTaskForm.module.css";

const generateTaskId = () => "c" + Date.now();
const emptyForm = {
  title: "",
  description: "",
  priority: "low",
  status: "todo",
};

export default function AddTaskForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: generateTaskId(),
      description: form.description,
      priorirty: form.priority,
      status: form.status,
    });

    setForm(emptyForm);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.fields}>
          <div className={`${styles.field} ${styles.fullWidth}`}>
            <label className={styles.label} htmlFor="title">
              Title
            </label>
            <input
              className={styles.input}
              id="title"
              name="title"
              type="text"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>
          <label className={styles.label} htmlFor="description">
            Description
          </label>
          <input
            className={styles.input}
            id="description"
            name="description"
            type="text"
            value={form.description}
            onChange={handleChange}
            required
          />

          <label className={styles.label} htmlFor="priority">
            Priority
          </label>
          <select
            className={styles.input}
            id="priority"
            name="priority"
            value={form.priority}
            onChange={handleChange}
            required
          >
            <option value="low">Low</option>"
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </form>
    </>
  );
}
