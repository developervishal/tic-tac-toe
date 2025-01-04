function Square({ value, onHandleClick }: { value: string | null, onHandleClick: any }) {
    return (
        <div
            className={`rounded-md h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 text-center text-5xl font-bold bg-[#43115B] flex justify-center items-center ${value === 'x' ? 'text-[#BCDBF9]' : 'text-[#E2BE00]'}`}
            onClick={onHandleClick}
        >{value?.toUpperCase()}</div>
    )
}

export default Square