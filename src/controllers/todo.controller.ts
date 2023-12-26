import { NextFunction, Request, Response } from "express";
import * as todoService from "../services/todo.service";
import logger from "../logger";
import { GetTodoQuery } from "../types/todo";

export const getTodo = [
  async (req: Request, res: Response, next: NextFunction) => {
    logger.info("getTodo controller: start");

    try {
      const { id } = req.query as GetTodoQuery;

      await todoService.getTodo(res, { id });
    } catch (error) {
      logger.error("getTodo", error);
      next(error);
    }
  },
];
