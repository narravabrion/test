import axios from "axios"

const registerUser = async (data) => {
	return await axios.post(
		"https://digi.kifaruafrica.co.ke/api/v1/auth/register",
		data
	)
}

const login = async (data) => {
	const { email, password } = data
	return await axios
		.post("https://digi.kifaruafrica.co.ke/api/v1/auth/login", {
			email,
			password,
		})
		.then((response) => {
			if (response.data.accessToken) {
				localStorage.setItem("user", JSON.stringify(response.data))
			}
			return response.data
		})
}

const logout = async () => {
	return localStorage.removeItem("user")
}

const authService = {
	registerUser,
	login,
	logout,
}

export default authService
