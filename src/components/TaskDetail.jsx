import styles from "./TaskDetail.module.css";

export default function TaskDetail({ task }) {
  return <div className={styles.taskDetailSection}>{task.title}</div>;
}
