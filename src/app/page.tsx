import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, Leaf, UserCheck, Globe, Truck, Package, Star, Search, Sparkles, Cog, FlaskConical, PackageCheck } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Home() {
  const turmericImage = PlaceHolderImages.find(p => p.id === 'turmeric-powder');
  const chilliImage = PlaceHolderImages.find(p => p.id === 'chilli-powder');
  const wholeSpicesImage = PlaceHolderImages.find(p => p.id === 'whole-spices');
  const founderImage = PlaceHolderImages.find(p => p.id === 'founder');
  const spiceBoxImage = PlaceHolderImages.find(p => p.id === 'spice-box');

  return (
    <div className="bg-background/90 text-foreground">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <p className="font-serif-display text-primary text-2xl">Bandana Proprietorship</p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mt-2">
                Authentic <span className="font-serif-display text-accent">Spices</span>,
                <br />
                Global Reach.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
                Welcome to the home of premium Indian spices. We bridge the gap between India’s fertile farms and the global kitchen, ensuring every grain of spice meets international quality standards.
              </p>
              <div className="mt-8">
                <Button size="lg">Explore Our Products</Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              {spiceBoxImage && (
                <Image
                  src={spiceBoxImage.imageUrl}
                  alt={spiceBoxImage.description}
                  width={500}
                  height={500}
                  className="rounded-lg object-cover shadow-2xl"
                  data-ai-hint={spiceBoxImage.imageHint}
                />
              )}
               <Card className="absolute -bottom-12 -left-12 md:-left-24 bg-background/80 backdrop-blur-sm p-4 animate-float animation-delay-2000 shadow-lg">
                <CardHeader className="p-2">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="Arafat Chowdhury" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-sm">Arafat Chowdhury</CardTitle>
                      <div className="flex items-center gap-0.5">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-2">
                  <p className="text-xs text-muted-foreground mb-2">Recent reviews</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                           <AvatarFallback>LA</AvatarFallback>
                        </Avatar>
                         <span>Leslie Alexander</span>
                      </div>
                       <span className="font-bold">★ 5</span>
                    </div>
                     <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                           <AvatarFallback>AB</AvatarFallback>
                        </Avatar>
                         <span>Annette Black</span>
                      </div>
                       <span className="font-bold">★ 5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-secondary/20">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-semibold text-primary">OUR STORY & IDENTITY</p>
            <h2 className="text-4xl font-bold mt-2">From the Heart of Odisha to the Global Kitchen</h2>
            <p className="text-muted-foreground mt-4">
              At Bandana Subhadarsini Sahu (Proprietorship), our journey began with a simple observation: the world craves the bold, earthy flavors of India, but often lacks access to pure, unadulterated sources. Based in the historic city of Bhubaneswar, we leverage Odisha's rich agricultural heritage to source spices that are vibrant in color and potent in aroma.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full transition-transform duration-300 hover:scale-110"><Leaf className="h-6 w-6 text-primary" /></div>
                <div>
                  <h3 className="font-bold text-lg">Purity First</h3>
                  <p className="text-muted-foreground">We never use fillers or artificial colors. What you see is what you get.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full transition-transform duration-300 hover:scale-110"><UserCheck className="h-6 w-6 text-primary" /></div>
                <div>
                  <h3 className="font-bold text-lg">Ethical Sourcing</h3>
                  <p className="text-muted-foreground">We ensure fair prices for our farmers, supporting the backbone of Indian agriculture.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full transition-transform duration-300 hover:scale-110"><Globe className="h-6 w-6 text-primary" /></div>
                <div>
                  <h3 className="font-bold text-lg">Global Standards</h3>
                  <p className="text-muted-foreground">While we are a local proprietorship, our quality control follows international food safety protocols.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
             {founderImage && (
                <Image
                  src={founderImage.imageUrl}
                  alt={founderImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={founderImage.imageHint}
                />
              )}
          </div>
        </div>
      </section>

      {/* Product Excellence Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto text-center">
          <p className="text-primary font-semibold">PRODUCT EXCELLENCE</p>
          <h2 className="text-4xl font-bold mt-2">The Soul of Every Meal</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
            <Card className="transition-transform duration-300 hover:scale-105">
               {turmericImage && <div className="relative h-48"><Image src={turmericImage.imageUrl} alt={turmericImage.description} fill className="object-cover rounded-t-lg" data-ai-hint={turmericImage.imageHint}/></div>}
              <CardHeader><CardTitle>Pure Ground Spices</CardTitle></CardHeader>
              <CardContent><p>Turmeric, Chilli, and Cumin powders with high essential oil content, processed to retain maximum flavor.</p></CardContent>
            </Card>
            <Card className="transition-transform duration-300 hover:scale-105">
              {wholeSpicesImage && <div className="relative h-48"><Image src={wholeSpicesImage.imageUrl} alt={wholeSpicesImage.description} fill className="object-cover rounded-t-lg" data-ai-hint={wholeSpicesImage.imageHint}/></div>}
              <CardHeader><CardTitle>Whole Spices</CardTitle></CardHeader>
              <CardContent><p>Hand-picked cloves, cardamom, peppercorns and more from the best growing regions in India.</p></CardContent>
            </Card>
            <Card className="transition-transform duration-300 hover:scale-105">
              {chilliImage && <div className="relative h-48"><Image src={chilliImage.imageUrl} alt={chilliImage.description} fill className="object-cover rounded-t-lg" data-ai-hint={chilliImage.imageHint}/></div>}
              <CardHeader><CardTitle>Signature Blends</CardTitle></CardHeader>
              <CardContent><p>Traditional masalas like Garam Masala and Curry Powder, crafted with age-old recipes for authentic taste.</p></CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Quality Assurance Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto text-center">
          <p className="text-primary font-semibold">OUR PROMISE</p>
          <h2 className="text-4xl font-bold mt-2">Our 5-Step Quality Check</h2>
           <p className="text-muted-foreground max-w-3xl mx-auto mt-4">
            We take personal responsibility for every shipment. Our name is on the firm because we stand behind the quality of our spices.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary mb-4 pulse-slow">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg">Selection</h3>
              <p className="text-muted-foreground text-sm">Visiting farms to select the best harvest of the season.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary mb-4 pulse-slow animation-delay-2000">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg">Cleaning</h3>
              <p className="text-muted-foreground text-sm">Advanced multi-stage cleaning to remove all impurities.</p>
            </div>
             <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary mb-4 pulse-slow animation-delay-4000">
                 <Cog className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg">Processing</h3>
              <p className="text-muted-foreground text-sm">Low-temperature grinding to preserve natural oils and flavors.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary mb-4 pulse-slow animation-delay-2000">
                 <FlaskConical className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg">Testing</h3>
              <p className="text-muted-foreground text-sm">Every batch is tested for moisture, pungency, and safety.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary mb-4 pulse-slow">
                 <PackageCheck className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg">Packing</h3>
              <p className="text-muted-foreground text-sm">Moisture-proof vacuum packing to ensure freshness on arrival.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Export Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold">GLOBAL LOGISTICS</p>
            <h2 className="text-4xl font-bold mt-2">Seamless Global Logistics from Bhubaneswar</h2>
            <p className="text-muted-foreground mt-4">
              Exporting food products requires precision. As a registered Indian exporter, we handle the complexities of international trade so you don’t have to.
            </p>
             <Button variant="outline" className="mt-8">Request a Quote</Button>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full transition-transform duration-300 hover:scale-110"><Package className="h-6 w-6 text-primary" /></div>
              <div>
                <h3 className="font-bold text-lg">Custom Packaging & Private Labeling</h3>
                <p className="text-muted-foreground">Bulk 25kg bags for industrial use or 100g retail-ready pouches under your own brand (OEM).</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full transition-transform duration-300 hover:scale-110"><Award className="h-6 w-6 text-primary" /></div>
              <div>
                <h3 className="font-bold text-lg">Full Documentation Support</h3>
                <p className="text-muted-foreground">We manage Certificates of Origin, Phytosanitary Certificates, and Lab Test Reports.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full transition-transform duration-300 hover:scale-110"><Truck className="h-6 w-6 text-primary" /></div>
              <div>
                <h3 className="font-bold text-lg">Multi-Port Shipping</h3>
                <p className="text-muted-foreground">Utilizing major ports like Paradip and Kolkata for fast sea-freight routes worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Compliance & Trust Section */}
      <section id="compliance" className="py-20 bg-secondary/20">
        <div className="container mx-auto text-center">
          <p className="text-primary font-semibold">COMPLIANCE & TRUST</p>
          <h2 className="text-4xl font-bold mt-2">Our Transparency Promise</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mt-4">
            As a proprietorship firm, we offer a personal touch to every business relationship. When you partner with us, you are dealing directly with the decision-maker, ensuring faster communication, personalized service, and a commitment to excellence.
          </p>
          <Card className="mt-12 text-left">
            <CardContent className="p-0">
               <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Detail</TableHead>
                    <TableHead>Information</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Firm Name</TableCell>
                    <TableCell>Bandana Subhadarsini Sahu</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Nature of Concern</TableCell>
                    <TableCell>Sole Proprietorship</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Registration Date</TableCell>
                    <TableCell>30/09/2025</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Registered Office</TableCell>
                    <TableCell>Block-B2, Flat No-4/8, Hi-Tech Plaza, Sunderpada Road, Bhubaneswar, KHORDHA, ODISHA, 751002</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Proprietor</TableCell>
                    <TableCell>Bandana Subhadarsini Sahu</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Founder's Statement Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-4xl">
           <h2 className="text-3xl font-bold">A Message from the Founder</h2>
           <blockquote className="mt-6 text-xl italic border-l-4 border-accent pl-6 text-left">
            "As the proprietor, I take personal responsibility for every shipment that leaves our facility. My name, Bandana Subhadarsini Sahu, is on this firm because I stand behind the quality of our spices. We don't just sell products; we build long-term partnerships based on the promise of authentic Indian taste."
           </blockquote>
           <p className="mt-4 text-right font-semibold">– Bandana Subhadarsini Sahu</p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20">
         <div className="container mx-auto text-center">
            <p className="text-primary font-semibold">GET IN TOUCH</p>
            <h2 className="text-4xl font-bold mt-2">Ready to Bring the Taste of India to Your Market?</h2>
            <div className="mt-8 text-lg">
                <p><span className="font-semibold">Office Address:</span> Block-B2, Flat No-4/8, Hi-Tech Plaza, Sunderpada Road, Bhubaneswar, KHORDHA, ODISHA, 751002.</p>
                <p className="mt-2"><span className="font-semibold">Business Hours:</span> Monday – Saturday, 9:00 AM – 6:00 PM (IST)</p>
            </div>
            <div className="mt-8">
              <Button size="lg">Contact for Inquiry</Button>
            </div>
         </div>
      </section>

    </div>
  );
}
