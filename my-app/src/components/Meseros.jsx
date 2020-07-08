import React from "react"

const Meseros =() =>{
    return(
        <div>
            <div class="log">
                <div class="logo"></div>
                <div class="logoB"></div>
                <div class="logoY"></div>
                <img class="logoImg" src="data:image/png;base64,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"/>
            </div>
            <div class="content">
                <div class="menu">
                    <div class="menuBtns">
                        <button class="button" id="desayuno">Desayuno</button>
                        <button class="button" id="comida">Comida</button>
                    </div>
                    <div class="menuDes">
                        <button class="button" id="cafeA"></button>
                        <button class="button" id="cafeL"></button>
                        <button class="button" id="jugo"></button>
                        <button class="button" id="sandwish"></button>
                        <button class="button" id="otro">Otro...</button>
                    </div>
                </div>
                <div class="ticket"></div>
            </div>

        </div>
    )
}

export default Meseros