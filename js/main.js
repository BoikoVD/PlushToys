

window.onload = function () {
	document.addEventListener("click", documentActions);

	const debounce = (func, wait, immediate) => {
		var timeout;
		return () => {
			const context = this, args = arguments;
			const later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			const callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	const changeVideoSize = () => {
		let video = document.querySelector('#youtubevideo');
		console.log(video.width)
		if (window.innerWidth > 600) {
			video.width = 560;
			video.height = 315;
		};
		if (window.innerWidth <= 600 && window.innerWidth > 400) {
			video.width = 360;
			video.height = 300;
		};
		if (window.innerWidth <= 400) {
			video.width = 300;
			video.height = 300;
		};
	};

	changeVideoSize();

	addEventListener('resize', debounce(changeVideoSize, 200, false), false);

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
		// if (targetElement.classList.contains('search-form__icon')) {
		// 	document.querySelector('.search-form').classList.toggle('_active');
		// } else if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
		// 	document.querySelector('.search-form').classList.remove('_active');
		// }
		if (targetElement.classList.contains('products__btn')) {
			getProducts(targetElement);
			e.preventDefault();
		} 

		if (targetElement.classList.contains('main-catalog-btn')) {
			let catalog = document.querySelector('#catalog');
			catalog.scrollIntoView({
				behavior: "smooth",
				block: "start",
			})
		}
		// if (targetElement.classList.contains('actions-product__btn')) {
		// 	const productId = targetElement.closest('.product').dataset.pid;
		// 	addToCart(targetElement, productId);
		// 	e.preventDefault();
		// } 

		// if (targetElement.classList.contains('cart-header__icon') || targetElement.closest('.cart-header__icon')) {
		// 	if (document.querySelector('.cart-list').children.length > 0) {
		// 		document.querySelector('.cart-header').classList.toggle('_active');
		// 	}
		// 	e.preventDefault();
		// } else if (!targetElement.closest('.cart-header') && !targetElement.classList.contains('actions-product__btn')) {
		// 	document.querySelector('.cart-header').classList.remove('_active');
		// } 

		// if (targetElement.classList.contains('cart-list__delete')) {
		// 	const productId = targetElement.closest('.cart-list__item').dataset.cartPid;
		// 	updateCart(targetElement, productId, false);
		// 	e.preventDefault();
		// } 

		if (targetElement.classList.contains('order-toy-btn')) {
			fbq('track', 'Lead');
		}
		if (targetElement.classList.contains('order-call-btn')) {
			fbq('track', 'Lead');
		}

		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_gray') && targetElement.classList.contains('prod_1')) {
			document.querySelector('.info-product__color_btn_gray.prod_1').classList.add('active');
			document.querySelector('.info-product__color_btn_brown.prod_1').classList.remove('active');
			document.querySelector('.info-product__color_btn_white.prod_1').classList.remove('active');
			document.querySelector('.slider-product__1-1.prod_1').classList.add('active');
			document.querySelector('.slider-product__1-2.prod_1').classList.remove('active');
			document.querySelector('.slider-product__1-3.prod_1').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_brown') && targetElement.classList.contains('prod_1')) {
			document.querySelector('.info-product__color_btn_gray.prod_1').classList.remove('active');
			document.querySelector('.info-product__color_btn_brown.prod_1').classList.add('active');
			document.querySelector('.info-product__color_btn_white.prod_1').classList.remove('active');
			document.querySelector('.slider-product__1-1.prod_1').classList.remove('active');
			document.querySelector('.slider-product__1-2.prod_1').classList.add('active');
			document.querySelector('.slider-product__1-3.prod_1').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_white') && targetElement.classList.contains('prod_1')) {
			document.querySelector('.info-product__color_btn_gray').classList.remove('active');
			document.querySelector('.info-product__color_btn_brown').classList.remove('active');
			document.querySelector('.info-product__color_btn_white').classList.add('active');
			document.querySelector('.slider-product__1-1.prod_1').classList.remove('active');
			document.querySelector('.slider-product__1-2.prod_1').classList.remove('active');
			document.querySelector('.slider-product__1-3.prod_1').classList.add('active');
		}

		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_brown') && targetElement.classList.contains('prod_2')) {
			document.querySelector('.info-product__color_btn_brown.prod_2').classList.add('active');
			document.querySelector('.info-product__color_btn_pink.prod_2').classList.remove('active');
			document.querySelector('.info-product__color_btn_purple.prod_2').classList.remove('active');
			document.querySelector('.slider-product__2-1.prod_2').classList.add('active');
			document.querySelector('.slider-product__2-2.prod_2').classList.remove('active');
			document.querySelector('.slider-product__2-3.prod_2').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_pink') && targetElement.classList.contains('prod_2')) {
			document.querySelector('.info-product__color_btn_brown.prod_2').classList.remove('active');
			document.querySelector('.info-product__color_btn_pink.prod_2').classList.add('active');
			document.querySelector('.info-product__color_btn_purple.prod_2').classList.remove('active');
			document.querySelector('.slider-product__2-1.prod_2').classList.remove('active');
			document.querySelector('.slider-product__2-2.prod_2').classList.add('active');
			document.querySelector('.slider-product__2-3.prod_2').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_purple') && targetElement.classList.contains('prod_2')) {
			document.querySelector('.info-product__color_btn_brown.prod_2').classList.remove('active');
			document.querySelector('.info-product__color_btn_pink.prod_2').classList.remove('active');
			document.querySelector('.info-product__color_btn_purple.prod_2').classList.add('active');
			document.querySelector('.slider-product__2-1.prod_2').classList.remove('active');
			document.querySelector('.slider-product__2-2.prod_2').classList.remove('active');
			document.querySelector('.slider-product__2-3.prod_2').classList.add('active');
		}

		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_white') && targetElement.classList.contains('prod_3')) {
			document.querySelector('.info-product__color_btn_white.prod_3').classList.add('active');
			document.querySelector('.info-product__color_btn_yellow.prod_3').classList.remove('active');
			document.querySelector('.info-product__color_btn_pink.prod_3').classList.remove('active');
			document.querySelector('.slider-product__3-1.prod_3').classList.add('active');
			document.querySelector('.slider-product__3-2.prod_3').classList.remove('active');
			document.querySelector('.slider-product__3-3.prod_3').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_yellow') && targetElement.classList.contains('prod_3')) {
			document.querySelector('.info-product__color_btn_white.prod_3').classList.remove('active');
			document.querySelector('.info-product__color_btn_yellow.prod_3').classList.add('active');
			document.querySelector('.info-product__color_btn_pink.prod_3').classList.remove('active');
			document.querySelector('.slider-product__3-1.prod_3').classList.remove('active');
			document.querySelector('.slider-product__3-2.prod_3').classList.add('active');
			document.querySelector('.slider-product__3-3.prod_3').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_pink') && targetElement.classList.contains('prod_3')) {
			document.querySelector('.info-product__color_btn_white.prod_3').classList.remove('active');
			document.querySelector('.info-product__color_btn_yellow.prod_3').classList.remove('active');
			document.querySelector('.info-product__color_btn_pink.prod_3').classList.add('active');
			document.querySelector('.slider-product__3-1.prod_3').classList.remove('active');
			document.querySelector('.slider-product__3-2.prod_3').classList.remove('active');
			document.querySelector('.slider-product__3-3.prod_3').classList.add('active');
		}

		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_gray') && targetElement.classList.contains('prod_4')) {
			document.querySelector('.info-product__color_btn_gray.prod_4').classList.add('active');
			document.querySelector('.info-product__color_btn_brown.prod_4').classList.remove('active');
			document.querySelector('.slider-product__4-1.prod_4').classList.add('active');
			document.querySelector('.slider-product__4-2.prod_4').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_brown') && targetElement.classList.contains('prod_4')) {
			document.querySelector('.info-product__color_btn_gray.prod_4').classList.remove('active');
			document.querySelector('.info-product__color_btn_brown.prod_4').classList.add('active');
			document.querySelector('.slider-product__4-1.prod_4').classList.remove('active');
			document.querySelector('.slider-product__4-2.prod_4').classList.add('active');
		}

		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_blue') && targetElement.classList.contains('prod_5')) {
			document.querySelector('.info-product__color_btn_blue.prod_5').classList.add('active');
			document.querySelector('.info-product__color_btn_yellow.prod_5').classList.remove('active');
			document.querySelector('.slider-product__5-1.prod_5').classList.add('active');
			document.querySelector('.slider-product__5-2.prod_5').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_yellow') && targetElement.classList.contains('prod_5')) {
			document.querySelector('.info-product__color_btn_blue.prod_5').classList.remove('active');
			document.querySelector('.info-product__color_btn_yellow.prod_5').classList.add('active');
			document.querySelector('.slider-product__5-1.prod_5').classList.remove('active');
			document.querySelector('.slider-product__5-2.prod_5').classList.add('active');
		}

		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_gray') && targetElement.classList.contains('prod_6')) {
			document.querySelector('.info-product__color_btn_gray.prod_6').classList.add('active');
			document.querySelector('.info-product__color_btn_pink.prod_6').classList.remove('active');
			document.querySelector('.slider-product__6-1.prod_6').classList.add('active');
			document.querySelector('.slider-product__6-2.prod_6').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_pink') && targetElement.classList.contains('prod_6')) {
			document.querySelector('.info-product__color_btn_gray.prod_6').classList.remove('active');
			document.querySelector('.info-product__color_btn_pink.prod_6').classList.add('active');
			document.querySelector('.slider-product__6-1.prod_6').classList.remove('active');
			document.querySelector('.slider-product__6-2.prod_6').classList.add('active');
		}

		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_gray') && targetElement.classList.contains('prod_7')) {
			document.querySelector('.info-product__color_btn_gray.prod_7').classList.add('active');
			document.querySelector('.info-product__color_btn_brown.prod_7').classList.remove('active');
			document.querySelector('.info-product__color_btn_pink.prod_7').classList.remove('active');
			document.querySelector('.info-product__color_btn_blue.prod_7').classList.remove('active');
			document.querySelector('.slider-product__7-1.prod_7').classList.add('active');
			document.querySelector('.slider-product__7-2.prod_7').classList.remove('active');
			document.querySelector('.slider-product__7-3.prod_7').classList.remove('active');
			document.querySelector('.slider-product__7-4.prod_7').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_brown') && targetElement.classList.contains('prod_7')) {
			document.querySelector('.info-product__color_btn_gray.prod_7').classList.remove('active');
			document.querySelector('.info-product__color_btn_brown.prod_7').classList.add('active');
			document.querySelector('.info-product__color_btn_pink.prod_7').classList.remove('active');
			document.querySelector('.info-product__color_btn_blue.prod_7').classList.remove('active');
			document.querySelector('.slider-product__7-1.prod_7').classList.remove('active');
			document.querySelector('.slider-product__7-2.prod_7').classList.add('active');
			document.querySelector('.slider-product__7-3.prod_7').classList.remove('active');
			document.querySelector('.slider-product__7-4.prod_7').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_pink') && targetElement.classList.contains('prod_7')) {
			document.querySelector('.info-product__color_btn_gray.prod_7').classList.remove('active');
			document.querySelector('.info-product__color_btn_brown.prod_7').classList.remove('active');
			document.querySelector('.info-product__color_btn_pink.prod_7').classList.add('active');
			document.querySelector('.info-product__color_btn_blue.prod_7').classList.remove('active');
			document.querySelector('.slider-product__7-1.prod_7').classList.remove('active');
			document.querySelector('.slider-product__7-2.prod_7').classList.remove('active');
			document.querySelector('.slider-product__7-3.prod_7').classList.add('active');
			document.querySelector('.slider-product__7-4.prod_7').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_blue') && targetElement.classList.contains('prod_7')) {
			document.querySelector('.info-product__color_btn_gray.prod_7').classList.remove('active');
			document.querySelector('.info-product__color_btn_brown.prod_7').classList.remove('active');
			document.querySelector('.info-product__color_btn_pink.prod_7').classList.remove('active');
			document.querySelector('.info-product__color_btn_blue.prod_7').classList.add('active');
			document.querySelector('.slider-product__7-1.prod_7').classList.remove('active');
			document.querySelector('.slider-product__7-2.prod_7').classList.remove('active');
			document.querySelector('.slider-product__7-3.prod_7').classList.remove('active');
			document.querySelector('.slider-product__7-4.prod_7').classList.add('active');
		}

		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_gray') && targetElement.classList.contains('prod_8')) {
			document.querySelector('.info-product__color_btn_gray.prod_8').classList.add('active');
			document.querySelector('.info-product__color_btn_brown.prod_8').classList.remove('active');
			document.querySelector('.slider-product__8-1.prod_8').classList.add('active');
			document.querySelector('.slider-product__8-2.prod_8').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_brown') && targetElement.classList.contains('prod_8')) {
			document.querySelector('.info-product__color_btn_gray.prod_8').classList.remove('active');
			document.querySelector('.info-product__color_btn_brown.prod_8').classList.add('active');
			document.querySelector('.slider-product__8-1.prod_8').classList.remove('active');
			document.querySelector('.slider-product__8-2.prod_8').classList.add('active');
		}

		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_pink') && targetElement.classList.contains('prod_9')) {
			document.querySelector('.info-product__color_btn_pink.prod_9').classList.add('active');
			document.querySelector('.info-product__color_btn_green.prod_9').classList.remove('active');
			document.querySelector('.info-product__color_btn_blue.prod_9').classList.remove('active');
			document.querySelector('.slider-product__9-1.prod_9').classList.add('active');
			document.querySelector('.slider-product__9-2.prod_9').classList.remove('active');
			document.querySelector('.slider-product__9-3.prod_9').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_green') && targetElement.classList.contains('prod_9')) {
			document.querySelector('.info-product__color_btn_pink.prod_9').classList.remove('active');
			document.querySelector('.info-product__color_btn_green.prod_9').classList.add('active');
			document.querySelector('.info-product__color_btn_blue.prod_9').classList.remove('active');
			document.querySelector('.slider-product__9-1.prod_9').classList.remove('active');
			document.querySelector('.slider-product__9-2.prod_9').classList.add('active');
			document.querySelector('.slider-product__9-3.prod_9').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_blue') && targetElement.classList.contains('prod_9')) {
			document.querySelector('.info-product__color_btn_pink.prod_9').classList.remove('active');
			document.querySelector('.info-product__color_btn_green.prod_9').classList.remove('active');
			document.querySelector('.info-product__color_btn_blue.prod_9').classList.add('active');
			document.querySelector('.slider-product__9-1.prod_9').classList.remove('active');
			document.querySelector('.slider-product__9-2.prod_9').classList.remove('active');
			document.querySelector('.slider-product__9-3.prod_9').classList.add('active');
		}

		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_yellow') && targetElement.classList.contains('prod_10')) {
			document.querySelector('.info-product__color_btn_yellow.prod_10').classList.add('active');
			document.querySelector('.info-product__color_btn_pink.prod_10').classList.remove('active');
			document.querySelector('.info-product__color_btn_blue.prod_10').classList.remove('active');
			document.querySelector('.slider-product__10-1.prod_10').classList.add('active');
			document.querySelector('.slider-product__10-2.prod_10').classList.remove('active');
			document.querySelector('.slider-product__10-3.prod_10').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_pink') && targetElement.classList.contains('prod_10')) {
			document.querySelector('.info-product__color_btn_yellow.prod_10').classList.remove('active');
			document.querySelector('.info-product__color_btn_pink.prod_10').classList.add('active');
			document.querySelector('.info-product__color_btn_blue.prod_10').classList.remove('active');
			document.querySelector('.slider-product__10-1.prod_10').classList.remove('active');
			document.querySelector('.slider-product__10-2.prod_10').classList.add('active');
			document.querySelector('.slider-product__10-3.prod_10').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_blue') && targetElement.classList.contains('prod_10')) {
			document.querySelector('.info-product__color_btn_yellow.prod_10').classList.remove('active');
			document.querySelector('.info-product__color_btn_pink.prod_10').classList.remove('active');
			document.querySelector('.info-product__color_btn_blue.prod_10').classList.add('active');
			document.querySelector('.slider-product__10-1.prod_10').classList.remove('active');
			document.querySelector('.slider-product__10-2.prod_10').classList.remove('active');
			document.querySelector('.slider-product__10-3.prod_10').classList.add('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_blue') && targetElement.classList.contains('prod_11')) {
			document.querySelector('.info-product__color_btn_blue.prod_11').classList.add('active');
			document.querySelector('.info-product__color_btn_green.prod_11').classList.remove('active');
			document.querySelector('.info-product__color_btn_pink.prod_11').classList.remove('active');
			document.querySelector('.slider-product__11-1.prod_11').classList.add('active');
			document.querySelector('.slider-product__11-2.prod_11').classList.remove('active');
			document.querySelector('.slider-product__11-3.prod_11').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_green') && targetElement.classList.contains('prod_11')) {
			document.querySelector('.info-product__color_btn_blue.prod_11').classList.remove('active');
			document.querySelector('.info-product__color_btn_green.prod_11').classList.add('active');
			document.querySelector('.info-product__color_btn_pink.prod_11').classList.remove('active');
			document.querySelector('.slider-product__11-1.prod_11').classList.remove('active');
			document.querySelector('.slider-product__11-2.prod_11').classList.add('active');
			document.querySelector('.slider-product__11-3.prod_11').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_pink') && targetElement.classList.contains('prod_11')) {
			document.querySelector('.info-product__color_btn_blue.prod_11').classList.remove('active');
			document.querySelector('.info-product__color_btn_green.prod_11').classList.remove('active');
			document.querySelector('.info-product__color_btn_pink.prod_11').classList.add('active');
			document.querySelector('.slider-product__11-1.prod_11').classList.remove('active');
			document.querySelector('.slider-product__11-2.prod_11').classList.remove('active');
			document.querySelector('.slider-product__11-3.prod_11').classList.add('active');
		}

		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_gray') && targetElement.classList.contains('prod_12')) {
			document.querySelector('.info-product__color_btn_gray.prod_12').classList.add('active');
			document.querySelector('.info-product__color_btn_brown.prod_12').classList.remove('active');
			document.querySelector('.slider-product__12-1.prod_12').classList.add('active');
			document.querySelector('.slider-product__12-2.prod_12').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_brown') && targetElement.classList.contains('prod_12')) {
			document.querySelector('.info-product__color_btn_gray.prod_12').classList.remove('active');
			document.querySelector('.info-product__color_btn_brown.prod_12').classList.add('active');
			document.querySelector('.slider-product__12-1.prod_12').classList.remove('active');
			document.querySelector('.slider-product__12-2.prod_12').classList.add('active');
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

	// function loadProducts(data) {
	// 	const productsItems = document.querySelector('.products__body');

	// 	data.products.forEach(item => {
	// 		const productId = item.id;
	// 		const productUrl = item.url;
	// 		const productImage = item.image;
	// 		const productTitle = item.title;
	// 		const productText = item.text;
	// 		const productPrice = item.price;
	// 		const productOldPrice = item.priceOld;
	// 		const productShareUrl = item.shareUrl;
	// 		const productLikeUrl = item.likeUrl;
	// 		const productLabels = item.labels;

	// 		let productTemplateStart = `<article data-pid="${productId}" class="product">`;
	// 		let productTemplateEnd = `</article>`;

	// 		let productTemplateContentStart = `<div class="product__content">`;
	// 		let productTemplateContentEnd = `</div>`;

	// 		let productTemplateImage = `
	// 			<a href="${productUrl}" class="product__image _ibg">
	// 				<img src="img/products/${productImage}" alt="${productTitle}">
	// 			</a>
	// 		`;

	// 		let productTemplateLabels = '';
	// 		if (productLabels) {
	// 			let productTemplateLabelsStart = `<div class="product__labels">`;
	// 			let productTemplateLabelsEnd = `</div>`;
	// 			let productTemplateLabelsContent = '';

	// 			productLabels.forEach(labelItem => {
	// 				productTemplateLabelsContent += `<div class="product__label product__label_${labelItem.type}">${labelItem.value}</div>`;
	// 			});

	// 			productTemplateLabels += productTemplateLabelsStart;
	// 			productTemplateLabels += productTemplateLabelsContent;
	// 			productTemplateLabels += productTemplateLabelsEnd;
	// 		}

	// 		let productTemplateInfoStart = `
	// 			<div class="product__info info-product">
	// 				<h3 class="info-product__title">${productTitle}</h3>
	// 				<div class="info-product__text">${productText}</div>
	// 		`;
	// 		let productTemplateInfoEnd = `</div>`;

	// 		let productTemplatePrices = '';
	// 		let productTemplatePricesStart = `<div class="info-product__prices">`;
	// 		let productTemplatePricesCurrent = `<div class="info-product__current-price">Rp ${productPrice}</div>`;
	// 		let productTemplatePricesOld = `<div class="info-product__old-price">Rp ${productOldPrice}</div>`;
	// 		let productTemplatePricesEnd = `</div>`;

	// 		productTemplatePrices = productTemplatePricesStart;
	// 		productTemplatePrices += productTemplatePricesCurrent;
	// 		if (productOldPrice) {
	// 			productTemplatePrices += productTemplatePricesOld;
	// 		}
	// 		productTemplatePrices += productTemplatePricesEnd;

	// 		let productTemplateActions = `
	// 			<div class="product__actions actions-product">
	// 				<a href="" class="actions-product__btn">Add to cart</a>
	// 				<div class="actions-product__items">
	// 					<a href="${productShareUrl}" class="actions-product__item _icon-share">Share</a>
	// 					<a href="${productLikeUrl}" class="actions-product__item _icon-favorite">Like</a>
	// 				</div>
	// 			</div>
	// 		`;
	// 		let productTemplate = '';
	// 		productTemplate += productTemplateStart;
	// 		productTemplate += productTemplateContentStart;
	// 		productTemplate += productTemplateImage;
	// 		productTemplate += productTemplateLabels;
	// 		productTemplate += productTemplateInfoStart;
	// 		productTemplate += productTemplatePrices;
	// 		productTemplate += productTemplateInfoEnd;
	// 		productTemplate += productTemplateActions;
	// 		productTemplate += productTemplateContentEnd;
	// 		productTemplate += productTemplateEnd;

	// 		productsItems.insertAdjacentHTML('beforeend', productTemplate);

	// 	});

	// }

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
//isIE or isMobile
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('html').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('html').classList.add('_touch');
}

