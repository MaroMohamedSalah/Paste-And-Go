import { atom } from "recoil";

const Plan = atom({
	key: "Plan",
	default: localStorage.getItem("plan"),
});

export default Plan;
