import axios from "axios";
export default async function getOneInstitut(id) {
  try {
    // make axios post request
    const response = await axios({
      method: "get",
      url: `https://api.nativys.com/api/v1/institut?institut_id=${id}`,
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
