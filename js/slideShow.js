"use strict"
const images = [
	{'id' : '1', 'url':'./img/slide/finalseason.jpg'},
	{'id' : '2', 'url':'./img/slide/eren5.png'},
	{'id' : '3', 'url':'./img/slide/FINAL5.png'},
];

const containerItems = document.querySelector("#container-items");
const loadImages =(images)=>{
	images.forEach(image =>{
		containerItems.innerHTML += `
			<div class='item'>
				<img src='${image.url}'>
			</div>
		`
	})
}


loadImages(images, containerItems);

let items = document.querySelectorAll(".item");

const previous = () =>{
	containerItems.appendChild(items[0]);
	items = document.querySelectorAll(".item");
}
const next = () =>{
	const lastItem = items[items.length - 1];
	containerItems.insertBefore(lastItem, items[0]);
	items = document.querySelectorAll(".item");
}

document.querySelector("#previous").addEventListener("click", previous)
document.querySelector("#next").addEventListener("click", next)
	
