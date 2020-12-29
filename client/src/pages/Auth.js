import { useEffect, useState } from "react"
import { useHttp } from "../hooks/http.hook"
import { useMessage } from "../hooks/message.hook"

export const Auth = () => {
	const {loading, request, error, clearError} = useHttp()
	const message = useMessage()

	const [form, setForm] = useState({
		email: '',
		password: ''
	})

	useEffect(() => {
		message(error)
		clearError()
	}, [error, message, clearError])

	const changeHandler = event => {
		setForm({ ...form, [event.target.name]: event.target.value})
	}

	const registerHandler = async () => {
		try {
			const data = await request('/api/auth/register', 'POST', {...form})
			console.log(data)
		} catch (e) {}
	}

	return (
		<div className="row">
			<div className="col s6 offset-s3">
				<h1>Ты кто такой?</h1>
				<div className="card">
					<div className="card-image">
						<img src="https://www.mirf.ru/wp-content/uploads/2020/01/Deca-Dense.jpg" alt="Anime"/>
						<span className="card-title amber-text text-darken-4" style={{fontWeight: 'bold'}}>Авторизация</span>
					</div>
					<div className="card-content">
						<div className="input-field">
							<input 
								placeholder="Введите Email" 
								id="email" 
								type="text"
								name="email"
								className="amber-input"
								onChange={changeHandler}
							/>
							<label htmlFor="email">Email</label>
						</div>
						<div className="input-field">
							<input 
								placeholder="Введите пароль" 
								id="password" 
								type="password"
								name="password"
								className="amber-input"
								onChange={changeHandler}
							/>
							<label htmlFor="password">Пароль</label>
						</div>
					</div>
					<div className="card-action">
						<button 
							className="btn amber darken-2" 
							style={{marginRight: 10}}
							disabled={loading}
						>Войти</button>
						<button 
							className="btn amber darken-4"
							onClick={registerHandler}
							disabled={loading}
						>Регистрация</button>
					</div>
				</div>
			</div>
		</div>
	)
}