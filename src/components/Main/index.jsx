import React, { useState } from "react";
import { StyledContainer } from "./styles";


export function Main() {

    const buttons = ["5", "10", "15", "25", "50"]
    const [selectedIndex, setSelectedIndex] = useState(6)
    const [bill, setBill] = useState(0);
    const [numberOfPeople, setNumberOfPeople] = useState(1) 
    const [percentage, setPercentage] = useState("")
    
    
    const handleSelectedIndex = (i, percentage) => {
        setSelectedIndex(i)
        setPercentage(percentage)
    };

    var currency = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });


    return(

        <StyledContainer>
            <h1>SPLI <br />TTER</h1>
            <div className="dashboard">
                <h2>Conta</h2>
                <input type="number" placeholder="$" onChange={(event) => setBill(event.target.value)}/>
                <h2>Gorjeta %</h2>
                
                <div className="buttons">
                    {
                        buttons.map((button, i) => {
                            return(
                                <button onClick={() => handleSelectedIndex(i, buttons[i])} className={selectedIndex === i ? "active": ""}>
                                    {button}%
                                </button>
                            )
                        })
                    }
                    <input type="number" className="custom" placeholder="Personalizado" onChange={(event) => setPercentage(event.target.value)}/>
                </div>

                <section className="peopleInput">
                    <h2>Número de pessoas</h2>
                    <input defaultValue="1" type="number" placeholder="icon" onChange={(event) => setNumberOfPeople(event.target.value)}/>
                </section>

                <div className="result">
                    <section>
                        <h2>Gorjeta
                            <span>/ pessoa</span>
                        </h2>
                        <h1>{!bill | !numberOfPeople ? "" : currency.format((bill * (Number(percentage)/100)) / numberOfPeople)}</h1>
                    </section>

                    <section>
                        <h2>Total
                            <span>/ pessoa</span>
                        </h2>
                        <h1>{!bill | !numberOfPeople ? "" : currency.format((bill / numberOfPeople) + ((bill * (Number(percentage)/100)/numberOfPeople)))}</h1>
                    </section>
                    <button className="reset">RESET</button>
                </div>
            </div>
            
        </StyledContainer>


    )
}