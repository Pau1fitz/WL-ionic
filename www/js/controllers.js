angular.module('starter.controllers', [])

.controller('ProfileCtrl', function($scope, Photos) {

	$scope.user = {
		"name": Photos.name,
		"profilePhoto": "http://ilarge.lisimg.com/image/6708503/968full-paul-fitzgerald.jpg",
		"age": 28,
		"location": "London",
		"posts": Photos.posts
	}

	$scope.addPostToPosts = function(post) {
		Photos.addPostToPosts(post)
	};

	$scope.changeName = function() {
		Photos.changeName();
		console.log(Photos.name)
	};

})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('PlacesVistedCtrl', function($scope){



})

.controller('CameraCtrl', function($scope){



})