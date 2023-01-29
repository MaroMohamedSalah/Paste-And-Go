import { useRecoilState } from "recoil";
import Swal from "sweetalert2";
import Plan from "../Atoms/Plan";
import plans from "./plans.json";

const SelectPlan = () => {
	const [code, setCode] = useRecoilState(Plan);
	Swal.fire({
		title: "Enter Your Plan Code",
		input: "text",
		inputAttributes: {
			autocapitalize: "off",
		},
		showCancelButton: true,
		confirmButtonText: "Done",
		showLoaderOnConfirm: true,
		preConfirm: (login) => {},
		allowOutsideClick: () => !Swal.isLoading(),
	}).then((result) => {
		if (result.isConfirmed) {
			let found = false;
			Object.keys(plans).forEach((p) => {
				if (result.value === p) {
					found = true;
					localStorage.setItem("plan", p);
					// setCode(result.value);
					Swal.fire({
						title: `Your plan has been saved`,
						// imageUrl: result.value.avatar_url,
					});
				}
			});
			found === false
				? Swal.fire({
						title: `Your code is not matched to any plan code!`,
						// imageUrl: result.value.avatar_url,
				  })
				: setCode(result.value);
		}
	});
};
export default SelectPlan;
