import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Award,
  Globe,
  Users,
  Sparkles,
  Link,
  Sun,
  Hand,
  TrendingUp,
  BookOpen,
  CheckCircle,
  Handshake,
  DollarSign,
  Baby,
  Laptop,
  Building,
  Briefcase,
  Package,
  Truck,
  Camera,
  Warehouse,
  Star,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-spices");
  const spicesImage = PlaceHolderImages.find((p) => p.id === "turmeric-powder");
  const textilesImage = PlaceHolderImages.find(
    (p) => p.id === "handcrafted-textiles"
  );
  const foodImage = PlaceHolderImages.find((p) => p.id === "homemade-food");
  const craftsImage = PlaceHolderImages.find(
    (p) => p.id === "artisanal-crafts"
  );
  const womenArtisansImage = PlaceHolderImages.find(
    (p) => p.id === "women-artisans"
  );
  const founderImage = PlaceHolderImages.find((p) => p.id === "founder");

  const testimonialBuyer = PlaceHolderImages.find(
    (p) => p.id === "testimonial-buyer"
  );
  const testimonialArtisan = PlaceHolderImages.find(
    (p) => p.id === "testimonial-artisan"
  );
  const testimonialPartner = PlaceHolderImages.find(
    (p) => p.id === "testimonial-partner"
  );
  const testimonialImpact = PlaceHolderImages.find(
    (p) => p.id === "testimonial-impact"
  );

  return (
    <div className="max-w-screen-2xl mx-auto shadow-2xl">
      <div className="bg-background/90 text-foreground">
        {/* Hero Section */}
        <section
          className="relative py-20 md:py-32 bg-cover bg-center text-primary-foreground rounded-t-lg overflow-hidden"
          style={{ backgroundImage: `url(${heroImage?.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-2 max-w-4xl mx-auto">
              Empowering Odisha's Heritage, Delivering Authenticity Worldwide.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/90 max-w-3xl mx-auto">
              From farm-fresh spices to handcrafted treasures, we bridge
              Odisha's villages to global markets while uplifting rural women
              artisans.
            </p>
            <div className="mt-8 space-x-4">
              <Button size="lg">Request Product Catalog</Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-primary hover:bg-white hover:text-primary"
              >
                Partner for Impact
              </Button>
            </div>
          </div>
        </section>

        {/* Mission/Vision Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold">
              Bandana Exports: More Than a Trading Company
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We are a social enterprise dedicated to:
            </p>
            <div className="grid md:grid-cols-4 gap-8 mt-12 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4 transition-transform hover:scale-110">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg">Exporting Authenticity</h3>
                <p className="text-muted-foreground text-sm">
                  Exporting authentic Odisha products worldwide.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4 transition-transform hover:scale-110">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg">Empowering Women</h3>
                <p className="text-muted-foreground text-sm">
                  Empowering rural women through sustainable livelihoods.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4 transition-transform hover:scale-110">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg">Preserving Crafts</h3>
                <p className="text-muted-foreground text-sm">
                  Preserving traditional crafts and recipes.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4 transition-transform hover:scale-110">
                  <Link className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg">Ethical Supply Chains</h3>
                <p className="text-muted-foreground text-sm">
                  Building ethical supply chains from village to global market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expanded Product Categories Section */}
        <section id="products" className="py-20 bg-secondary/20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold">Our Products</h2>
            <div className="grid md:grid-cols-4 gap-8 mt-12 text-left">
              <Card className="transition-transform duration-300 hover:scale-105">
                {spicesImage && (
                  <div className="relative h-48">
                    <Image
                      src={spicesImage.imageUrl}
                      alt={spicesImage.description}
                      fill
                      className="object-cover rounded-t-lg"
                      data-ai-hint={spicesImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>Premium Spices & Masalas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Organic farm-to-table spices, traditional Odisha masala
                    blends, and custom industrial spice mixes.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-transform duration-300 hover:scale-105">
                {textilesImage && (
                  <div className="relative h-48">
                    <Image
                      src={textilesImage.imageUrl}
                      alt={textilesImage.description}
                      fill
                      className="object-cover rounded-t-lg"
                      data-ai-hint={textilesImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>Handcrafted Textiles</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Handloom sarees (Sambalpuri, Bomkai, Kotpad), tribal craft
                    textiles, and natural dyed fabrics.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-transform duration-300 hover:scale-105">
                {foodImage && (
                  <div className="relative h-48">
                    <Image
                      src={foodImage.imageUrl}
                      alt={foodImage.description}
                      fill
                      className="object-cover rounded-t-lg"
                      data-ai-hint={foodImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>Homemade Food Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Traditional Odisha sweets (Pitha, Chhena Poda), pickles &
                    preserves, and rice-based products.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-transform duration-300 hover:scale-105">
                {craftsImage && (
                  <div className="relative h-48">
                    <Image
                      src={craftsImage.imageUrl}
                      alt={craftsImage.description}
                      fill
                      className="object-cover rounded-t-lg"
                      data-ai-hint={craftsImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>Artisanal Crafts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Dhokra metal craft, Pattachitra paintings, palm leaf
                    engravings, and terracotta pottery.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Women Empowerment Story Section */}
        <section id="impact" className="py-20 bg-secondary/20">
          <div className="container mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <p className="font-semibold text-primary">OUR HEART</p>
              <h2 className="text-4xl font-bold mt-2">
                The Hands That Craft Our Heritage
              </h2>
              <p className="text-muted-foreground mt-4">
                Meet the master artisans who transform simple village
                ingredients into extraordinary homemade delights. In Odisha's
                rural kitchens, generations of wisdom guide their hands as they
                prepare traditional pickles using sun-drying techniques passed
                down through grandmothers, craft spice blends by hand-grinding
                on traditional sil-batta stone grinders, preserve seasonal
                fruits and vegetables using natural methods, and create
                authentic sweets following century-old family recipes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                {womenArtisansImage && (
                  <Image
                    src={womenArtisansImage.imageUrl}
                    alt={womenArtisansImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={womenArtisansImage.imageHint}
                  />
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  The Journey of Homemade Goodness
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Garden Fresh</h4>
                      <p className="text-muted-foreground text-sm">
                        Women picking fresh vegetables from their own backyard
                        gardens.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Sun className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Traditional Prep</h4>
                      <p className="text-muted-foreground text-sm">
                        Washing, cutting, and sun-drying ingredients on
                        traditional bamboo mats.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Hand className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Hand Crafting</h4>
                      <p className="text-muted-foreground text-sm">
                        Mixing and preparing in traditional earthen pots,
                        following age-old recipes.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Quality Check</h4>
                      <p className="text-muted-foreground text-sm">
                        Tasting and adjusting flavors, led by the experienced
                        elders of the community.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Package className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Home Packaging</h4>
                      <p className="text-muted-foreground text-sm">
                        Lovingly filling and sealing jars in clean home
                        kitchens, ready for your table.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-20">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <Card>
                  <CardHeader>
                    <CardTitle>The Pickle Makers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      In Odisha's villages, pickle-making is an art form
                      preserved by women. Our artisans:
                    </p>
                    <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground text-sm">
                      <li>
                        Source fresh produce from their own kitchen gardens
                      </li>
                      <li>
                        Use secret family recipes that balance spice, tang, and
                        sweetness
                      </li>
                      <li>
                        Follow natural fermentation processes without artificial
                        preservatives
                      </li>
                      <li>
                        Sun-dry ingredients on rooftop patios, harnessing
                        Odisha's tropical climate
                      </li>
                      <li>
                        Package with love, ensuring each jar carries the warmth
                        of homemade care
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>The Spice Masters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Behind every perfect masala blend are the skilled hands of
                      women who:
                    </p>
                    <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground text-sm">
                      <li>
                        Select spices by aroma and color, using sensory
                        knowledge developed over decades
                      </li>
                      <li>
                        Toast spices in small batches over wood-fired stoves for
                        optimal flavor
                      </li>
                      <li>
                        Grind blends rhythmically on stone mills to preserve
                        essential oils
                      </li>
                      <li>
                        Create regional specialities like Odisha's Panch Phutana
                        and Badikhor masala
                      </li>
                      <li>
                        Maintain perfect consistency through generations of
                        inherited expertise
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-20 max-w-4xl mx-auto text-center">
              <Button size="lg">Support Women Improvement</Button>
            </div>
          </div>
        </section>

        {/* Impact Metrics Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Users className="h-10 w-10 mb-2" />
                <p className="text-2xl font-bold">250+</p>
                <p>Rural Women Artisans Supported</p>
              </div>
              <div className="flex flex-col items-center">
                <Globe className="h-10 w-10 mb-2" />
                <p className="text-2xl font-bold">12+</p>
                <p>Countries Exported To</p>
              </div>
              <div className="flex flex-col items-center">
                <Sparkles className="h-10 w-10 mb-2" />
                <p className="text-2xl font-bold">15+</p>
                <p>Traditional Crafts Preserved</p>
              </div>
              <div className="flex flex-col items-center">
                <TrendingUp className="h-10 w-10 mb-2" />
                <p className="text-2xl font-bold">₹2.5Cr+</p>
                <p>Generated in Artisan Income</p>
              </div>
              <div className="flex flex-col items-center col-span-2 md:col-span-1">
                <Award className="h-10 w-10 mb-2" />
                <p className="text-2xl font-bold">500+</p>
                <p>Women Trained in Quality Production</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Enterprise Model Section */}
        <section id="commitment" className="py-20">
          <div className="container mx-auto text-center">
            <p className="text-primary font-semibold">OUR MODEL</p>
            <h2 className="text-4xl font-bold mt-2">
              Our Dual Commitment: Quality Products & Social Impact
            </h2>
            <div className="mt-12 grid md:grid-cols-2 gap-12 text-left">
              <Card>
                <CardHeader>
                  <CardTitle>For Our Customers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Award className="h-6 w-6 text-primary mt-1" />
                    <p>Export-grade quality certification</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Package className="h-6 w-6 text-primary mt-1" />
                    <p>Custom packaging & private labeling</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Truck className="h-6 w-6 text-primary mt-1" />
                    <p>End-to-end logistics support</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Link className="h-6 w-6 text-primary mt-1" />
                    <p>Consistent supply chain</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>For Our Artisans</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <DollarSign className="h-6 w-6 text-primary mt-1" />
                    <p>Fair price guarantee (30% above market)</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Handshake className="h-6 w-6 text-primary mt-1" />
                    <p>Advance payments for materials</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Baby className="h-6 w-6 text-primary mt-1" />
                    <p>Childcare support at production centers</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Laptop className="h-6 w-6 text-primary mt-1" />
                    <p>Digital literacy training</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Founder's Statement Section */}
        <section className="py-24 bg-secondary/20">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-3xl font-bold">A Message from the Founder</h2>
            <blockquote className="mt-6 text-xl italic border-l-4 border-primary pl-6 text-left">
              "As a woman-led enterprise from Odisha, I've witnessed the
              incredible talent in our villages. Bandana Exports was founded
              with two missions: to share Odisha's authentic products with the
              world, and to create sustainable livelihoods for women who are the
              true custodians of our cultural heritage. When you choose our
              products, you're not just buying quality – you're joining a
              movement that empowers families and preserves traditions."
            </blockquote>
            <div className="flex justify-end items-center mt-6 gap-4">
              {founderImage && (
                <Avatar>
                  <AvatarImage
                    src={founderImage.imageUrl}
                    alt={founderImage.description}
                  />
                  <AvatarFallback>BS</AvatarFallback>
                </Avatar>
              )}
              <p className="text-right font-semibold">
                – Bandana Subhadarsini Sahu
              </p>
            </div>
          </div>
        </section>

        {/* Expanded Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto text-center">
            <p className="text-primary font-semibold">OUR SERVICES</p>
            <h2 className="text-4xl font-bold mt-2">
              How We Can Work Together
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 transition-transform hover:scale-110">
                  <Truck className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold">Export Services</h3>
                <p className="text-muted-foreground text-sm">
                  Customs clearance, documentation, logistics.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 transition-transform hover:scale-110">
                  <Package className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold">Private Labeling</h3>
                <p className="text-muted-foreground text-sm">
                  Custom branding for all product categories.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 transition-transform hover:scale-110">
                  <Handshake className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold">Artisan Connect</h3>
                <p className="text-muted-foreground text-sm">
                  Direct buyer-artisan interaction programs.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 transition-transform hover:scale-110">
                  <Camera className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold">Cultural Experiences</h3>
                <p className="text-muted-foreground text-sm">
                  Virtual tours of artisan villages.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 transition-transform hover:scale-110">
                  <Warehouse className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold">Bulk Orders</h3>
                <p className="text-muted-foreground text-sm">
                  Institutional supply for hotels, restaurants, retailers.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <Button size="lg">Source Ethically</Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-secondary/20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Voices from Our Community
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {testimonialBuyer && (
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage
                          src={testimonialBuyer.imageUrl}
                          alt="International Buyer"
                        />
                        <AvatarFallback>IB</AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <CardTitle className="text-base">
                        Sophia, Germany
                      </CardTitle>
                      <CardDescription>International Buyer</CardDescription>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "The quality of spices is unparalleled. Our customers can
                    taste the authenticity. Knowing it supports women artisans
                    makes it even better."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {testimonialArtisan && (
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage
                          src={testimonialArtisan.imageUrl}
                          alt="Artisan"
                        />
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <CardTitle className="text-base">Sita Devi</CardTitle>
                      <CardDescription>Dhokra Artisan</CardDescription>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Working with Bandana Exports changed my life. I can send my
                    children to school now. My craft is respected."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {testimonialPartner && (
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage
                          src={testimonialPartner.imageUrl}
                          alt="Retail Partner"
                        />
                        <AvatarFallback>RP</AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <CardTitle className="text-base">David Chen</CardTitle>
                      <CardDescription>Retail Partner, USA</CardDescription>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Our collaboration has been seamless. The private labeling
                    service is excellent and our customers love the artisan
                    stories behind the products."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {testimonialImpact && (
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage
                          src={testimonialImpact.imageUrl}
                          alt="Impact Org"
                        />
                        <AvatarFallback>IO</AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <CardTitle className="text-base">ImpactFirst</CardTitle>
                      <CardDescription>Social Impact Org</CardDescription>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Bandana Exports is a model for social enterprise. Their
                    commitment to fair trade and community empowerment is truly
                    commendable."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partnership Opportunities Section */}
        <section id="partners" className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold">Partner With Purpose</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We are actively seeking partnerships to amplify our impact. We
              welcome:
            </p>
            <div className="max-w-4xl mx-auto mt-8 grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-center gap-3">
                <Building className="h-5 w-5 text-primary" /> International
                retailers
              </div>
              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-primary" /> Social impact
                investors
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-primary" /> Cultural exchange
                programs
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-primary" /> CSR initiatives
              </div>
              <div className="flex items-center gap-3">
                <Handshake className="h-5 w-5 text-primary" /> Fair trade
                organizations
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-primary" /> Boutique stores
                worldwide
              </div>
            </div>
            <div className="mt-12">
              <Button size="lg">Partner for Impact</Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-secondary/20">
          <div className="container mx-auto text-center">
            <p className="text-primary font-semibold">GET IN TOUCH</p>
            <h2 className="text-4xl font-bold mt-2">Join Our Movement</h2>
            <div className="mt-8 text-lg">
              <p>
                <span className="font-semibold">Office Address:</span> Block-B2,
                Flat No-4/8, Hi-Tech Plaza, Sunderpada Road, Bhubaneswar,
                KHORDHA, ODISHA, 751002.
              </p>
              <p className="mt-2">
                <span className="font-semibold">Business Hours:</span> Monday –
                Saturday, 9:00 AM – 6:00 PM (IST)
              </p>
            </div>
            <div className="mt-8">
              <Button size="lg">Request Product Catalog</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
