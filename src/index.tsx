import PlainText from "./pages/plainText/plainText";
import ReactDOM from "react-dom";
import Home from './pages/home'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(
    <Router>
        <Home></Home>
    </Router>,
    document.getElementById('app')
);
