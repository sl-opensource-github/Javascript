function binarySearch(array, left, right, search_value){
	if (right >= left) {
		let mid = left + Math.floor((right - l) / 2);

		if (array[mid] == search_value)
			return mid;

		if (array[mid] > search_value)
			return binarySearch(array, left, mid - 1, search_value);

		return binarySearch(array, mid + 1, right, search_value);
	}

	return -1;
}

let array = [ 2, 3, 4, 10, 40 ];
let search_value = 10;
let n = array.length
let result = binarySearch(array, 0, n - 1, search_value);
(result == -1) ? document.write( "Element is not found in array")
				: document.write("Element is at index " +result);
