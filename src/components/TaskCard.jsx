import styles from "./TaskCard.module.css";

export default function TaskCard({ task, onMove, onSelect }) {
  return (
    <div className={styles.card}>
      {task.title} {task.priority}
    </div>
  );
}
