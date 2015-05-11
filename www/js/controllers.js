angular.module('starter.controllers', [])

.controller('ProfileCtrl', function($scope, Photos) {

	$scope.user = Photos;

	$scope.addPostToPosts = function(post) {
		Photos.addPostToPosts(post)
	};

	$scope.changePhoto = function(name) {
		Photos.changePhoto(name);
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