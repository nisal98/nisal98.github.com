function showModal(i){
	var modal = document.getElementById(`modal${i}`);
	modal.style.display = "block";

}

function closeModal(i){
	var modal = document.getElementById(`modal${i}`);
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  for (var i=1; i<14; i++){
  	var modal = document.getElementById(`modal${i}`);
  	if (event.target == modal) {
    	modal.style.display = "none";
  	}
  }
}