//ibg
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();

//Menu
let unlock = true;

let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}

//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}

// SPOLLERS
/*
Для родителя слойлеров пишем атрибут data-spollers
Для заголовков слойлеров пишем атрибут data-spoller
Если нужно включать\выключать работу спойлеров на разных размерах экранов
пишем параметры ширины и типа брейкпоинта.
Например: 
data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoller
*/

const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {
	// Получение обычных слойлеров
	const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
		return !item.dataset.spollers.split(",")[0];
	});
	// Инициализация обычных слойлеров
	if (spollersRegular.length > 0) {
		initSpollers(spollersRegular);
	}

	// Получение слойлеров с медиа запросами
	const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
		return item.dataset.spollers.split(",")[0];
	});

	// Инициализация слойлеров с медиа запросами
	if (spollersMedia.length > 0) {
		const breakpointsArray = [];
		spollersMedia.forEach(item => {
			const params = item.dataset.spollers;
			const breakpoint = {};
			const paramsArray = params.split(",");
			breakpoint.value = paramsArray[0];
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
			breakpoint.item = item;
			breakpointsArray.push(breakpoint);
		});

		// Получаем уникальные брейкпоинты
		let mediaQueries = breakpointsArray.map(function (item) {
			return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
		});
		mediaQueries = mediaQueries.filter(function (item, index, self) {
			return self.indexOf(item) === index;
		});

		// Работаем с каждым брейкпоинтом
		mediaQueries.forEach(breakpoint => {
			const paramsArray = breakpoint.split(",");
			const mediaBreakpoint = paramsArray[1];
			const mediaType = paramsArray[2];
			const matchMedia = window.matchMedia(paramsArray[0]);

			// Объекты с нужными условиями
			const spollersArray = breakpointsArray.filter(function (item) {
				if (item.value === mediaBreakpoint && item.type === mediaType) {
					return true;
				}
			});
			// Событие
			matchMedia.addListener(function () {
				initSpollers(spollersArray, matchMedia);
			});
			initSpollers(spollersArray, matchMedia);
		});
	}
	// Инициализация
	function initSpollers(spollersArray, matchMedia = false) {
		spollersArray.forEach(spollersBlock => {
			spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
			if (matchMedia.matches || !matchMedia) {
				spollersBlock.classList.add('_init');
				initSpollerBody(spollersBlock);
				spollersBlock.addEventListener("click", setSpollerAction);
			} else {
				spollersBlock.classList.remove('_init');
				initSpollerBody(spollersBlock, false);
				spollersBlock.removeEventListener("click", setSpollerAction);
			}
		});
	}
	// Работа с контентом
	function initSpollerBody(spollersBlock, hideSpollerBody = true) {
		const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
		if (spollerTitles.length > 0) {
			spollerTitles.forEach(spollerTitle => {
				if (hideSpollerBody) {
					spollerTitle.removeAttribute('tabindex');
					if (!spollerTitle.classList.contains('_active')) {
						spollerTitle.nextElementSibling.hidden = true;
					}
				} else {
					spollerTitle.setAttribute('tabindex', '-1');
					spollerTitle.nextElementSibling.hidden = false;
				}
			});
		}
	}
	function setSpollerAction(e) {
		const el = e.target;
		if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
			const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
			const spollersBlock = spollerTitle.closest('[data-spollers]');
			const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
			if (!spollersBlock.querySelectorAll('._slide').length) {
				if (oneSpoller && !spollerTitle.classList.contains('_active')) {
					hideSpollersBody(spollersBlock);
				}
				spollerTitle.classList.toggle('_active');
				_slideToggle(spollerTitle.nextElementSibling, 500);
			}
			e.preventDefault();
		}
	}
	function hideSpollersBody(spollersBlock) {
		const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
		if (spollerActiveTitle) {
			spollerActiveTitle.classList.remove('_active');
			_slideUp(spollerActiveTitle.nextElementSibling, 500);
		}
	}
}

