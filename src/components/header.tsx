import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Header() {
  const navLinks = [
      { name: 'Home', href: '#' },
      { name: 'About', href: '#about' },
      { name: 'Products', href: '#products' },
      { name: 'Impact', href: '#impact' },
      { name: 'Services', href: '#services' },
      { name: 'Partners', href: '#partners' },
      { name: 'Contact', href: '#contact' },
    ];

  const logoImage = PlaceHolderImages.find(p => p.id === 'company-logo');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          {logoImage && (
            <Image 
              src={logoImage.imageUrl} 
              alt={logoImage.description} 
              width={70} 
              height={30}
              data-ai-hint={logoImage.imageHint}
              className="object-contain"
            />
          )}
        </a>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {link.name}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button>Request Product Catalog</Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-muted-foreground hover:text-primary">
                    {link.name}
                  </a>
                ))}
              </nav>
              <Button className="mt-8 w-full">Request Product Catalog</Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
