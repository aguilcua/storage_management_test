import React from "react";
import { Models } from "node-appwrite";
interface Props {
  file: Models.Document;
  onInputChange: React.Dispatch<React.SetStateAction<String[]>>;
  onRemove: (email: string) => void;
}
const ShareInput = ({ file, onInputChange, onRemove }: Props) => {
  return (
    <div className="header">
      <span className="title">Word Hunt</span>
    </div>
  );
};

export default ShareInput;
