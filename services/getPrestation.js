import axios from "axios";
export default async function getPrestations() {
  try {
    // make axios post request
    const response = await axios({
      method: "get",
      url: "https://api.nativys.com/api/v1/prestations",
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
