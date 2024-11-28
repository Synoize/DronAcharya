import { NavLink } from "react-router-dom"
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi2";
import { IoHomeOutline, IoInformationCircleOutline, IoLayersOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { useAuth } from "../context/auth";

export const Navbar = () => {
  const getActivePage = ({ isActive }) => {
    return {
      color: isActive ? "orange" : "white",
    }
  }

  const { user, isLoggedIn } = useAuth();

  return (
    <>
      <NavLink to="/" style={getActivePage} className="flex gap-2 items-center "><IoHomeOutline />Home</NavLink>
      <NavLink to="/courses" style={getActivePage} className="flex gap-2 items-center "><FaLaptopCode />Course</NavLink>
      <NavLink to="/contest" style={getActivePage} className="flex gap-2 items-center "><IoLayersOutline />Contest</NavLink>
      <NavLink to="/about" style={getActivePage} className="flex gap-2 items-center"><IoInformationCircleOutline />About</NavLink>
      {user.isAdmin ? <NavLink to="/admin/users" style={getActivePage} className="flex gap-2 items-center"><HiOutlineUser />Admin</NavLink> : null}
      {isLoggedIn ? (
        <NavLink to="/logout" style={getActivePage} className="flex gap-2 items-center"><LuUser2 /><span className="text-primary_special">Logout</span></NavLink>
      ) : (
        <NavLink to="/login" style={getActivePage} className="flex gap-2 items-center"><HiOutlineUser />Sign In</NavLink>
      )}
    </>
  );
};