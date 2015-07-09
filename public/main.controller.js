app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {

	$scope.categories = ['MongoDB', 'Express', 'Angular', 'Node'];


	$scope.getCategoryCards = function(category){
		FlashCardsFactory.getFlashCards(category).then(function(data){
			$scope.flashCards = data;
		});
	};

	//why can't we put this above?
	 $scope.getCategoryCards();


	$scope.scores = ScoreFactory;
	$scope.addScore = function(answer){
		//console.log(answer);
		if(answer){
			$scope.scores.correct++
		}
		else {
			$scope.scores.incorrect++
		}
	}

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
		$scope.addScore(answer.correct);
	}
});