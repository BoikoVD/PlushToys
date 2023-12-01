

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
			document.querySelector('.product__slider-btns.prod_1-1').classList.add('active');
			document.querySelector('.product__slider-btns.prod_1-2').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_1-3').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_brown') && targetElement.classList.contains('prod_1')) {
			document.querySelector('.info-product__color_btn_gray.prod_1').classList.remove('active');
			document.querySelector('.info-product__color_btn_brown.prod_1').classList.add('active');
			document.querySelector('.info-product__color_btn_white.prod_1').classList.remove('active');
			document.querySelector('.slider-product__1-1.prod_1').classList.remove('active');
			document.querySelector('.slider-product__1-2.prod_1').classList.add('active');
			document.querySelector('.slider-product__1-3.prod_1').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_1-1').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_1-2').classList.add('active');
			document.querySelector('.product__slider-btns.prod_1-3').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_white') && targetElement.classList.contains('prod_1')) {
			document.querySelector('.info-product__color_btn_gray').classList.remove('active');
			document.querySelector('.info-product__color_btn_brown').classList.remove('active');
			document.querySelector('.info-product__color_btn_white').classList.add('active');
			document.querySelector('.slider-product__1-1.prod_1').classList.remove('active');
			document.querySelector('.slider-product__1-2.prod_1').classList.remove('active');
			document.querySelector('.slider-product__1-3.prod_1').classList.add('active');
			document.querySelector('.product__slider-btns.prod_1-1').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_1-2').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_1-3').classList.add('active');
		}

		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_brown') && targetElement.classList.contains('prod_2')) {
			document.querySelector('.info-product__color_btn_brown.prod_2').classList.add('active');
			document.querySelector('.info-product__color_btn_pink.prod_2').classList.remove('active');
			document.querySelector('.info-product__color_btn_purple.prod_2').classList.remove('active');
			document.querySelector('.slider-product__2-1.prod_2').classList.add('active');
			document.querySelector('.slider-product__2-2.prod_2').classList.remove('active');
			document.querySelector('.slider-product__2-3.prod_2').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_2-1').classList.add('active');
			document.querySelector('.product__slider-btns.prod_2-2').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_2-3').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_pink') && targetElement.classList.contains('prod_2')) {
			document.querySelector('.info-product__color_btn_brown.prod_2').classList.remove('active');
			document.querySelector('.info-product__color_btn_pink.prod_2').classList.add('active');
			document.querySelector('.info-product__color_btn_purple.prod_2').classList.remove('active');
			document.querySelector('.slider-product__2-1.prod_2').classList.remove('active');
			document.querySelector('.slider-product__2-2.prod_2').classList.add('active');
			document.querySelector('.slider-product__2-3.prod_2').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_2-1').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_2-2').classList.add('active');
			document.querySelector('.product__slider-btns.prod_2-3').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_purple') && targetElement.classList.contains('prod_2')) {
			document.querySelector('.info-product__color_btn_brown.prod_2').classList.remove('active');
			document.querySelector('.info-product__color_btn_pink.prod_2').classList.remove('active');
			document.querySelector('.info-product__color_btn_purple.prod_2').classList.add('active');
			document.querySelector('.slider-product__2-1.prod_2').classList.remove('active');
			document.querySelector('.slider-product__2-2.prod_2').classList.remove('active');
			document.querySelector('.slider-product__2-3.prod_2').classList.add('active');
			document.querySelector('.product__slider-btns.prod_2-1').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_2-2').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_2-3').classList.add('active');
		}

		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_white') && targetElement.classList.contains('prod_3')) {
			document.querySelector('.info-product__color_btn_white.prod_3').classList.add('active');
			document.querySelector('.info-product__color_btn_yellow.prod_3').classList.remove('active');
			document.querySelector('.info-product__color_btn_pink.prod_3').classList.remove('active');
			document.querySelector('.slider-product__3-1.prod_3').classList.add('active');
			document.querySelector('.slider-product__3-2.prod_3').classList.remove('active');
			document.querySelector('.slider-product__3-3.prod_3').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_3-1').classList.add('active');
			document.querySelector('.product__slider-btns.prod_3-2').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_3-3').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_yellow') && targetElement.classList.contains('prod_3')) {
			document.querySelector('.info-product__color_btn_white.prod_3').classList.remove('active');
			document.querySelector('.info-product__color_btn_yellow.prod_3').classList.add('active');
			document.querySelector('.info-product__color_btn_pink.prod_3').classList.remove('active');
			document.querySelector('.slider-product__3-1.prod_3').classList.remove('active');
			document.querySelector('.slider-product__3-2.prod_3').classList.add('active');
			document.querySelector('.slider-product__3-3.prod_3').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_3-1').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_3-2').classList.add('active');
			document.querySelector('.product__slider-btns.prod_3-3').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_pink') && targetElement.classList.contains('prod_3')) {
			document.querySelector('.info-product__color_btn_white.prod_3').classList.remove('active');
			document.querySelector('.info-product__color_btn_yellow.prod_3').classList.remove('active');
			document.querySelector('.info-product__color_btn_pink.prod_3').classList.add('active');
			document.querySelector('.slider-product__3-1.prod_3').classList.remove('active');
			document.querySelector('.slider-product__3-2.prod_3').classList.remove('active');
			document.querySelector('.slider-product__3-3.prod_3').classList.add('active');
			document.querySelector('.product__slider-btns.prod_3-1').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_3-2').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_3-3').classList.add('active');
		}

		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_gray') && targetElement.classList.contains('prod_4')) {
			document.querySelector('.info-product__color_btn_gray.prod_4').classList.add('active');
			document.querySelector('.info-product__color_btn_brown.prod_4').classList.remove('active');
			document.querySelector('.slider-product__4-1.prod_4').classList.add('active');
			document.querySelector('.slider-product__4-2.prod_4').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_4-1').classList.add('active');
			document.querySelector('.product__slider-btns.prod_4-2').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_brown') && targetElement.classList.contains('prod_4')) {
			document.querySelector('.info-product__color_btn_gray.prod_4').classList.remove('active');
			document.querySelector('.info-product__color_btn_brown.prod_4').classList.add('active');
			document.querySelector('.slider-product__4-1.prod_4').classList.remove('active');
			document.querySelector('.slider-product__4-2.prod_4').classList.add('active');
			document.querySelector('.product__slider-btns.prod_4-1').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_4-2').classList.add('active');
		}

		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_blue') && targetElement.classList.contains('prod_5')) {
			document.querySelector('.info-product__color_btn_blue.prod_5').classList.add('active');
			document.querySelector('.info-product__color_btn_yellow.prod_5').classList.remove('active');
			document.querySelector('.slider-product__5-1.prod_5').classList.add('active');
			document.querySelector('.slider-product__5-2.prod_5').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_5-1').classList.add('active');
			document.querySelector('.product__slider-btns.prod_5-2').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_yellow') && targetElement.classList.contains('prod_5')) {
			document.querySelector('.info-product__color_btn_blue.prod_5').classList.remove('active');
			document.querySelector('.info-product__color_btn_yellow.prod_5').classList.add('active');
			document.querySelector('.slider-product__5-1.prod_5').classList.remove('active');
			document.querySelector('.slider-product__5-2.prod_5').classList.add('active');
			document.querySelector('.product__slider-btns.prod_5-1').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_5-2').classList.add('active');
		}

		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_gray') && targetElement.classList.contains('prod_6')) {
			document.querySelector('.info-product__color_btn_gray.prod_6').classList.add('active');
			document.querySelector('.info-product__color_btn_pink.prod_6').classList.remove('active');
			document.querySelector('.slider-product__6-1.prod_6').classList.add('active');
			document.querySelector('.slider-product__6-2.prod_6').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_6-1').classList.add('active');
			document.querySelector('.product__slider-btns.prod_6-2').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_pink') && targetElement.classList.contains('prod_6')) {
			document.querySelector('.info-product__color_btn_gray.prod_6').classList.remove('active');
			document.querySelector('.info-product__color_btn_pink.prod_6').classList.add('active');
			document.querySelector('.slider-product__6-1.prod_6').classList.remove('active');
			document.querySelector('.slider-product__6-2.prod_6').classList.add('active');
			document.querySelector('.product__slider-btns.prod_6-1').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_6-2').classList.add('active');
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
			document.querySelector('.product__slider-btns.prod_7-1').classList.add('active');
			document.querySelector('.product__slider-btns.prod_7-2').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_7-3').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_7-4').classList.remove('active');
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
			document.querySelector('.product__slider-btns.prod_7-1').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_7-2').classList.add('active');
			document.querySelector('.product__slider-btns.prod_7-3').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_7-4').classList.remove('active');
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
			document.querySelector('.product__slider-btns.prod_7-1').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_7-2').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_7-3').classList.add('active');
			document.querySelector('.product__slider-btns.prod_7-4').classList.remove('active');
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
			document.querySelector('.product__slider-btns.prod_7-1').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_7-2').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_7-3').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_7-4').classList.add('active');
		}

		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_gray') && targetElement.classList.contains('prod_8')) {
			document.querySelector('.info-product__color_btn_gray.prod_8').classList.add('active');
			document.querySelector('.info-product__color_btn_brown.prod_8').classList.remove('active');
			document.querySelector('.slider-product__8-1.prod_8').classList.add('active');
			document.querySelector('.slider-product__8-2.prod_8').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_8-1').classList.add('active');
			document.querySelector('.product__slider-btns.prod_8-2').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_brown') && targetElement.classList.contains('prod_8')) {
			document.querySelector('.info-product__color_btn_gray.prod_8').classList.remove('active');
			document.querySelector('.info-product__color_btn_brown.prod_8').classList.add('active');
			document.querySelector('.slider-product__8-1.prod_8').classList.remove('active');
			document.querySelector('.slider-product__8-2.prod_8').classList.add('active');
			document.querySelector('.product__slider-btns.prod_8-1').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_8-2').classList.add('active');
		}

		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_pink') && targetElement.classList.contains('prod_9')) {
			document.querySelector('.info-product__color_btn_pink.prod_9').classList.add('active');
			document.querySelector('.info-product__color_btn_green.prod_9').classList.remove('active');
			document.querySelector('.info-product__color_btn_blue.prod_9').classList.remove('active');
			document.querySelector('.slider-product__9-1.prod_9').classList.add('active');
			document.querySelector('.slider-product__9-2.prod_9').classList.remove('active');
			document.querySelector('.slider-product__9-3.prod_9').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_9-1').classList.add('active');
			document.querySelector('.product__slider-btns.prod_9-2').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_9-3').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_green') && targetElement.classList.contains('prod_9')) {
			document.querySelector('.info-product__color_btn_pink.prod_9').classList.remove('active');
			document.querySelector('.info-product__color_btn_green.prod_9').classList.add('active');
			document.querySelector('.info-product__color_btn_blue.prod_9').classList.remove('active');
			document.querySelector('.slider-product__9-1.prod_9').classList.remove('active');
			document.querySelector('.slider-product__9-2.prod_9').classList.add('active');
			document.querySelector('.slider-product__9-3.prod_9').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_9-1').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_9-2').classList.add('active');
			document.querySelector('.product__slider-btns.prod_9-3').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_blue') && targetElement.classList.contains('prod_9')) {
			document.querySelector('.info-product__color_btn_pink.prod_9').classList.remove('active');
			document.querySelector('.info-product__color_btn_green.prod_9').classList.remove('active');
			document.querySelector('.info-product__color_btn_blue.prod_9').classList.add('active');
			document.querySelector('.slider-product__9-1.prod_9').classList.remove('active');
			document.querySelector('.slider-product__9-2.prod_9').classList.remove('active');
			document.querySelector('.slider-product__9-3.prod_9').classList.add('active');
			document.querySelector('.product__slider-btns.prod_9-1').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_9-2').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_9-3').classList.add('active');
		}

		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_yellow') && targetElement.classList.contains('prod_10')) {
			document.querySelector('.info-product__color_btn_yellow.prod_10').classList.add('active');
			document.querySelector('.info-product__color_btn_pink.prod_10').classList.remove('active');
			document.querySelector('.info-product__color_btn_blue.prod_10').classList.remove('active');
			document.querySelector('.slider-product__10-1.prod_10').classList.add('active');
			document.querySelector('.slider-product__10-2.prod_10').classList.remove('active');
			document.querySelector('.slider-product__10-3.prod_10').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_10-1').classList.add('active');
			document.querySelector('.product__slider-btns.prod_10-2').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_10-3').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_pink') && targetElement.classList.contains('prod_10')) {
			document.querySelector('.info-product__color_btn_yellow.prod_10').classList.remove('active');
			document.querySelector('.info-product__color_btn_pink.prod_10').classList.add('active');
			document.querySelector('.info-product__color_btn_blue.prod_10').classList.remove('active');
			document.querySelector('.slider-product__10-1.prod_10').classList.remove('active');
			document.querySelector('.slider-product__10-2.prod_10').classList.add('active');
			document.querySelector('.slider-product__10-3.prod_10').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_10-1').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_10-2').classList.add('active');
			document.querySelector('.product__slider-btns.prod_10-3').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_blue') && targetElement.classList.contains('prod_10')) {
			document.querySelector('.info-product__color_btn_yellow.prod_10').classList.remove('active');
			document.querySelector('.info-product__color_btn_pink.prod_10').classList.remove('active');
			document.querySelector('.info-product__color_btn_blue.prod_10').classList.add('active');
			document.querySelector('.slider-product__10-1.prod_10').classList.remove('active');
			document.querySelector('.slider-product__10-2.prod_10').classList.remove('active');
			document.querySelector('.slider-product__10-3.prod_10').classList.add('active');
			document.querySelector('.product__slider-btns.prod_10-1').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_10-2').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_10-3').classList.add('active');
		}

		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_blue') && targetElement.classList.contains('prod_11')) {
			document.querySelector('.info-product__color_btn_blue.prod_11').classList.add('active');
			document.querySelector('.info-product__color_btn_green.prod_11').classList.remove('active');
			document.querySelector('.info-product__color_btn_pink.prod_11').classList.remove('active');
			document.querySelector('.slider-product__11-1.prod_11').classList.add('active');
			document.querySelector('.slider-product__11-2.prod_11').classList.remove('active');
			document.querySelector('.slider-product__11-3.prod_11').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_11-1').classList.add('active');
			document.querySelector('.product__slider-btns.prod_11-2').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_11-3').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_green') && targetElement.classList.contains('prod_11')) {
			document.querySelector('.info-product__color_btn_blue.prod_11').classList.remove('active');
			document.querySelector('.info-product__color_btn_green.prod_11').classList.add('active');
			document.querySelector('.info-product__color_btn_pink.prod_11').classList.remove('active');
			document.querySelector('.slider-product__11-1.prod_11').classList.remove('active');
			document.querySelector('.slider-product__11-2.prod_11').classList.add('active');
			document.querySelector('.slider-product__11-3.prod_11').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_11-1').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_11-2').classList.add('active');
			document.querySelector('.product__slider-btns.prod_11-3').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_pink') && targetElement.classList.contains('prod_11')) {
			document.querySelector('.info-product__color_btn_blue.prod_11').classList.remove('active');
			document.querySelector('.info-product__color_btn_green.prod_11').classList.remove('active');
			document.querySelector('.info-product__color_btn_pink.prod_11').classList.add('active');
			document.querySelector('.slider-product__11-1.prod_11').classList.remove('active');
			document.querySelector('.slider-product__11-2.prod_11').classList.remove('active');
			document.querySelector('.slider-product__11-3.prod_11').classList.add('active');
			document.querySelector('.product__slider-btns.prod_11-1').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_11-2').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_11-3').classList.add('active');
		}

		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_gray') && targetElement.classList.contains('prod_12')) {
			document.querySelector('.info-product__color_btn_gray.prod_12').classList.add('active');
			document.querySelector('.info-product__color_btn_brown.prod_12').classList.remove('active');
			document.querySelector('.slider-product__12-1.prod_12').classList.add('active');
			document.querySelector('.slider-product__12-2.prod_12').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_12-1').classList.add('active');
			document.querySelector('.product__slider-btns.prod_12-2').classList.remove('active');
		}
		if (targetElement.classList.contains('info-product__color_btn') && targetElement.classList.contains('info-product__color_btn_brown') && targetElement.classList.contains('prod_12')) {
			document.querySelector('.info-product__color_btn_gray.prod_12').classList.remove('active');
			document.querySelector('.info-product__color_btn_brown.prod_12').classList.add('active');
			document.querySelector('.slider-product__12-1.prod_12').classList.remove('active');
			document.querySelector('.slider-product__12-2.prod_12').classList.add('active');
			document.querySelector('.product__slider-btns.prod_12-1').classList.remove('active');
			document.querySelector('.product__slider-btns.prod_12-2').classList.add('active');
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
		navigation: {
			nextEl: '.product__slider-btns.prod_1-1 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_1-1 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_1-2 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_1-2 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_1-3 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_1-3 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_2-1 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_2-1 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_2-2 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_2-2 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_2-3 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_2-3 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_3-1 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_3-1 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_3-2 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_3-2 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_3-3 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_3-3 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_4-1 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_4-1 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_4-2 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_4-2 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_5-1 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_5-1 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_5-2 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_5-2 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_6-1 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_6-1 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_6-2 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_6-2 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_7-1 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_7-1 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_7-2 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_7-2 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_7-3 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_7-3 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_7-4 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_7-4 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_8-1 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_8-1 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_8-2 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_8-2 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_9-1 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_9-1 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_9-2 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_9-2 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_9-3 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_9-3 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_10-1 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_10-1 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_10-2 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_10-2 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_10-3 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_10-3 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_11-1 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_11-1 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_11-2 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_11-2 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_11-3 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_11-3 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_12-1 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_12-1 .slider-arrow_prev',
		},
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
		navigation: {
			nextEl: '.product__slider-btns.prod_12-2 .slider-arrow_next',
			prevEl: '.product__slider-btns.prod_12-2 .slider-arrow_prev',
		},
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