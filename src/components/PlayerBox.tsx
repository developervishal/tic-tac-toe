
function PlayerBox({ title, value, bgColor }: { title: string, value: number, bgColor: string }) {
    return (
        <div className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-lg text-center" style={{ backgroundColor: bgColor }}>
            <p className='text-sm lg:text-lg font-semibold uppercase mt-5'>{title}</p>
            <p className='text-xl lg:text-4xl font-bold'>{value}</p>
        </div>
    )
}

export default PlayerBox