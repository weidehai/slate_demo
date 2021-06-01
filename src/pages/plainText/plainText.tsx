import React, { useEffect, useMemo, useState } from "react";
import { createEditor, Descendant, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";

function PlainText() {
  const editor = useMemo(() => withReact(createEditor()),[]);
  let [value, setValue] = useState(initialValue);
  return (
    <Slate editor={editor} value={value} onChange={newValue=>{setValue(newValue)}}>
      <Editable></Editable>
    </Slate>
  );
}

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "This is editable plain text, just like a <textarea>" }],
  },
];


export default PlainText