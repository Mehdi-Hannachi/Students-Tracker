import { data } from "../../../data";
import { ADD_STUDENT, DELETE_STUDENT } from "../actionsTypes/types";

const initialState = {
  students: data,
};

const studentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, payload],
      };

    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter((student) => student.id !== payload),
      };

    default:
      return state;
  }
};

export default studentsReducer;
