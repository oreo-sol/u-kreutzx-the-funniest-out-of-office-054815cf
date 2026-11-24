import { mkdirSync, writeFileSync } from "node:fs";

const first = "I'm out of office. Your email will be answered";
const second = "in the order it was ignored.";
const line = [first, second].filter(Boolean).join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
