import axios from "axios";
export default async function deleteRDV(id, token) {
  try {
    // make axios post request
    const response = await axios({
      method: "post",
      url: `https://api.nativys.com/api/v1/rdv/cancel`,
      headers: { Authorization: `Bearer ${token}` },
      data: {
        rdv_id: id,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