//Popups
let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
for (let index = 0; index < popup_link.length; index++) {
	const el = popup_link[index];
	el.addEventListener('click', function (e) {
		if (unlock) {
			let item = el.getAttribute('href').replace('#', '');
			let productTitle = el.parentElement.parentElement.querySelector('.info-product__title').innerHTML.toString();
			let productColor = getColorName(el.parentElement.parentElement.querySelector('.info-product__color').querySelector('.active'));
			// console.log('productColor ', productColor);
			let video = el.getAttribute('data-video');
			popup_open(item, productTitle, productColor, video);
		}
		e.preventDefault();
	})
}
for (let index = 0; index < popups.length; index++) {
	const popup = popups[index];
	popup.addEventListener("click", function (e) {
		if (!e.target.closest('.popup__body')) {
			popup_close(e.target.closest('.popup'));
		}
	});
}
function getColorName(el) {
	if (el.classList.contains('info-product__color_btn_gray')) return 'Сірий';
	if (el.classList.contains('info-product__color_btn_brown')) return 'Коричневий';
	if (el.classList.contains('info-product__color_btn_white')) return 'Білий';
	if (el.classList.contains('info-product__color_btn_pink')) return 'Розовий';
	if (el.classList.contains('info-product__color_btn_purple')) return 'Фіолетовий';
	if (el.classList.contains('info-product__color_btn_yellow')) return 'Жовтий';
	if (el.classList.contains('info-product__color_btn_blue')) return 'Синій';
	if (el.classList.contains('info-product__color_btn_green')) return 'Зелений';
}
function popup_open(item, productTitle, productColor, video = '') {
	let activePopup = document.querySelectorAll('.popup._active');
	if (activePopup.length > 0) {
		popup_close('', false);
	}
	let curent_popup = document.querySelector('.popup_' + item);
	curent_popup.querySelector('.popup-body-title').innerHTML = `Замовити іграшку-плед ${productTitle}`
	curent_popup.querySelector('.toy_name_field').value = productTitle;
	curent_popup.querySelector('.toy_color_field').value = productColor;
	if (curent_popup && unlock) {
		if (video != '' && video != null) {
			let popup_video = document.querySelector('.popup_video');
			popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		}
		if (!document.querySelector('.menu__body._active')) {
			body_lock_add(500);
		}
		curent_popup.classList.add('_active');
		history.pushState('', '', '#' + item);
	}
}
function popup_close(item, bodyUnlock = true) {
	if (unlock) {
		if (!item) {
			for (let index = 0; index < popups.length; index++) {
				const popup = popups[index];
				let video = popup.querySelector('.popup__video');
				if (video) {
					video.innerHTML = '';
				}
				popup.classList.remove('_active');
			}
		} else {
			let video = item.querySelector('.popup__video');
			if (video) {
				video.innerHTML = '';
			}
			item.classList.remove('_active');
		}
		if (!document.querySelector('.menu__body._active') && bodyUnlock) {
			body_lock_remove(500);
		}
		history.pushState('', '', window.location.href.split('#')[0]);
	}
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
	for (let index = 0; index < popup_close_icon.length; index++) {
		const el = popup_close_icon[index];
		el.addEventListener('click', function () {
			popup_close(el.closest('.popup'));
		})
	}
}
document.addEventListener('keydown', function (e) {
	if (e.code === 'Escape') {
		popup_close();
	}
});

