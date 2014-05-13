function FormController($scope){

	// Define the model properties. The view will loop
	// through the services array and genreate a li
	// element for every one of its items.

	$scope.clubs = [
		{
			name: 'ChelseaFC',
			capacity: 41837,
			location:'England',
			active:true
		},{
			name: 'Manchester United',
			capacity: 75731,
			location:'England',
			active:true
		},{
			name: 'LiverPoolFC',
			capacity: 45276,
			location:'England',
			active:true
		},{
			name: 'RealMadrid',
			capacity: 85454,
			location:'Spain',
			active:true
		},{
			name: 'FCBarcelona',
			capacity: 99786,
			location:'Spain',
			active:true
		},{
			name: 'ACMilan',
			capacity: 80018,
			location:'Italy',
			active:true
		},{
			name: 'InterMilan',
			capacity: 80018,
			location:'Italy',
			active:true
		},{
			name: 'FC Bayern Munich',
			capacity: 71137,
			location:'Germany',
			active:true
		}
	];

	//switch between active and inactive
	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	
        // calculate the total capacity
	$scope.total = function(){

		var total = 0;

		angular.forEach($scope.clubs, function(s){
		//only calculate the selected stadium capacity
			if (s.active){
				total+= s.capacity;
			}
		});

		return total;
	};
}
