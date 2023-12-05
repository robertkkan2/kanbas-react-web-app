import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import "./index.css";
function Signup() {
	const [error, setError] = useState("");
	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
	});
	const navigate = useNavigate();
	const signup = async () => {
		try {
			await client.signup(credentials);
			navigate("/Kanbas/account");
		} catch (err) {
			if (err.response && err.response.data && err.response.data.message) {
				setError(err.response.data.message);
			}
		}
	};
	return (
		<div className="content">
			<h1>Signup</h1>
			{error && <div>{error}</div>}
			<input
				value={credentials.username}
				onChange={(e) =>
					setCredentials({
						...credentials,
						username: e.target.value,
					})
				}
			/>
			<input
				value={credentials.password}
				onChange={(e) =>
					setCredentials({
						...credentials,
						password: e.target.value,
					})
				}
			/>
			<button onClick={signup}>Signup</button>
		</div>
	);
}
export default Signup;