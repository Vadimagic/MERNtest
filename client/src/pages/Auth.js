export const Auth = () => {
	return (
		<div className="row">
			<div className="col s6 offset-s3">
				<h1>Сократи ссылку</h1>
				<div class="card">
					<div class="card-image">
						<img src="https://www.mirf.ru/wp-content/uploads/2020/01/Deca-Dense.jpg" alt="Anime"/>
						<span class="card-title amber-text text-darken-4" style={{fontWeight: 'bold'}}>Авторизация</span>
					</div>
					<div class="card-content">
					<div class="input-field">
						<input 
							placeholder="Введите Email" 
							id="email" 
							type="text"
							name="email"
							className="amber-input"
						/>
						<label htmlFor="email">Email</label>
					</div>
					<div class="input-field">
						<input 
							placeholder="Введите пароль" 
							id="password" 
							type="text"
							name="password"
							className="amber-input"
						/>
						<label htmlFor="password">Пароль</label>
					</div>
					</div>
					<div class="card-action">
						<button className="btn amber darken-2" style={{marginRight: 10}}>Войти</button>
						<button className="btn amber darken-4">Зарегистрироваться</button>
					</div>
				</div>
			</div>
		</div>
	)
}