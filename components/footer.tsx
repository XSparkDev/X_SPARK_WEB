export function Footer() {
  return (
    <footer className="bg-black text-[#6b7280] py-8 border-t border-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-white transition">
            Refund Policy
          </a>
          <a href="#" className="hover:text-white transition">
            POPI
          </a>
        </div>
        <div>&copy; 2022 | Developed by X Spark</div>
      </div>
    </footer>
  )
}
