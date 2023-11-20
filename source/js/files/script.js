
window.onload = function () {
	document.addEventListener("click", documentActions);

	// Actions (делегирование события click)
	function documentActions(e) {
		const targetElement = e.target;
		if (window.innerWidth > 768 && isMobile.any()) {
			if (targetElement.classList.contains('menu__arrow')) {
				targetElement.closest('.menu__item').classList.toggle('_hover');
			}
			if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
				_removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover");
			}
		}
		if (targetElement.classList.contains('search-form__icon')) {
			document.querySelector('.search-form').classList.toggle('_active');
		} else if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
			document.querySelector('.search-form').classList.remove('_active');
		}
		if (targetElement.classList.contains('products__btn')) {
			getProducts(targetElement);
			e.preventDefault();
		} 
		if (targetElement.classList.contains('actions-product__btn')) {
			const productId = targetElement.closest('.product').dataset.pid;
			addToCart(targetElement, productId);
			e.preventDefault();
		} 

		if (targetElement.classList.contains('cart-header__icon') || targetElement.closest('.cart-header__icon')) {
			if (document.querySelector('.cart-list').children.length > 0) {
				document.querySelector('.cart-header').classList.toggle('_active');
			}
			e.preventDefault();
		} else if (!targetElement.closest('.cart-header') && !targetElement.classList.contains('actions-product__btn')) {
			document.querySelector('.cart-header').classList.remove('_active');
		} 

		if (targetElement.classList.contains('cart-list__delete')) {
			const productId = targetElement.closest('.cart-list__item').dataset.cartPid;
			updateCart(targetElement, productId, false);
			e.preventDefault();
		} 

	}
	
	// Header
		const headerElement = document.querySelector('.header');

	const callback = function (entries, observer) {
		if (entries[0].isIntersecting) {
			headerElement.classList.remove('_scroll');
		} else {
			headerElement.classList.add('_scroll');
		}
	};

	const headerObserver = new IntersectionObserver(callback);
	headerObserver.observe(headerElement);


	// Load More Products
	
	async function getProducts(button) {
		if (!button.classList.contains('_hold')) {
			button.classList.add('_hold');
			const file = "json/product.json";
			let response = await fetch(file, {
				method: "GET"
			});
			if (response.ok) {
				let result = await response.json();
				loadProducts(result);
				button.classList.remove('_hold');
				button.remove();
			} else {
				alert("Ошибка");
			}
		}
	}

	function loadProducts(data) {
		const productsItems = document.querySelector('.products__body');

		data.products.forEach(item => {
			const productId = item.id;
			const productUrl = item.url;
			const productImage = item.image;
			const productTitle = item.title;
			const productText = item.text;
			const productPrice = item.price;
			const productOldPrice = item.priceOld;
			const productShareUrl = item.shareUrl;
			const productLikeUrl = item.likeUrl;
			const productLabels = item.labels;

			let productTemplateStart = `<article data-pid="${productId}" class="product">`;
			let productTemplateEnd = `</article>`;

			let productTemplateContentStart = `<div class="product__content">`;
			let productTemplateContentEnd = `</div>`;

			let productTemplateImage = `
				<a href="${productUrl}" class="product__image _ibg">
					<img src="img/products/${productImage}" alt="${productTitle}">
				</a>
			`;

			let productTemplateLabels = '';
			if (productLabels) {
				let productTemplateLabelsStart = `<div class="product__labels">`;
				let productTemplateLabelsEnd = `</div>`;
				let productTemplateLabelsContent = '';

				productLabels.forEach(labelItem => {
					productTemplateLabelsContent += `<div class="product__label product__label_${labelItem.type}">${labelItem.value}</div>`;
				});

				productTemplateLabels += productTemplateLabelsStart;
				productTemplateLabels += productTemplateLabelsContent;
				productTemplateLabels += productTemplateLabelsEnd;
			}

			let productTemplateInfoStart = `
				<div class="product__info info-product">
					<h3 class="info-product__title">${productTitle}</h3>
					<div class="info-product__text">${productText}</div>
			`;
			let productTemplateInfoEnd = `</div>`;

			let productTemplatePrices = '';
			let productTemplatePricesStart = `<div class="info-product__prices">`;
			let productTemplatePricesCurrent = `<div class="info-product__current-price">Rp ${productPrice}</div>`;
			let productTemplatePricesOld = `<div class="info-product__old-price">Rp ${productOldPrice}</div>`;
			let productTemplatePricesEnd = `</div>`;

			productTemplatePrices = productTemplatePricesStart;
			productTemplatePrices += productTemplatePricesCurrent;
			if (productOldPrice) {
				productTemplatePrices += productTemplatePricesOld;
			}
			productTemplatePrices += productTemplatePricesEnd;

			let productTemplateActions = `
				<div class="product__actions actions-product">
					<a href="" class="actions-product__btn">Add to cart</a>
					<div class="actions-product__items">
						<a href="${productShareUrl}" class="actions-product__item _icon-share">Share</a>
						<a href="${productLikeUrl}" class="actions-product__item _icon-favorite">Like</a>
					</div>
				</div>
			`;
			let productTemplate = '';
			productTemplate += productTemplateStart;
			productTemplate += productTemplateContentStart;
			productTemplate += productTemplateImage;
			productTemplate += productTemplateLabels;
			productTemplate += productTemplateInfoStart;
			productTemplate += productTemplatePrices;
			productTemplate += productTemplateInfoEnd;
			productTemplate += productTemplateActions;
			productTemplate += productTemplateContentEnd;
			productTemplate += productTemplateEnd;

			productsItems.insertAdjacentHTML('beforeend', productTemplate);

		});

	}

	// AddToCart
	
	// function addToCart(productButton, productId) {
	// 	if (!productButton.classList.contains('_hold')) {
	// 		productButton.classList.add('_hold');
	// 		productButton.classList.add('_fly');

	// 		const cart = document.querySelector('.cart-header__icon');
	// 		const product = document.querySelector(`[data-pid="${productId}"]`);
	// 		const productImage = product.querySelector('.product__image');

	// 		const productImageFly = productImage.cloneNode(true);

	// 		const productImageFlyWidth = productImage.offsetWidth;
	// 		const productImageFlyHeight = productImage.offsetHeight;
	// 		const productImageFlyTop = productImage.getBoundingClientRect().top;
	// 		const productImageFlyLeft = productImage.getBoundingClientRect().left;

	// 		productImageFly.setAttribute('class', '_flyImage _ibg');
	// 		productImageFly.style.cssText =
	// 			`
	// 		left: ${productImageFlyLeft}px;
	// 		top: ${productImageFlyTop}px;
	// 		width: ${productImageFlyWidth}px;
	// 		height: ${productImageFlyHeight}px;
	// 	`;

	// 		document.body.append(productImageFly);

	// 		const cartFlyLeft = cart.getBoundingClientRect().left;
	// 		const cartFlyTop = cart.getBoundingClientRect().top;

	// 		productImageFly.style.cssText =
	// 			`
	// 		left: ${cartFlyLeft}px;
	// 		top: ${cartFlyTop}px;
	// 		width: 0px;
	// 		height: 0px;
	// 		opacity:0;
	// 	`;

	// 		productImageFly.addEventListener('transitionend', function () {
	// 			if (productButton.classList.contains('_fly')) {
	// 				productImageFly.remove();
	// 				updateCart(productButton, productId);
	// 				productButton.classList.remove('_fly');
	// 			}
	// 		});
	// 	}
	// }

	// function updateCart(productButton, productId, productAdd = true) {
	// 	const cart = document.querySelector('.cart-header');
	// 	const cartIcon = cart.querySelector('.cart-header__icon');
	// 	const cartQuantity = cartIcon.querySelector('span');
	// 	const cartProduct = document.querySelector(`[data-cart-pid="${productId}"]`);
	// 	const cartList = document.querySelector('.cart-list');

	// 	//Добавляем
	// 	if (productAdd) {
	// 		if (cartQuantity) {
	// 			cartQuantity.innerHTML = ++cartQuantity.innerHTML;
	// 		} else {
	// 			cartIcon.insertAdjacentHTML('beforeend', `<span>1</span>`);
	// 		}
	// 		if (!cartProduct) {
	// 			const product = document.querySelector(`[data-pid="${productId}"]`);
	// 			const cartProductImage = product.querySelector('.product__image').innerHTML;
	// 			const cartProductTitle = product.querySelector('.info-product__title').innerHTML;
	// 			const cartProductContent = `
	// 		<a href="" class="cart-list__image _ibg">${cartProductImage}</a>
	// 		<div class="cart-list__body">
	// 			<a href="" class="cart-list__title">${cartProductTitle}</a>
	// 			<div class="cart-list__quantity">Quantity: <span>1</span></div>
	// 			<a href="" class="cart-list__delete">Delete</a>
	// 		</div>`;
	// 			cartList.insertAdjacentHTML('beforeend', `<li data-cart-pid="${productId}" class="cart-list__item">${cartProductContent}</li>`);
	// 		} else {
	// 			const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
	// 			cartProductQuantity.innerHTML = ++cartProductQuantity.innerHTML;
	// 		}

	// 		// После всех действий
	// 		productButton.classList.remove('_hold');
	// 	} else {
	// 		const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
	// 		cartProductQuantity.innerHTML = --cartProductQuantity.innerHTML;
	// 		if (!parseInt(cartProductQuantity.innerHTML)) {
	// 			cartProduct.remove();
	// 		}

	// 		const cartQuantityValue = --cartQuantity.innerHTML;

	// 		if (cartQuantityValue) {
	// 			cartQuantity.innerHTML = cartQuantityValue;
	// 		} else {
	// 			cartQuantity.remove();
	// 			cart.classList.remove('_active');
	// 		}
	// 	}
	// }

