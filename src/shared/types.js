import { shape, string, bool, arrayOf, number } from "prop-types";

export const TTodo = shape({
         _id: string,
         completed: bool,
         description: string,
         owner: string,
         createdAt: string,
         updatedAt: string,
         __v: number,
       });

export const TTodos = arrayOf(TTodo);
