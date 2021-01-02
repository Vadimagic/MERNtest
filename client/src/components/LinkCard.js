export const LinkCard = ({link}) => {
	return (
		<div className="row">
			<div className="col s6 offset-s3">
				<div className="card">
					<div className="card-image">
						<img src={`https://picsum.photos/600/300`} alt=""/>
						<span className="card-title">Сокращенная ссылка</span>
					</div>
					<div className="card-content" style={{overflow: 'hidden'}}>
						<p>Ваша ссылка: <a href={link.to} target="_blank" rel="noreferrer">{link.to}</a></p>
						<p>Откуда: <a href={link.from} target="_blank" rel="noreferrer">{link.from}</a></p>
						<p>Количество кликов по ссылке: <strong>{link.clicks}</strong></p>
						<p>Дата создания: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
					</div>
				</div>
			</div>
		</div>
	)
}