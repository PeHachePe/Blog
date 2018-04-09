function funciones(){
	var letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
	var sizeGroups = 2; //Tamaño del grupo
	var aaa = letras.reduce( function( anterior, actual, index, array ) {
    for (i = index + 1; i < array.length; i++) {
      var temp = array[index] + array[i];
      if ( index%sizeGroups )  {
        anterior[anterior.length-1].push(temp) // add elements to the group
      } else {
        anterior.push([temp]) // new group
      }
    }
		return anterior;
	},[]);
	document.getElementById("contenedor").innerHTML += aaa;
}
window.onload = funciones;
