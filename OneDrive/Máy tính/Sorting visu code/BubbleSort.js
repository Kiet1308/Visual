function sort(list)
{
   
   for (var i = 0; i < list.length; i++) {
    	for (var j = 0; j < list.length-1; j++) {
    	if (list[j]>list[j+1]) {
    		exchange(list,j,j+1)
    	}
    } 	
    } 

}
