var app = angular.module("myApp",[])
app.controller("myCtrl", function($scope){
						// drop down array
	$scope.brands = ["40s and shorties","adidas originals","arcade","base range","bata bullets","bing bang",
					 "brain dead","brandblack","brixton","brutal truth","calvin klein","cameo collective",
					 "carhartt","casio","champion","chup","coffee supreme","colab","democratique socks",
					 "dickies","doomsday","drdenim","fay andrada","finders keepers","george & willy"];
					 	// tabs
	$scope.showDescript = function(){
		angular.element(document.querySelectorAll(".tabcontent")).removeClass("show");
		angular.element(document.querySelectorAll(".tabs")).removeClass("active");
		angular.element(document.querySelector("#tab1")).addClass("active");
		angular.element(document.querySelector("#tabcontent1")).addClass("show");
	};
	$scope.showShipping = function(){
		angular.element(document.querySelectorAll(".tabcontent")).removeClass("show");
		angular.element(document.querySelectorAll(".tabs")).removeClass("active");
		angular.element(document.querySelector("#tab2")).addClass("active");
		angular.element(document.querySelector("#tabcontent2")).addClass("show");
	};
	$scope.showReturns = function(){
		angular.element(document.querySelectorAll(".tabcontent")).removeClass("show");
		angular.element(document.querySelectorAll(".tabs")).removeClass("active");
		angular.element(document.querySelector("#tab3")).addClass("active");
		angular.element(document.querySelector("#tabcontent3")).addClass("show");
	};
	$scope.showPayment = function(){
		angular.element(document.querySelectorAll(".tabcontent")).removeClass("show");
		angular.element(document.querySelectorAll(".tabs")).removeClass("active");
		angular.element(document.querySelector("#tab4")).addClass("active");
		angular.element(document.querySelector("#tabcontent4")).addClass("show");
	};
	$scope.showQuestions = function(){
		angular.element(document.querySelectorAll(".tabcontent")).removeClass("show");
		angular.element(document.querySelectorAll(".tabs")).removeClass("active");
		angular.element(document.querySelector("#tab5")).addClass("active");
		angular.element(document.querySelector("#tabcontent5")).addClass("show");
	};
							// product image caps sliding
	$scope.showCap1 = function(){
		angular.element(document.querySelectorAll(".smallcap")).removeClass("hide");
		angular.element(document.querySelector("#smallcap1")).addClass("hide");
		angular.element(document.querySelectorAll(".bigcap")).removeClass("show");
		angular.element(document.querySelector("#bigcap1")).addClass("show");
	}
	$scope.showCap2 = function(){
		angular.element(document.querySelectorAll(".smallcap")).removeClass("hide");
		angular.element(document.querySelector("#smallcap2")).addClass("hide");
		angular.element(document.querySelectorAll(".bigcap")).removeClass("show");
		angular.element(document.querySelector("#bigcap2")).addClass("show");
	}
	$scope.showCap3 = function(){
		angular.element(document.querySelectorAll(".smallcap")).removeClass("hide");
		angular.element(document.querySelector("#smallcap3")).addClass("hide");
		angular.element(document.querySelectorAll(".bigcap")).removeClass("show");
		angular.element(document.querySelector("#bigcap3")).addClass("show");
	}
	$scope.showCap4 = function(){
		angular.element(document.querySelectorAll(".smallcap")).removeClass("hide");
		angular.element(document.querySelector("#smallcap4")).addClass("hide");
		angular.element(document.querySelectorAll(".bigcap")).removeClass("show");
		angular.element(document.querySelector("#bigcap4")).addClass("show");
	};
					// tabs function on hover
		$scope.hideSales = true;
		$scope.hideMens = true;
		$scope.hideWomens = true;
		$scope.hideBrands = true;
	$scope.showSales = function(){
		$scope.hideBrands = true;
		$scope.hideMens = true;
		$scope.hideWomens = true;
		$scope.hideSales = false;
	};
	$scope.showBrands = function(){
		$scope.hideBrands = false;
		$scope.hideMens = true;
		$scope.hideWomens = true;
		$scope.hideSales = true;
	};
	$scope.showMens = function(){
		$scope.hideBrands = true;
		$scope.hideMens = false;
		$scope.hideWomens = true;
		$scope.hideLookbooks = true;
	};
	$scope.showWomens = function(){
		$scope.hideBrands = true;
		$scope.hideMens = true;
		$scope.hideWomens = false;
		$scope.hideLookbooks = true;
	};
	$scope.hideAll = function(){
		$scope.hideSales = true;
		$scope.hideMens = true;
		$scope.hideWomens = true;
		$scope.hideBrands = true;
	};
});