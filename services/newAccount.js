import axios from "axios";
export default async function NewAccount(data) {
  try {
    // make axios post request
    const response = await axios({
      method: "post",
      url: "https://api.nativys.com/api/v1/signup-client",
      data: data,
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
