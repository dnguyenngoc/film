import Home from "../components/views/Home";
import Login from "../components/views/Login";
import ContactUs from "../components/views/ContactUs";
import FilmDetail from '../components/views/FilmDetail';

const HOME = { component: Home, path: "/home", isPrivate: false };
const LOGIN = { component: Login, path: "/login", isPrivate: false };
const CONTACTUS = { component: ContactUs, path: "/contact-us", isPrivate: false };
const PHIMBO = { component: FilmDetail, path: "/phim-bo", isPrivate: false };
const PHIMLE = { component: FilmDetail, path: "/phim-le", isPrivate: false };
const PHIMLEWATCH = { component: FilmDetail, path: "/phim-le/:phimName", isPrivate: false };
const PHIMBOWATCH = { component: FilmDetail, path: "/phim-bo/:phimName", isPrivate: false };
export default [HOME, LOGIN, CONTACTUS, PHIMBO, PHIMLE, PHIMLEWATCH, PHIMBOWATCH];