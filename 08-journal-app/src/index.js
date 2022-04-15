import { createRoot } from "react-dom/client";
import { JournalApp } from "./JournalApp";
import "./styles/styles.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<JournalApp />);
 