import React from "react";
import "./TermList.css";
import { TermCard } from "./TermCard";

interface Term {
  id: number;
  title: string;
  description: string;
}

interface TermListProps {
  terms: Term[]; 
  onDelete: (id: number) => void;
}

export const TermList: React.FC<TermListProps> = ({ terms, onDelete }) => {
  return (
    <ul className="term-list">
      {terms.map((item) => (
        <li className="term-list__item" key={item.id}>
          <TermCard
            title={item.title}
            description={item.description}
            onDelete={onDelete}
            id={item.id}
          />
        </li>
      ))}
    </ul>
  );
};