// Furniture Gallery

const furniture = document.querySelector('.furniture__body');
if (furniture && !isMobile.any()) {
	const furnitureItems = document.querySelector('.furniture__items');
	const furnitureColumn = document.querySelectorAll('.furniture__column');
	const speed = furniture.dataset.speed;

	let positionX = 0;
	let coordXprocent = 0;

	function setMouseGalleryStyle() {
		let furnitureItemsWidth = 0;
		furnitureColumn.forEach(element => {
			furnitureItemsWidth += element.offsetWidth;
		});

		const furnitureDifferent = furnitureItemsWidth - furniture.offsetWidth;
		const distX = Math.floor(coordXprocent - positionX);

		positionX = positionX + (distX * speed);
		let position = furnitureDifferent / 200 * positionX;

		furnitureItems.style.cssText = `transform: translate3d(${-position}px,0,0);`;
		if (Math.abs(distX) > 0) {
			requestAnimationFrame(setMouseGalleryStyle);
		} else {
			furniture.classList.remove('_init');
		}
	}
	furniture.addEventListener("mousemove", function (e) {
		const furnitureWidth = furniture.offsetWidth;
		const coordX = e.pageX - furnitureWidth / 2;
		coordXprocent = coordX / furnitureWidth * 200;

		if (!furniture.classList.contains('_init')) {
			requestAnimationFrame(setMouseGalleryStyle);
			furniture.classList.add('_init');
		}
	})
}



}