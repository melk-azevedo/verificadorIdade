function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano =document.getElementById("txtano")
    let res = document.querySelector("div#res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        let fsex = document.getElementsByName("radsex")
        let idade = ano - Number(fano.value)
        let genero = ""
        let img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 13) {
                // crinça
                img.setAttribute("src", "imgs/foto-bebe-m.png")
            } else if (idade < 21) {
                // jovem
                img.setAttribute("src", "imgs/foto-jovem-m.png")
            } else if (idade < 59) {
                // adulto
                img.setAttribute("src", "imgs/foto-adulto-m.png")
            } else {
                // idoso
                img.setAttribute("src", "imgs/foto-idoso-m.png")
            }
        } else {
            genero = "Mulher"
            if (idade >= 0 && idade < 13) {
                // criança
                img.setAttribute("src", "imgs/foto-bebe-f.png")
            } else if (idade < 21) {
                // jovem
                img.setAttribute("src", "imgs/foto-jovem-f.png")
            } else if (idade < 59) {
                // adulto
                img.setAttribute("src", "imgs/foto-adulto-f.png")
            } else {
                // idoso
                img.setAttribute("src", "imgs/foto-idoso-f.png")
            }
        }
        res.style.textAlign = "center" 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}