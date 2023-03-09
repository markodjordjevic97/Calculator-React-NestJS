import axiosInstance from "../client/axios-client";
import { CalculateRequest } from "../../utils/types/calculation.type";

export const calculatorPostMethod = async (data: CalculateRequest) => {
  return axiosInstance.post("/calculate", data);
};
