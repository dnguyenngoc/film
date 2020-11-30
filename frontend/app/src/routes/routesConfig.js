import Home from "../components/views/Home";
import Watch from '../components/views/Watch';

const HOME = { component: Home, path: "/home", isPrivate: false };
const PHIMBO = { component: Watch, path: "/phim-bo", isPrivate: false };
const PHIMLE = { component: Watch, path: "/phim-le", isPrivate: false };
// const PHIMLEWATCH = { component: Watch, path: "/phim-le/:phimName", isPrivate: false };
// const PHIMBOWATCH = { component: Watch, path: "/phim-bo/:phimName", isPrivate: false };
export default [HOME, PHIMBO, PHIMLE];