import React, { Component } from 'react';


function formatPrice(cents) {
  return `${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}€`;
}

const ProductRender = (props) => (
	<ol className="inventaire">
		<img src={props.image} alt={props.name} />
		<h3 className="nom-voiture">
			{
				props.name
			}
			<span className="price">{formatPrice(props.price)}</span>
			<span className="price">{props.quantity}</span>
		</h3>
		<p>{props.desc}</p>
		{
			props.quantity > 0 && !props.editable ?
				<button onClick={props.onAdd} className="ajoute-au-panier">Ajouter</button>
			:
				null
		}
		{
			props.editable ?
				<button onClick={props.onEdit} className="ajoute-au-panier">Modifier</button>
			:
				null
		}
		{
			props.editable ?
				<div>
					<button
						onClick={props.onDecrement}
						className="ajoute-au-panier"
					>
						Retirer
					</button>
					<button
						onClick={props.onIncrement}
						className="ajoute-au-panier"
					>
						Rajouter
					</button>
				</div>
			:
				null
		}
		{
			props.editable ?
				<button onClick={props.onDelete} className="ajoute-au-panier">Supprimer</button>
			:
				null
		}
	</ol>
)

const styleEditableInput = {
	width: "95%",
	backgroundColor: "transparent",
	borderRadius:20,
	borderRadiusInputTopLeft:20,
    borderRadiusInputTopRight:20,
    borderRadiusInputBottomLeft:20,
    borderRadiusInputBottomRight:20
}

const ProductEditable = (props) => (
	<div
		className="inventaire"
		style={styleEditableInput}
	>
		<input placeholder="Nom de la voiture" style={styleEditableInput} type="text" value={props.name} onChange={(e) => props.onChangeName(e.target.value)}/><br/>
		<input placeholder="Prix" style={styleEditableInput} type="text" value={props.price} onChange={(e) => props.onChangePrice(e.target.value)}/><br/>
		<input placeholder="Description" style={styleEditableInput} type="text" value={props.desc} onChange={(e) => props.onChangeDescription(e.target.value)}/><br/>
		<input placeholder="URL de l'image" style={styleEditableInput} type="text" value={props.image} onChange={(e) => props.onChangeImage(e.target.value)}/><br/>
		{
			!props.add ?
				<button onClick={props.onCancel} className="ajoute-au-panier">Annuler</button>
			:
				null
		}
		<button onClick={props.onAdd} className="ajoute-au-panier">{ props.add ? "Ajouter" : "Confirmer" }</button>
	</div>
)


const Product = (props) => {
	if (props.edit) {
		return <ProductEditable {...props} />;
	}
	return <ProductRender {...props}/>
}

export default Product