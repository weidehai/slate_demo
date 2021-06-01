import React, { useEffect, useMemo, useState } from "react";
import { createEditor, Descendant, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import {MenuBar} from '../../components/menuBar/menuBar'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  editor: {
    padding: '1rem',
    fontSize:'1.2rem'
  },
});




function RichText() {
  const editor = useMemo(() => withReact(createEditor()),[]);
  const classes = useStyles()
  let [value, setValue] = useState(initialValue);
  return (
    <Slate editor={editor} value={value} onChange={newValue=>{setValue(newValue)}}>
      <MenuBar></MenuBar>
      <Editable className={classes.editor}></Editable>
    </Slate>
  );
}

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "This is editable rich text"}],
  },
];


export default RichText