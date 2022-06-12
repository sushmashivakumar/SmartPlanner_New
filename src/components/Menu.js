import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../features/loggedIn";
import { InputText } from "primereact/inputtext";
import "./home.css";
import Api from "../service/Api";
import { logout } from "../service/Config";

function Menu({ loggedIn }) {
  let navigate = useNavigate();
  const userStore = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const items = [
    {
      label: "Welcome",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "Logout",
          icon: "pi pi-fw pi-user-minus",
          command: () => {
            //Api call for Logout
            // Api.post(logout).then((res) => {
            //   dispatch(signOut());
            //   navigate("/");
            // });

            dispatch(signOut());
            navigate("/");
          },
        },
      ],
    },
  ];

  const end = () => {
    const logout = () => {
      dispatch(signOut());
      navigate("/");
    };

    return (
      <>
        {loggedIn ? null : (
          <>
            <Button
              label="Sign Up"
              className="p-button-rounded p-button-outlined"
              style={{ marginRight: "10px", color: "white" }}
              onClick={() => navigate("signup")}
            />
            <Button
              label="Login"
              className="p-button-rounded p-button-outlined"
              style={{ marginRight: "10px", color: "white" }}
              onClick={() => navigate("login")}
            />
          </>
        )}
      </>
    );
  };

  const Start = () => {
    return (
      <div>
        <Button
          label="Home"
          className="p-button-rounded p-button-outlined"
          style={{ marginRight: "10px", color: "white" }}
          onClick={() => navigate("/")}
        />
      </div>
    );
  };
  return (
    <Menubar
      className="menunav"
      {...(userStore.hasOwnProperty("useremail")
        ? { model: items }
        : { end: end })}
      start={Start}
    />
  );
}

export default Menu;
