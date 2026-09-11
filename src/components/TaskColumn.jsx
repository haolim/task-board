import styles from "./TaskColumn.module.css";
import TaskCard from "./TaskCard";

export default function TaskColumn({ title, tasks, onMove, onSelect }) {
  return (
    <div className={styles.columnHeader}>
      <li className={styles.list}>
        <TaskCard />
      </li>
    </div>
  );
}
