import Logo from '../assets/movie-logo.png'

export const Navbar = () => {
    return (
        <>
            <div class="flex border space-x-8 items-center pl-3 py-4">
                <img className='w-[50px]' src={Logo} alt="No Found" />
                <a href='/' className='text-blue-500 text-2xl font-bold'>Home</a>
                <a href='/watchlist' className='text-blue-500 text-2xl font-bold'> WatchList</a>
            </div>
        </>
    )
}
