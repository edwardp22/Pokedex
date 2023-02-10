import React from "react";
import { Star as StarMUI } from "@mui/icons-material";

import styles from "./star.module.css";

export default function Star({ selected }: { selected?: boolean }) {
  return <StarMUI className={selected ? styles.selected : styles.unselected} />;
}
