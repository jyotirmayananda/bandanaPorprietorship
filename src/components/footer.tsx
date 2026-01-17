import Image from "next/image";
import { Mail, MapPin, Phone, Award } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Footer() {
  const logoImage = PlaceHolderImages.find((p) => p.id === "company-logo");

  return (
    <footer className="bg-primary/5 text-foreground-primary border-t">
      <div className="container mx-auto py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            {logoImage && (
              <Image
                src={logoImage.imageUrl}
                alt={logoImage.description}
                width={100}
                height={45}
                data-ai-hint={logoImage.imageHint}
                className="object-contain"
              />
            )}
          </div>
          <p className="text-muted-foreground text-sm">
            Empowering Odisha's Heritage, Delivering Authenticity Worldwide.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary text-sm"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="text-muted-foreground hover:text-primary text-sm"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#impact"
                className="text-muted-foreground hover:text-primary text-sm"
              >
                Our Impact
              </a>
            </li>
            <li>
              <a
                href="#partners"
                className="text-muted-foreground hover:text-primary text-sm"
              >
                Partners
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Credentials</h4>
          <ul className="space-y-2 text-sm">
            <li className="text-muted-foreground">
              Certifications: [Social Enterprise Mark]
            </li>
            <li className="text-muted-foreground">
              Member of: [Fair Trade Forum, FIEO]
            </li>
            <li className="text-muted-foreground">
              Impact Partners: [Mission Shakti, ORMAS]
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact Information</h4>
          <ul className="space-y-3 text-muted-foreground text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-1 text-primary shrink-0" />
              <span>
                Block-B2, Flat No-4/8, Hi-Tech Plaza, Sunderpada Road,
                Bhubaneswar, KHORDHA, ODISHA, 751002
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary" />
              <span>.</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary" />
              <span>.</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto py-4 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Bandana Subhadarsini Sahu
          (Proprietorship). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
