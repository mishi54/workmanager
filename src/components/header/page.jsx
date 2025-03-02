"use client";
import ContextUser from "@/Context/useContext";
import { Logout } from "@/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const Header = () => {
  const context = useContext(ContextUser);
  console.log(context)
 const router=useRouter()
  async function doLogout() {
    try {
      const response = await Logout();
      console.log(response);
      sessionStorage.clear();
      context.setUser(null); 
     router.push("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <nav className="bg-blue-600 h-14 py-2 px-4 flex justify-between">
      <div>
        <ul>
          <li className="hover:text-blue-900 text-blue-100 mt-2 mb-2 font-medium">
            Work Manager
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-4 mt-2 mb-2">
          {context.user && (
            <>
              <li>
                <Link href="/" className="hover:text-blue-900 text-blue-100">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/add-task"
                  className="hover:text-blue-900 text-blue-100"
                >
                  Add Task
                </Link>
              </li>
              <li>
                <Link
                  href="/show-task"
                  className="hover:text-blue-900 text-blue-100"
                >
                  Show Task
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex gap-2 mt-2 mb-2">
          {context.user && (
            <>
              <li>
                <span className="hover:text-blue-900 text-blue-100">
                  {context.user.name}
                </span>
              </li>
              <li>
                <button
                  onClick={doLogout}
                  className="hover:text-blue-900 text-blue-100"
                >
                  Logout
                </button>
              </li>
            </>
          ) }

            { !context.user && (
            <>
              <li>
                <Link
                  href="/login"
                  className="hover:text-blue-900 text-blue-100"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="hover:text-blue-900 text-blue-100"
                >
                  SignUp
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
