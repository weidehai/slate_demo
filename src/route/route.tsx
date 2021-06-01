import PlainText from "../pages/plainText/plainText";
import RichText from "../pages/richText/richText";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const route = ["PlainText","RichText"];

function RouteEntity() {
  return (
    <Switch>
      <Route path="/" exact component={PlainText} />
      <Route path="/PlainText" component={PlainText} />
      <Route path="/RichText" component={RichText} />
    </Switch>
  );
}

export { RouteEntity };
export default route;
