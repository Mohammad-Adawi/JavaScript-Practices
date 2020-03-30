// Get Sum of People's Budget

function getPeoplesBudget(array1) {
	var sum = 0;
	for (var obj in array1)
		{
			sum += array1[obj].budget;
		}
	return sum;
}