import styled from "styled-components";



export const StyledContainer = styled.div`
    min-height: 100vh;
    background: var(--background);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: darkcyan;

    @media(min-width: 420px){
        justify-content: center;
    }
    

    h1{
        margin-top: 2rem;
    }
    input{
        color: darkcyan;
        font-weight: bold;
    };
    
    .inputTitles{
        @media(min-width: 420px){
            grid-column-end: 1;
            grid-column-start: 1;
            
        }
    }

    .peopleInput{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media(min-width: 420px){
            grid-column-end: 1;
            grid-column-start: 1;
            margin-bottom: 10rem;
        }
        
    }

    .billInput{
        @media(min-width: 420px){
            grid-column-end: 1;
            grid-column-start: 1;
        }
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

        @media(min-width: 420px){
            position: relative;
            display: grid;
            grid-template-columns: 1.5fr 1fr;
            width: 70vw;
            height: 70vh;
            place-items: center;
            
        }
        

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
            @media(min-width: 420px){
                grid-column-end: 1;
                grid-column-start: 1;
                margin: 0;
            }
            
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
            
            @media(min-width: 420px){
                grid-column-end: 1;
                grid-column-start: 1;
            }

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

        @media(min-width: 420px){
            grid-column-end: 2;
            grid-column-start: 2;
            place-content: space-evenly;
            height: 50vh;
            position: absolute;
            margin: auto;
        }
        
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