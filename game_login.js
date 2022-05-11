function add(){
    playerone_name=document.getElementById("demon1_input").value;
    playertwo_name=document.getElementById("demon2_input").value;
    localStorage.setItem("player1_name",playerone_name);
    localStorage.setItem("player2_name",playertwo_name);
window.location="game_page.html";
} 
