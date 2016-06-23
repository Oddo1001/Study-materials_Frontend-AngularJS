app.controller('MainController', ['$scope', function($scope) {
  $scope.program = [
	  {
	  series: "Sherlock",
	  series_img: "http://images.christianpost.com/full/74899/sherlock.jpg",
	  genre: "Crime drama",
	  season: 3,
	  episode: "The Empty Hearse",
	  description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary",
	  datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
	},
	{
  series: "Game of Thrones",
  series_img: "http://lovelace-media.imgix.net/uploads/1461/5ab5c3f0-c238-0133-bf51-0e694d25c22d.jpg?",
  genre: "Epic",
  season: 3,
  episode: "Dragooooon",
  description: "Game of Thrones is an American fantasy drama television series created by showrunners David Benioff and D. B. Weiss. It is an adaptation of A Song of Ice and Fire, George R. R. Martin's series of fantasy novels, the first of which is titled A Game of Thrones. It is filmed in a Belfast studio and on location elsewhere in Croatia, Iceland, Malta, Morocco, Northern Ireland, Spain, Scotland, and the United States",
  datetime: new Date(2016, 13, 12, 11, 00, 00, 00)
}]
}]);
