app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Big message';
  $scope.promo = 'Some promo text';
  $scope.products =
    [
      {
        name: 'Some description',
    		price: 7,
    		pubdate: new Date('2015', '01', '01'),
    		cover: 'http://media02.hongkiat.com/designing-book-covers/45-dorothy-oz.jpg',
        likes: 0,
        dislikes: 0
  		},
      {
        name: 'Some description',
    		price: 7,
    		pubdate: new Date('2015', '01', '01'),
    		cover: 'http://media02.hongkiat.com/designing-book-covers/45-dorothy-oz.jpg',
        likes: 0,
        dislikes: 0
  		}
      ,
      {
        name: 'Some description',
    		price: 8,
    		pubdate: new Date('2015', '03', '01'),
    		cover: 'http://media02.hongkiat.com/designing-book-covers/44-dubliners.jpg',
        likes: 0,
        dislikes: 0
  		},
      {
        name: 'Some description',
    		price: 8,
    		pubdate: new Date('2015', '03', '01'),
    		cover: 'http://media02.hongkiat.com/designing-book-covers/44-dubliners.jpg',
        likes: 0,
        dislikes: 0
  		},

      {
        name: 'Some description',
    		price: 10,
    		pubdate: new Date('2015', '08', '03'),
    		cover: 'http://media02.hongkiat.com/designing-book-covers/45-dorothy-oz.jpg',
        likes: 0,
        dislikes: 0
  		},
      {
        name: 'Some description',
    		price: 8,
    		pubdate: new Date('2015', '03', '01'),
    		cover: 'http://media02.hongkiat.com/designing-book-covers/44-dubliners.jpg',
        likes: 0,
        dislikes: 0
  		},
      {
        name: 'Some description',
    		price: 7,
    		pubdate: new Date('2015', '01', '01'),
    		cover: 'http://media02.hongkiat.com/designing-book-covers/45-dorothy-oz.jpg',
        likes: 0,
        dislikes: 0
  		}
      ,
      {
        name: 'Some description',
    		price: 8,
    		pubdate: new Date('2015', '03', '01'),
    		cover: 'http://media02.hongkiat.com/designing-book-covers/44-dubliners.jpg',
        likes: 0,
        dislikes: 0
  		},
      {
        name: 'Some description',
    		price: 8,
    		pubdate: new Date('2015', '03', '01'),
    		cover: 'http://media02.hongkiat.com/designing-book-covers/44-dubliners.jpg',
        likes: 0,
        dislikes: 0
  		},

      {
        name: 'Some description',
    		price: 10,
    		pubdate: new Date('2015', '08', '03'),
    		cover: 'http://media02.hongkiat.com/designing-book-covers/45-dorothy-oz.jpg',
        likes: 0,
        dislikes: 0
  		},
      {
        name: 'Some description',
    		price: 11,
    		pubdate: new Date('2015', '08', '02'),
    		cover: 'http://media02.hongkiat.com/designing-book-covers/48-piracy.jpg',
        likes: 0,
        dislikes: 0
  		},
      {
        name: 'Some description',
    		price: 7,
    		pubdate: new Date('2015', '01', '01'),
    		cover: 'http://media02.hongkiat.com/designing-book-covers/45-dorothy-oz.jpg',
        likes: 0,
        dislikes: 0
  		}
      ,
      {
        name: 'Some description',
    		price: 8,
    		pubdate: new Date('2015', '03', '01'),
    		cover: 'http://media02.hongkiat.com/designing-book-covers/44-dubliners.jpg',
        likes: 0,
        dislikes: 0
  		},
      {
        name: 'Some description',
    		price: 9,
    		pubdate: new Date('2015', '05', '01'),
    		cover: 'http://media02.hongkiat.com/designing-book-covers/48-piracy.jpg',
        likes: 0,
        dislikes: 0
  		},

      {
        name: 'Some description',
    		price: 10,
    		pubdate: new Date('2015', '08', '03'),
    		cover: 'http://media02.hongkiat.com/designing-book-covers/45-dorothy-oz.jpg',
        likes: 0,
        dislikes: 0
  		},
      {
        name: 'Some description',
    		price: 11,
    		pubdate: new Date('2015', '08', '02'),
    		cover: 'http://media02.hongkiat.com/designing-book-covers/48-piracy.jpg',
        likes: 0,
        dislikes: 0
  		}


  	];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
  };


}]);
