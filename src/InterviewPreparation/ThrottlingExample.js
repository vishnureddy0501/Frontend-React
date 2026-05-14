import { use, useEffect, useState } from "react";

const ThrottleExample = () => {
	const [query, setQuery] = useState("");
	const last = 0;
	const handleChange = (event) => {
		setQuery(event.target.value);
	}
	useEffect(() => {
		const now = new Date();
		if (now-last > 500) {
			if (query.length > 0) {
				console.log("call the api here", query);
				last = now;
			}
		}
	}, [query])
	return (
		<>
			<input type="text" onChange={handleChange} />
		</>
	)
}
export default ThrottleExample;