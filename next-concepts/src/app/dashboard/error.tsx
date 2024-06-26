"use client";
import { Fragment, useEffect } from "react";

const Error = ({error, reset}:{
    error: Error & { digest?: string }
    reset: () => void
})=>{
    useEffect(()=>{
        console.error(error);
    },[error]);
    return(
        <Fragment>
            <h2>Something Went Wrong </h2>
            <button onClick={()=>reset()}>
                Try Again
            </button>
        </Fragment>
    )
};

export default Error;