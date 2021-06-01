import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: 0,
  },
});

export function MenuBar() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="md" className={classes.root}>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <FormatItalicIcon></FormatItalicIcon>
        </IconButton>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <FormatUnderlinedIcon></FormatUnderlinedIcon>
        </IconButton>
      </Container>
      <Divider />
    </React.Fragment>
  );
}
