import { Fragment } from "react";


const Loading =()=>{
    return(
        <Fragment>
            <div className="flex flex-col justify-center items-center pt-32">
                <p className="text-bold text-2xl text-grey-300">Loading...</p>
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
            </div>
        </Fragment>
    )
};

export default Loading;

// export const dynamic = "force-dynamic";