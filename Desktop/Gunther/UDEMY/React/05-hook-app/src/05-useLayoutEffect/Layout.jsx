
import { useCounter, useFetch  } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {

    const { counter, increment, decrement } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>BrakingBad Quotes</h1>
            <hr/>

            {
                isLoading 
                ? <LoadingQuote/>
                : <Quote author={ author } quote={ quote }/>
            }

            <button 
                onClick={ ( ) => decrement() } 
                className="btn btn-primary"
                disabled={ isLoading }
            >
                Back quote
            </button>
            <button 
                onClick={ () => increment() } 
                className="btn btn-primary"
                disabled={ isLoading }
            >
                Next quote
            </button>

        </>
    )
}
