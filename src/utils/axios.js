import axios from "axios";
import { Alert } from "../components";

const options = {
  baseURL: "https://teknasyon.netlify.app/.netlify",
  withCredentials: false,
  mode: "cors",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "X-Access-Token": "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",
  },
};

const axiosObj = axios.create(options);
export const callApiGet = axiosObj.get;
export const callApiPost = axiosObj.post;
export const callApiPut = axiosObj.put;
export const callApiDelete = axiosObj.delete;

export async function callAPI(
  axiosFunc,
  { url, urlOptions },
  param,
  nextFunc,
  silent = false,
  errFunc
) {
  let newParam;
  if ([callApiGet, callApiDelete].includes(axiosFunc)) {
    newParam = { params: param, ...urlOptions };
  } else {
    newParam = param;
  }
  try {
    const res = await axiosFunc(url, newParam, urlOptions);
    if (!silent) {
      Alert({
        type: "success",
        title: "Başarılı",
        description: res.data.message,
      });
    }
    if (nextFunc) {
      await nextFunc(res);
    }
  } catch (err) {
    if (![403].includes(err.response?.data?.statusCode)) {
      if (errFunc) {
        await errFunc(err);
      } else {
        Alert({
          type: "error",
          title: "Hata",
          description: err.response?.data?.message ?? err.message,
        });
      }
    }
  }
}

export default axiosObj;
