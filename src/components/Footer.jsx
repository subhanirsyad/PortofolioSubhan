export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-6 text-center text-secondary text-sm">
        <p>&copy; {year} Subhan Irsyaduddien Alhaq. All rights reserved.</p>
      </div>
    </footer>
  )
}
