import  Link  from "next/link"

function Header() {
  return <header className="bg-[#013B94]">
     <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" 
     aria-label="Global">
      <div className="flex lg:flex-1">
       <Link href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Booking.com</span>
        <img className="h-6 w-auto"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Booking.com_Logo_Grey.svg/2560px-Booking.com_Logo_Grey.svg.png"/>
       </Link>
      </div>
     </nav>
    </header>
  
}

export default Header