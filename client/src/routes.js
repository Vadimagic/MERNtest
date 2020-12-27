import { Redirect, Route, Switch } from 'react-router-dom'
import { Links } from './pages/Links'
import { Create } from './pages/Create'
import { Detail } from './pages/Detail'
import { Auth } from './pages/Auth'

export const useRoutes = isAuthenticated => {
	if (isAuthenticated) {
		return (
			<Switch>
				<Route path="/links">
					<Links/>
				</Route>
				<Route path="/create">
					<Create/>
				</Route>
				<Route path="/detail/:id">
					<Detail/>
				</Route>
				<Redirect to="/create"/>
			</Switch>
		)
	}

	return (
		<Switch>
			<Route path="/" exact>
				<Auth/>
			</Route>
			<Redirect to="/"/>
		</Switch>
	)
}