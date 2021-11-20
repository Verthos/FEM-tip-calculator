import styled from "styled-components";



export const StyledContainer = styled.div`
    min-height: 100vh;
    background: var(--background);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: darkcyan;

    h1{
        margin-top: 2rem;
    }
    input{
        color: darkcyan;
        font-weight: bold;
    }

    

    .peopleInput{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }

    


    .dashboard{
        min-height: 85vh;
        width: 90vw;
        background: #ffffff;
        border-radius: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;
        

        .custom{
            width: 100%;
        }

        .buttons{
            width: 80%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            grid-gap: 1rem;
            margin-top: 0.5rem;
            
        }
        .active{
            background: darkcyan;
        }

        button{
            width: 100%;
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
        
        input{
            width: 80%;
            padding: 1rem;
            border-radius: 0.5rem;
            background: var(--grayish-cyan-450);
            border: none
        }

        h2{

            width: 80%;
            align-items: left;
            margin-top: 1.5rem;

        }
    
    }

    .result{
        position: relative;
        background: var(--darker-cyan);
        width: 80%;
        min-height: 30vh;
        margin: 2rem 0rem;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        padding: 2rem;
        justify-content: space-between;
        
        button{
            background: darkcyan;
        }

        section{
            width: 100%;
            display: flex;
            justify-content: space-between;

            h1{
                color: var(--strong-cyan);
                font-size: 2rem;
                margin: 0;
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