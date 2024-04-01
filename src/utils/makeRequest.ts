import api from "../services/api";

export async function makeRequest(url: string, method: string, data?: object) {
  try {
    const response = await api({
      url,
      method,
      data,
    });

    return response.data;
  } catch (error) {
    alert("Ocorreu um erro, tente mais tarde!");
    console.error(error);
  }
}
