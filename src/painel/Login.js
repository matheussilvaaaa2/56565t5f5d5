import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import api from "../api";
import jwt from "jsonwebtoken";

const Login = () => {
  const [senha, setSenha] = useState("");
  const [redirecionar, setRedirecionar] = useState(false);

  async function onSubmit() {
    let res = await api.post("/login", { senha });

    if (res.data === "fail") {
      alert("Senha inválida");
    } else if (!res.data) {
      alert("Erro interno");
    } else {
      if (jwt.verify(res.data, "BROKAO666")) {
        localStorage.setItem("token", res.data);

        setRedirecionar(true);
        console.log("sadasd");
      } else {
        alert("Senha incorreta");
      }
    }
  }

  return (
    <div style={{}}>
      {redirecionar && <Redirect to="/painelseguro/dash" />}
      <div className="loginForm">
        <input
          type="password"
          onChange={(e) => setSenha(e.target.value)}
          name=""
          placeholder="Sua senha"
          id=""
        />
        <input
          onClick={onSubmit}
          type="button"
          style={{
            backgroundColor: "yellow",
            border: "none",
            cursor: "pointer",
          }}
          value="ENTRAR"
        />
      </div>
    </div>
  );
};

export default Login;
