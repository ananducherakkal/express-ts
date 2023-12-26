import logger from "../logger";
import * as todoType from "../types/todo";
import sendResponse from "../utils/sendResponse";
import { Response } from "express";

/**
 * @description Fetch todo by id
 * @param {string} id - todo id
 */
export const getTodo = async (res: Response, params: todoType.GetTodo) => {
  logger.info("getTodo service: start");
  const { id } = params;

  throw new Error("Parameter is not a number!");

  sendResponse(res, 200, { send: { message: "Todo list" } });
};
