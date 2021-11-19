import React, { useState } from "react";
import { StyledContainer } from "./styles";


export function Main() {







    return(








        <StyledContainer>
            <div className="dashboard">
                <h2>Bill</h2>
                <input type="number" placeholder="$" />
                <h2>Select Tip %</h2>

                <div className="buttons">
                    <button className="isSelected">
                        5%
                    </button>
                    <button className="isSelected">
                        10%
                    </button>
                    <button className="isSelected">
                        15%
                    </button>
                    <button className="isSelected">
                        25%
                    </button>
                    <button className="isSelected">
                        50%
                    </button>
                    <button className="isSelected">
                        Custom
                    </button>

                </div>
                



                <section className="peopleInput">
                    <h2>Number of People</h2>
                    <input type="number" placeholder="icon"/>
                
                </section>




                <div className="result">
                    <section>
                        <h2>Tip Amount
                            <span>/ person</span>
                        </h2>
                        <h1>$10</h1>
                    </section>

                    

                    <section>
                        <h2>Total
                            <span>/ person</span>
                        </h2>
                        <h1>$400</h1>
                    </section>

                    <button className="reset">RESET</button>
                </div>
            </div>


            



            
        </StyledContainer>


    )
}