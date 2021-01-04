import { Link } from 'react-router-dom'

export const LinksList = ({links}) => {
	if (!links.length) {
		return <p className="center">Ссылок нет</p>
	}
	return (
		<table>
			<thead>
				<tr>
					<th>№</th>
					<th>Оригинальная</th>
					<th>Сокращенная</th>
					<th>Открыть</th>
				</tr>
			</thead>

			<tbody>
				{links.map((link, i) => {
					return (
						<tr key={link._id}>
							<td>{i + 1}</td>
							<td className="td-link"><div className="link">{link.from}</div></td>
							<td>{link.to}</td>
							<td><Link to={`/detail/${link._id}`} class="waves-effect waves-light btn amber darken-3">Открыть</Link></td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
