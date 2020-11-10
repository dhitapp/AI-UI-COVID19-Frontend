import axios from "axios"

export let BASE_API_URL = "http://localhost:8001"

axios.defaults.baseURL = BASE_API_URL

export const postPredictWithXray = data =>
  axios.post("/api/predict-xray/", data, { mode: "cors" })

export const getPredictionXray = () => axios.get(`/api/xray-predict-result/`)
