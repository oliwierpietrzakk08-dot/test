export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">
          {/* Brand */}
          <div className="flex flex-col space-y-6">
            <span className="font-serif text-3xl">Jan Kowalski<span className="text-[#F5C518]">.</span></span>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              Profesjonalne usługi elektryczne z 10-letnim doświadczeniem. Bezpieczeństwo i najwyższa jakość wykonania.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-6">
            <h4 className="font-serif text-xl tracking-wide">Kontakt</h4>
            <div className="space-y-4 text-gray-300 font-light text-lg">
              <p className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+48123456789" className="hover:text-white transition-colors">+48 123 456 789</a>
              </p>
              <p className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:kontakt@elektryk-lowicz.pl" className="hover:text-white transition-colors">kontakt@elektryk-lowicz.pl</a>
              </p>
            </div>
          </div>

          {/* Area */}
          <div className="flex flex-col space-y-6">
            <h4 className="font-serif text-xl tracking-wide">Obszar działania</h4>
            <ul className="space-y-3 text-gray-300 font-light text-lg">
              <li>Łowicz i okolice</li>
              <li>Powiat łowicki</li>
              <li>Skierniewice</li>
              <li>Stryków</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-light">
          <p>&copy; {currentYear} Jan Kowalski Elektryk. Wszelkie prawa zastrzeżone.</p>
          <p className="mt-4 md:mt-0">Projekt i wykonanie: Profesjonalnie.</p>
        </div>
      </div>
    </footer>
  );
}
