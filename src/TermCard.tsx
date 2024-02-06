import React from "react";
import "./TermCard.css";

interface TermCardProps {
  title: string;
  description?: string;
  onDelete: (id: number) => void;
  id: number;
}

export const TermCard: React.FC<TermCardProps> = ({
  title,
  description,
  onDelete,
  id,
}) => {
  const handleDeleteCard: React.MouseEventHandler<HTMLButtonElement> = () => {
    onDelete(id);
  };

  return (
    <div className="term-card">
      <h2 className="term-card__title">{title}</h2>
      {description && <p className="term-card__description">{description}</p>}
      <button
        type="button"
        className="term-card__delete"
        onClick={handleDeleteCard}
      >
        Удалить
      </button>
    </div>
  );
};
