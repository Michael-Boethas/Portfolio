import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <p>FOOTER</p>
      <Image
            src="/images/ocr_logo.webp"
            alt="Logo Openclassroom"
            width={50}
            height={50}
            priority
          />
    </footer>
  );
}
