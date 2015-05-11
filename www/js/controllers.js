angular.module('starter.controllers', [])

.controller('ProfileCtrl', function($scope) {

	$scope.user = {
		"name": "Paul",
		"age": 28,
		"location": "London",
		"posts":["http://www.allianceabroad.com/wp-content/uploads/Thailand-2.jpg", 
		"http://rasktravel.com/wp-content/uploads/long-boat-and-rocks-on-railay-beach-in-Krabi-Thailand-e1390752231162.jpg", 
		"http://www.egyptexpresstvl.com/imgs/1429173494.jpg", 
		"http://www.thestar.com/content/dam/thestar/business/personal_finance/2014/07/29/woman_can_claim_17500_tax_deduction_for_winter_in_thailand_court_rules/thailand.jpg"]
	}

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
});
