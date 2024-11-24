// components/ui/navbar.js

export function Navbar({ children }) {
    return (
      <nav className="w-full bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-blue-600">
            HealthCare+
          </a>
          <div className="flex space-x-4">{children}</div>
        </div>
      </nav>
    );
  }
  