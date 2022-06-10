import axios from "axios";
export default async function getPrestataire(res) {
  try {
    // make axios post request
    const response = await axios({
      method: "get",
      url: "https://api.nativys.com/api/v1/prestataire/list",
      headers: { "Content-Type": "application/json" },
      params: res,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
