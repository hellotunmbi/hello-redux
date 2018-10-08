import reducer from "../reducers";
import { createStore } from "redux";

const initialState = { tech: "Angular" };
export const store = createStore(reducer, initialState);

