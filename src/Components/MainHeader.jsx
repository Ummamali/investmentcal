import Logo from "../assets/logo.png";

export default function MainHeader() {
  return (
    <header className="pt-6">
      <img src={Logo} alt="Logo" className="block max-w-24 mx-auto mb-6" />
      <h1 className="text-center text-2xl text-white/80">
        Investment Calculator
      </h1>
    </header>
  );
}
