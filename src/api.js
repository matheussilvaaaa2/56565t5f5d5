import axios from "axios";

const api = axios.create({
  baseURL: "https://servidor-de-autenticacao.herokuapp.com",
});

export default api;
