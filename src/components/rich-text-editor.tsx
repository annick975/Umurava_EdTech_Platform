import React, { useState, FormEvent } from "react";
import {
  Bold,
  Italic,
  Underline,
  List,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  placeholder = "Enter text here...",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFormat = (command: string, value?: string) => {
    document.execCommand(command, false, value ?? "");
  };

  const handlePaste = (e: ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData?.getData("text/plain") ?? "";
    document.execCommand("insertText", false, text);
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    setIsFocused(false);
    const div = e.target as HTMLDivElement;
    onChange?.(div.innerHTML);
  };

  const handleInput = (e: FormEvent<HTMLDivElement>) => {
    const div = e.target as HTMLDivElement;
    onChange?.(div.innerHTML);
  };

  return (
    <div className="w-full border rounded-lg overflow-hidden">
      <div className="border-b bg-gray-50 p-2 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => handleFormat("bold")}
          className="p-1.5 rounded hover:bg-gray-200 transition-colors"
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => handleFormat("italic")}
          className="p-1.5 rounded hover:bg-gray-200 transition-colors"
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => handleFormat("underline")}
          className="p-1.5 rounded hover:bg-gray-200 transition-colors"
          title="Underline"
        >
          <Underline className="w-4 h-4" />
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1 self-center" />
        <button
          type="button"
          onClick={() => handleFormat("insertUnorderedList")}
          className="p-1.5 rounded hover:bg-gray-200 transition-colors"
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1 self-center" />
        <button
          type="button"
          onClick={() => handleFormat("justifyLeft")}
          className="p-1.5 rounded hover:bg-gray-200 transition-colors"
          title="Align Left"
        >
          <AlignLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => handleFormat("justifyCenter")}
          className="p-1.5 rounded hover:bg-gray-200 transition-colors"
          title="Align Center"
        >
          <AlignCenter className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => handleFormat("justifyRight")}
          className="p-1.5 rounded hover:bg-gray-200 transition-colors"
          title="Align Right"
        >
          <AlignRight className="w-4 h-4" />
        </button>
      </div>
      <div
        className={`min-h-[120px] p-3 focus:outline-none ${
          isFocused ? "ring-2 ring-blue-500" : ""
        }`}
        contentEditable
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        onInput={handleInput}
        onPaste={handlePaste as unknown as React.ReactEventHandler}
        dangerouslySetInnerHTML={{ __html: value }}
        data-placeholder={placeholder}
        style={{
          position: "relative",
          wordBreak: "break-word",
        }}
      />
      <style jsx>{`
        div[contenteditable="true"]:empty:before {
          content: attr(data-placeholder);
          color: #9ca3af;
          position: absolute;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor;
