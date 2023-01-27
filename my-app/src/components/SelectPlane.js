import Swal from "sweetalert2";
import plans from "./plans.json";

const SelectPlane = () => {
	Swal.fire({
		title: "Enter Your Plane Code",
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
			Object.keys(plans).forEach((plan) => {
				if (result.value === plan) {
					found = true;
					localStorage.setItem("plan", plan);
					Swal.fire({
						title: `Your plan has been saved`,
						// imageUrl: result.value.avatar_url,
					});
				}
			});
			found === false &&
				Swal.fire({
					title: `Your code is not matched to any plan code!`,
					// imageUrl: result.value.avatar_url,
				});
		}
	});
};
export default SelectPlane;
