import { Outlet, useNavigate } from "react-router-dom";
import Header from "./header";
import { useEffect } from "react";

const SiteRoot = () => {
  const navigate = useNavigate();
  const storedUserCredentials = localStorage.getItem("userCredentials");
  const userCredentials = storedUserCredentials
    ? JSON.parse(storedUserCredentials)
    : null;

  useEffect(() => {
    userCredentials?.email === "selinay" &&
    userCredentials?.password === "selinay"
      ? navigate("/")
      : navigate("/login");
  }, []);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default SiteRoot;
