import Image from 'next/image';
import { Mail, MapPin, Phone } from "lucide-react";
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Footer() {
  const logoImage = PlaceHolderImages.find(p => p.id === 'company-logo');

  return (
    <footer className="bg-primary/5 text-foreground-primary border-t">
      <div className="container mx-auto py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            {logoImage && (
              <Image 
                src={logoImage.imageUrl} 
                alt={logoImage.description} 
                width={150} 
                height={67}
                data-ai-hint={logoImage.imageHint}
                className="object-contain"
              />
            )}
          </div>
          <p className="text-muted-foreground">
            Authentic Indian Spices. Sourced with Integrity, Delivered Globally.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#about" className="text-muted-foreground hover:text-primary">About Us</a></li>
            <li><a href="#products" className="text-muted-foreground hover:text-primary">Products</a></li>
            <li><a href="#services" className="text-muted-foreground hover:text-primary">Export Services</a></li>
            <li><a href="#compliance" className="text-muted-foreground hover:text-primary">Compliance</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact Information</h4>
          <ul className="space-y-3 text-muted-foreground">
             <li className="flex items-start gap-3"><MapPin className="h-5 w-5 mt-1 text-primary shrink-0" /><span>Block-B2, Flat No-4/8, Hi-Tech Plaza, Sunderpada Road, Bhubaneswar, KHORDHA, ODISHA, 751002</span></li>
             <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /><span>[Your Email Address]</span></li>
             <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /><span>[Your Phone Number]</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto py-4 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear() + 2} Bandana Subhadarsini Sahu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