//Gallery
let gallery = document.querySelectorAll('._gallery');
if (gallery) {
	gallery_init();
}
function gallery_init() {
	for (let index = 0; index < gallery.length; index++) {
		const el = gallery[index];
		lightGallery(el, {
			counter: false,
			selector: 'a',
			download: false
		});
	}
}

//SlideToggle
let _slideUp = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}

//RemoveClasses
function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}

//IsHidden
function _is_hidden(el) {
	return (el.offsetParent === null)
}
//===================================================================================================================
function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
//let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
let forms = document.querySelectorAll('form');
if (forms.length > 0) {
	for (let index = 0; index < forms.length; index++) {
		const el = forms[index];
		el.addEventListener('submit', form_submit);
	}
}
async function form_submit(e) {
	let btn = e.target;
	let form = btn.closest('form');
	let error = form_validate(form);
	if (error == 0) {
		let formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
		let formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
		const message = form.getAttribute('data-message');
		const ajax = form.getAttribute('data-ajax');

		//SendForm
		if (ajax) {
			e.preventDefault();
			let formData = new FormData(form);
			form.classList.add('_sending');
			let response = await fetch(formAction, {
				method: formMethod,
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				form.classList.remove('_sending');
				if (message) {
					popup_open(message + '-message');
				}
				form_clean(form);
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		}
		// If test
		if (form.hasAttribute('data-test')) {
			e.preventDefault();
			popup_open(message + '-message');
			form_clean(form);
		}
	} else {
		let form_error = form.querySelectorAll('._error');
		if (form_error && form.classList.contains('_goto-error')) {
			_goto(form_error[0], 1000, 50);
		}
		e.preventDefault();
	}
}
function form_validate(form) {
	let error = 0;
	let form_req = form.querySelectorAll('._req');
	if (form_req.length > 0) {
		for (let index = 0; index < form_req.length; index++) {
			const el = form_req[index];
			if (!_is_hidden(el)) {
				error += form_validate_input(el);
			}
		}
	}
	return error;
}
function form_validate_input(input) {
	let error = 0;
	let input_g_value = input.getAttribute('data-value');

	if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
		if (input.value != input_g_value) {
			let em = input.value.replace(" ", "");
			input.value = em;
		}
		if (email_test(input) || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
		form_add_error(input);
		error++;
	} else {
		if (input.value == '' || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	}
	return error;
}
function form_add_error(input) {
	input.classList.add('_error');
	input.parentElement.classList.add('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
	let input_error_text = input.getAttribute('data-error');
	if (input_error_text && input_error_text != '') {
		input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
	}
}
function form_remove_error(input) {
	input.classList.remove('_error');
	input.parentElement.classList.remove('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
}
function form_clean(form) {
	let inputs = form.querySelectorAll('input,textarea');
	for (let index = 0; index < inputs.length; index++) {
		const el = inputs[index];
		el.parentElement.classList.remove('_focus');
		el.classList.remove('_focus');
		el.value = el.getAttribute('data-value');
	}
	let checkboxes = form.querySelectorAll('.checkbox__input');
	if (checkboxes.length > 0) {
		for (let index = 0; index < checkboxes.length; index++) {
			const checkbox = checkboxes[index];
			checkbox.checked = false;
		}
	}
	let selects = form.querySelectorAll('select');
	if (selects.length > 0) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_default_value = select.getAttribute('data-default');
			select.value = select_default_value;
			select_item(select);
		}
	}
}

let viewPass = document.querySelectorAll('.form__viewpass');
for (let index = 0; index < viewPass.length; index++) {
	const element = viewPass[index];
	element.addEventListener("click", function (e) {
		if (element.classList.contains('_active')) {
			element.parentElement.querySelector('input').setAttribute("type", "password");
		} else {
			element.parentElement.querySelector('input').setAttribute("type", "text");
		}
		element.classList.toggle('_active');
	});
}

//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.code === 'Escape') {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select') && !e.target.classList.contains('_option')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div hidden class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const selectTitle = select.querySelector('.select__title');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	selectTitle.addEventListener('click', function (e) {
		selectItemActions();
	});

	function selectMultiItems() {
		let selectedOptions = select.querySelectorAll('.select__option');
		let originalOptions = original.querySelectorAll('option');
		let selectedOptionsText = [];
		for (let index = 0; index < selectedOptions.length; index++) {
			const selectedOption = selectedOptions[index];
			originalOptions[index].removeAttribute('selected');
			if (selectedOption.classList.contains('_selected')) {
				const selectOptionText = selectedOption.innerHTML;
				selectedOptionsText.push(selectOptionText);
				originalOptions[index].setAttribute('selected', 'selected');
			}
		}
		select.querySelector('.select__value').innerHTML = '<span>' + selectedOptionsText + '</span>';
	}
	function selectItemActions(type) {
		if (!type) {
			let selects = document.querySelectorAll('.select');
			for (let index = 0; index < selects.length; index++) {
				const select = selects[index];
				const select_body_options = select.querySelector('.select__options');
				if (select != select_item.closest('.select')) {
					select.classList.remove('_active');
					_slideUp(select_body_options, 100);
				}
			}
			_slideToggle(select_body_options, 100);
			select.classList.toggle('_active');
		}
	}
	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value && !original.hasAttribute('multiple')) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				if (original.hasAttribute('multiple')) {
					select_option.classList.toggle('_selected');
					selectMultiItems();
				} else {
					select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
					original.value = select_option_value;
					select_option.style.display = 'none';
				}
			}
			let type;
			if (original.hasAttribute('multiple')) {
				type = 'multiple';
			}
			selectItemActions(type);
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.innerHTML;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}

