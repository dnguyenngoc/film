import Home from "../components/views/Home";
import Login from "../components/views/Login";
import ContactUs from "../components/views/ContactUs";

const HOME = { component: Home, path: "/home", isPrivate: false };
const LOGIN = { component: Login, path: "/login", isPrivate: false };
const CONTACTUS = { component: ContactUs, path: "/contact-us", isPrivate: false };

export default [HOME, LOGIN, CONTACTUS];