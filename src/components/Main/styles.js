import styled from "styled-components";



export const StyledContainer = styled.div`
    height: 100vh;
    background: var(--background);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .peopleInput{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .buttons{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 1rem;
        margin-top: 1.75rem;


        button{
            width: 12rem;
            padding: 1rem;
            background: var(--darker-cyan);
            border-radius: 0.5rem;
            color: white;
            font-weight: bold;
            font-size: 1.5rem;
            border: none;
            transition: all 0.3s;
            &:hover{
                filter: brightness(1.2);
            }
        }
        
    }


    .dashboard{
        position: absolute;
        bottom: 0%;
        height: 85vh;
        width: 90vw;
        background: #ffffff;
        border-radius: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        input{
            width: 80%;
            padding: 1rem;
            border-radius: 0.5rem;
            background: hsl(0, 41%, 90%);
            border: none
            
        }

        h2{

            width: 80%;
            align-items: left;
            margin-top: 2.5rem;

        }
    
    }

    .result{
        position: relative;
        background: var(--darker-cyan);
        width: 80%;
        height: 25vh;
        margin-top: 2.5rem;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        padding: 2rem;
        justify-content: space-between;
        
        button{
            padding: 1rem;
            border: none;
            border-radius: 0.5rem;
            background: var(--strong-cyan);
            transition: all 0.3s;
            &:hover{
                filter: brightness(1.2);
            }
        }

        section{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: f;

            h1{
                color: var(--strong-cyan);
                font-size: 2.5rem;
            }


            h2{
                display: flex;
                flex-direction: column;
                color: white;
                font-weight: normal;
                margin-top: 0;
                
            }
            span{
                font-weight: bold;
                font-size: 1rem;
                color: var(--grayish-cyan-500)
            }
        }
    
    }

`