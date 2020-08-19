import jwt from "jsonwebtoken";

const isAuthenticated = () => {
  let token = localStorage.getItem("token");

  if (!token) return false;

  if (jwt.verify(token, "BROKAO666")) {
    return true;
  } else {
    return false;
  }
};
export default isAuthenticated;