//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const input = inputs[index];
			const input_g_value = input.getAttribute('data-value');
			input_placeholder_add(input);
			if (input.value != '' && input.value != input_g_value) {
				input_focus_add(input);
			}
			input.addEventListener('focus', function (e) {
				if (input.value == input_g_value) {
					input_focus_add(input);
					input.value = '';
				}
				if (input.getAttribute('data-type') === "pass" && !input.parentElement.querySelector('.form__viewpass').classList.contains('_active')) {
					input.setAttribute('type', 'password');
				}
				if (input.classList.contains('_date')) {
					/*
					input.classList.add('_mask');
					Inputmask("99.99.9999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
					*/
				}
				if (input.classList.contains('_phone')) {
					//'+7(999) 999 9999'
					//'+38(999) 999 9999'
					//'+375(99)999-99-99'
					input.classList.add('_mask');
					Inputmask("+375 (99) 9999999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				if (input.classList.contains('_digital')) {
					input.classList.add('_mask');
					Inputmask("9{1,}", {
						"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				form_remove_error(input);
			});
			input.addEventListener('blur', function (e) {
				if (input.value == '') {
					input.value = input_g_value;
					input_focus_remove(input);
					if (input.classList.contains('_mask')) {
						input_clear_mask(input, input_g_value);
					}
					if (input.getAttribute('data-type') === "pass") {
						input.setAttribute('type', 'text');
					}
				}
			});
			if (input.classList.contains('_date')) {
				const calendarItem = datepicker(input, {
					customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
					customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
					overlayButton: 'Применить',
					overlayPlaceholder: 'Год (4 цифры)',
					startDay: 1,
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					},
					onSelect: function (input, instance, date) {
						input_focus_add(input.el);
					}
				});
				const dataFrom = input.getAttribute('data-from');
				const dataTo = input.getAttribute('data-to');
				if (dataFrom) {
					calendarItem.setMin(new Date(dataFrom));
				}
				if (dataTo) {
					calendarItem.setMax(new Date(dataTo));
				}
			}
		}
	}
}
function input_placeholder_add(input) {
	const input_g_value = input.getAttribute('data-value');
	if (input.value == '' && input_g_value != '') {
		input.value = input_g_value;
	}
}
function input_focus_add(input) {
	input.classList.add('_focus');
	input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
	input.classList.remove('_focus');
	input.parentElement.classList.remove('_focus');
}
function input_clear_mask(input, input_g_value) {
	input.inputmask.remove();
	input.value = input_g_value;
	input_focus_remove(input);
}

