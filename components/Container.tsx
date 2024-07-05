const Container = ({  children }: {children: React.ReactNode})=>{
    return(
        <div className="border-2 border-pink-500 p-4 m-4 min-h-[80vh]">
            {children}
        </div>
    );
};

export default Container;