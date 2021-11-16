import { ADD_STUDENT, DELETE_STUDENT } from "../actionsTypes/types";

export const addStudent = (payload) => {
  return { type: ADD_STUDENT, payload };
};

export const deleteStudent = (payload) => {
  return { type: DELETE_STUDENT, payload };
};