//QUANTITY
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}

//RANGE
const priceSlider = document.querySelector('.price-filter__slider');
if (priceSlider) {

	let textFrom = priceSlider.getAttribute('data-from');
	let textTo = priceSlider.getAttribute('data-to');

	noUiSlider.create(priceSlider, {
		start: [0, 200000],
		connect: true,
		tooltips: [wNumb({ decimals: 0, prefix: textFrom + ' ' }), wNumb({ decimals: 0, prefix: textTo + ' ' })],
		range: {
			'min': [0],
			'max': [200000]
		}
	});

	/*
	const priceStart = document.getElementById('price-start');
	const priceEnd = document.getElementById('price-end');
	priceStart.addEventListener('change', setPriceValues);
	priceEnd.addEventListener('change', setPriceValues);
	*/

	function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if (priceStart.value != '') {
			priceStartValue = priceStart.value;
		}
		if (priceEnd.value != '') {
			priceEndValue = priceEnd.value;
		}
		priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
	}
}
//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

if (document.querySelector('.slider-main__body')) {
	new Swiper('.slider-main__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 32,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
		// Dotts
		pagination: {
			el: '.controls-slider-main__dotts',
			clickable: true,
		},
		// Arrows
		navigation: {
			nextEl: '.slider-main .slider-arrow_next',
			prevEl: '.slider-main .slider-arrow_prev',
		}
	});
}

