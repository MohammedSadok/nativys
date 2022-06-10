import axios from "axios";
export default async function confirmRDV(data, token) {
  try {
    // make axios post request
    const response = await axios({
      method: "post",
      url: `https://api.nativys.com/api/v1/rdv/confirm`,
      headers: { Authorization: `Bearer ${token}` },
      data: data,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
