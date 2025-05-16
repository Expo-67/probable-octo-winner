export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 text-center">
        <p>
          © {new Date().getFullYear()} James K. Ndungu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
