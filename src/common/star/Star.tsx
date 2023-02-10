import React from "react";

import { Star as StarMUI } from "@mui/icons-material";

import styles from "./star.module.css";

export default function Star({
  selected,
  onClick,
}: {
  selected?: boolean;
  onClick: () => void;
}) {
  const { starSelected, starUnselected } = styles;

  return (
    <i onClick={() => onClick()}>
      <StarMUI className={selected ? starSelected : starUnselected} />
    </i>
  );
}