if (document.querySelector('.slider-rooms__body')) {
	new Swiper('.slider-rooms__body', {
		observer: true,
		observeParents: true,
		slidesPerView: `auto`,
		spaceBetween: 24,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
		// Dotts
		pagination: {
			el: '.slider-rooms__dotts',
			clickable: true,
		},
		// Arrows
		navigation: {
			nextEl: '.slider-rooms .slider-arrow_next',
			prevEl: '.slider-rooms .slider-arrow_prev',
		}
	});
}

if (document.querySelector('.slider-tips__body')) {
	new Swiper('.slider-tips__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 32,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
		centeredSlides: true,
		// Dotts
		pagination: {
			el: '.slider-tips__dotts',
			clickable: true,
		},
		// Arrows
		navigation: {
			nextEl: '.slider-tips .slider-arrow_next',
			prevEl: '.slider-tips .slider-arrow_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1.1,
				spaceBetween: 15
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 32
			}
		}
	});
}

if (document.querySelector('.slider-product__1-1')) {
	new Swiper('.slider-product__1-1', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__1-2')) {
	new Swiper('.slider-product__1-2', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__1-3')) {
	new Swiper('.slider-product__1-3', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}

if (document.querySelector('.slider-product__2-1')) {
	new Swiper('.slider-product__2-1', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__2-2')) {
	new Swiper('.slider-product__2-2', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__2-3')) {
	new Swiper('.slider-product__2-3', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}

if (document.querySelector('.slider-product__3-1')) {
	new Swiper('.slider-product__3-1', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__3-2')) {
	new Swiper('.slider-product__3-2', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__3-3')) {
	new Swiper('.slider-product__3-3', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}

if (document.querySelector('.slider-product__4-1')) {
	new Swiper('.slider-product__4-1', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__4-2')) {
	new Swiper('.slider-product__4-2', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__5-1')) {
	new Swiper('.slider-product__5-1', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__5-2')) {
	new Swiper('.slider-product__5-2', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__6-1')) {
	new Swiper('.slider-product__6-1', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__6-2')) {
	new Swiper('.slider-product__6-2', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__7-1')) {
	new Swiper('.slider-product__7-1', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__7-2')) {
	new Swiper('.slider-product__7-2', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__7-3')) {
	new Swiper('.slider-product__7-3', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__7-4')) {
	new Swiper('.slider-product__7-4', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__8-1')) {
	new Swiper('.slider-product__8-1', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__8-2')) {
	new Swiper('.slider-product__8-2', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__9-1')) {
	new Swiper('.slider-product__9-1', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__9-2')) {
	new Swiper('.slider-product__9-2', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__9-3')) {
	new Swiper('.slider-product__9-3', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__10-1')) {
	new Swiper('.slider-product__10-1', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__10-2')) {
	new Swiper('.slider-product__10-2', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__10-3')) {
	new Swiper('.slider-product__10-3', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__11-1')) {
	new Swiper('.slider-product__11-1', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__11-2')) {
	new Swiper('.slider-product__11-2', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__11-3')) {
	new Swiper('.slider-product__11-3', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__12-1')) {
	new Swiper('.slider-product__12-1', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}
if (document.querySelector('.slider-product__12-2')) {
	new Swiper('.slider-product__12-2', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 5,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
	});
}

// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";


function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();