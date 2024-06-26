"use client";

const GlobalError = ({error, reset}:{
    error: Error & {digest?: string},
    reset: () => void
})=>{
    return(
        <html>
            <body>
                <h2>Something Went Wrong</h2>
                <button onClick={()=>reset()}>Try Again</button>
            </body>
        </html>
    )
};

export default GlobalError;