export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="h-20 w-full flex justify-center items-center border-t border-border">
      <small className="text-foreground-secondary font-bold">
        <span>Arwen </span>
        <span>&copy; </span>
        <span>{year}</span>
      </small>
    </footer>
  );
}
