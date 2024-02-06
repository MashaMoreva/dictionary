import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TermList } from "./TermList";

interface Term {
  id: number;
  title: string;
  description: string;
}

function saveTermList(terms: Term[]): void {
  localStorage.setItem("dictionary", JSON.stringify(terms));
}

function restoreTermList() {
  const rawTermList = localStorage.getItem("dictionary");

  if (!rawTermList) {
    return [];
  }
  return JSON.parse(rawTermList);
}

let terms: Term[] = restoreTermList();

const reactRoot = createRoot(document.getElementById("description-list")!);

function syncTermList() {
  saveTermList(terms);
  reactRoot.render(<TermList terms={terms} onDelete={deleteItem} />);
}

function addTerm(title: string, description: string) {
  terms.push({ id: Date.now(), title, description });
  terms.sort((term1, term2) => term1.title.localeCompare(term2.title));
  syncTermList();
}

function deleteItem(id: number) {
  terms = terms.filter((term) => term.id !== id);
  syncTermList();
}

const form = document.getElementById("add-description") as HTMLFormElement;

syncTermList();

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  // Получаем значения полей формы
  const title = form.elements["title"].value;
  const description = form.elements["description"].value;

  form.reset();

  addTerm(title, description);
});
