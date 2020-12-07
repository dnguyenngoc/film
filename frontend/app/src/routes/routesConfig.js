import Home from "../screens/home/Home";
import Watch from '../screens/watch/Watch';

const HOME = { component: Home, path: "/home", isPrivate: false };
const PHIMBO = { component: Watch, path: "/phim-bo", isPrivate: false };
const PHIMLE = { component: Watch, path: "/phim-le", isPrivate: false };

export default [HOME, PHIMBO, PHIMLE];