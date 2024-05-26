function verificar() {
    var data = new Date();
    var anoAtual = data.getFullYear();
    var anoNascimento = document.getElementById("txtAno").value;
    var resultado = document.querySelector("div#res");
    if (anoNascimento.length == 0 || Number(anoNascimento) > anoAtual) {
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    } else {
        var generos = document.getElementsByName("radSex");
        var idade = anoAtual - Number(anoNascimento);
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");
        img.style.width = "35%";
        img.style.height = "300px";
        if (generos[0].checked) {
            genero = "Homem";
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute("src", "img/crianca-masculino.jpg");
            } else if (idade < 21) {
                //Jovem
                img.setAttribute("src", "img/adolescente-masculino.jpg");
            } else if (idade < 50) {
                //Adulto
                img.setAttribute("src", "img/adulto-masculino.jpg");
            } else {
                //Idoso
                img.setAttribute("src", "img/idoso-masculino.jpg");
            }
        } else {
            genero = "Mulher";
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute("src", "img/crianca-femea.jpg");
            } else if (idade < 21) {
                //Jovem
                img.setAttribute("src", "img/adolescente-femea.jpg");
            } else if (idade < 50) {
                //Adulto
                img.setAttribute("src", "img/adulto-femea.jpg");
            } else {
                //Idoso
                img.setAttribute("src", "img/idoso-femea.jpg");
            }
        }
        resultado.innerHTML = `Detectamos um ${genero} com ${idade} anos de idade.`
        resultado.style.textAlign = "center";
        resultado.style.marginBottom = "10px";
        resultado.appendChild(img);
    }
}