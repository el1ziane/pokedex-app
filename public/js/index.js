function abrirAba(abaNome) {

    const abas = document.getElementsByClassName("tab-content");
    
    if (abas.length === 0) return;

    for (let i = 0; i < abas.length; i++) {
        abas[i].style.display = "none";
    }

    const tabButtons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    const selectedTab = document.getElementById(abaNome);
    if (selectedTab) {
        selectedTab.style.display = "block";
    }
    
    const selectedButton = document.querySelector(`[onclick="abrirAba('${abaNome}')"]`);
    if (selectedButton) {
        selectedButton.classList.add("active");
    }
}

window.onload = function() {
    abrirAba("pokemons");
};
