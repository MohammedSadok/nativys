import axios from "axios";
export default async function getRDV(id, token) {
  try {
    // make axios post request
    const response = await axios({
      method: "get",
      url: `https://api.nativys.com/api/v1/mes-reservations?user_id=${id}`,
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
