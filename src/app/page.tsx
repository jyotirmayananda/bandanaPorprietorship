"use client";

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
import { motion } from "framer-motion";
import { Plane, Ship, Container } from "lucide-react";

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

  const containerShipImage = PlaceHolderImages.find((p) => p.id === "container-ship");
  const logisticsTruckImage = PlaceHolderImages.find((p) => p.id === "logistics-truck");
  const cargoPlaneImage = PlaceHolderImages.find((p) => p.id === "cargo-plane");

  return (
    <div className="max-w-screen-2xl mx-auto shadow-2xl">
      <div className="bg-background/90 text-foreground">
        {/* Hero Section */}
        <section
          className="relative py-24 md:py-40 bg-cover bg-center text-primary-foreground rounded-t-lg overflow-hidden"
          style={{ backgroundImage: `url(${heroImage?.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-0" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold leading-tight mt-2 max-w-5xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-foreground to-white/80"
            >
              Empowering Odisha's Heritage, Delivering Authenticity Worldwide.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 text-xl text-primary-foreground/90 max-w-3xl mx-auto font-light"
            >
              From farm-fresh spices to handcrafted treasures, we bridge
              Odisha's villages to global markets while uplifting rural women
              artisans.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 flex flex-wrap justify-center gap-6"
            >
              <Button size="lg" className="h-14 px-8 text-lg font-semibold shadow-xl hover:scale-105 transition-transform">
                Request Product Catalog
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg font-semibold border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                Partner for Impact
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-white rounded-full" />
            </div>
          </motion.div>
        </section>

        {/* Mission/Vision Section */}
        <section id="about" className="py-24">
          <div className="container mx-auto text-center px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Bandana Exports: More Than a Trading Company
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto"
            >
              We are a social enterprise dedicated to:
            </motion.p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 mt-16 text-center">
              {[
                { icon: Globe, title: "Exporting Authenticity", text: "Exporting authentic Odisha products worldwide." },
                { icon: Users, title: "Empowering Women", text: "Empowering rural women through sustainable livelihoods." },
                { icon: Sparkles, title: "Preserving Crafts", text: "Preserving traditional crafts and recipes." },
                { icon: Link, title: "Ethical Supply Chains", text: "Building ethical supply chains from village to global market." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center group"
                >
                  <div className="bg-primary/10 p-6 rounded-2xl mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-primary/20">
                    <item.icon className="h-10 w-10 transition-colors" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expanded Product Categories Section */}
        <section id="products" className="py-24 bg-stone-50 dark:bg-stone-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold">Our Curated Collections</h2>
              <p className="text-muted-foreground mt-4">Discover the finest artisanal creations from the heart of Odisha</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                { title: "Premium Spices", img: spicesImage, desc: "Organic farm-to-table spices and traditional blends." },
                { title: "Handcrafted Textiles", img: textilesImage, desc: "Authentic handloom sarees and natural dyed fabrics." },
                { title: "Homemade Delights", img: foodImage, desc: "Traditional Odisha sweets, pickles and preserves." },
                { title: "Artisanal Crafts", img: craftsImage, desc: "Dhokra metal craft and Pattachitra paintings." }
              ].map((product, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 group">
                    {product.img && (
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={product.img.imageUrl}
                          alt={product.img.description}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          data-ai-hint={product.img.imageHint}
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">{product.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {product.desc}
                      </p>
                      <Button variant="link" className="px-0 mt-4 h-auto text-primary group-hover:gap-2 transition-all">
                        Explore Collection <Link className="h-3 w-3" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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

            <div className="grid md:grid-cols-2 gap-16 items-center mt-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              >
                {womenArtisansImage && (
                  <Image
                    src={womenArtisansImage.imageUrl}
                    alt={womenArtisansImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={womenArtisansImage.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-white text-lg font-medium italic">"Every product tells a story of generations."</p>
                </div>
              </motion.div>
              <div className="space-y-8">
                <h3 className="text-3xl font-bold mb-8">
                  The Journey of Homemade Goodness
                </h3>
                <div className="space-y-6">
                  {[
                    { icon: Sparkles, title: "Garden Fresh", desc: "Women picking fresh vegetables from their own backyard gardens." },
                    { icon: Sun, title: "Traditional Prep", desc: "Washing, cutting, and sun-drying ingredients on traditional bamboo mats." },
                    { icon: Hand, title: "Hand Crafting", desc: "Mixing and preparing in traditional earthen pots, following age-old recipes." },
                    { icon: CheckCircle, title: "Quality Check", desc: "Tasting and adjusting flavors, led by the experienced elders." },
                    { icon: Package, title: "Home Packaging", desc: "Lovingly filling and sealing jars in clean home kitchens." }
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-sm hover:shadow-md"
                    >
                      <div className="bg-primary/10 p-3 rounded-xl mt-1 group-hover:bg-primary group-hover:text-white transition-colors">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{step.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
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
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12 text-center">
              {[
                { icon: Users, val: "250+", label: "Rural Women Artisans" },
                { icon: Globe, val: "12+", label: "Export Destinations" },
                { icon: Sparkles, val: "15+", label: "Traditional Crafts" },
                { icon: TrendingUp, val: "₹2.5Cr+", label: "Artisan Income" },
                { icon: Award, val: "500+", label: "Women Trained" }
              ].map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <metric.icon className="h-12 w-12 mb-4 text-white/80" />
                  <p className="text-4xl font-extrabold mb-2 font-mono tracking-tighter">{metric.val}</p>
                  <p className="text-sm font-medium text-primary-foreground/80 uppercase tracking-widest">{metric.label}</p>
                </motion.div>
              ))}
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

        {/* Logistics Services Section */}
        <section id="logistics" className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-primary font-bold tracking-widest uppercase text-sm"
              >
                Global Logistics Solutions
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mt-4"
              >
                Seamless Cargo Delivery
              </motion.h2>
              <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-slate-800 transition-all duration-300 border border-slate-100 dark:border-slate-700"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={containerShipImage?.imageUrl || ""}
                    alt="Container Shipping"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <Container className="text-primary h-12 w-12 mb-2" />
                    <h3 className="text-2xl font-bold text-white">Sea Freight</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-muted-foreground leading-relaxed">
                    Full Container Load (FCL) and Less than Container Load (LCL) services across global shipping lanes. We ensure your heritage products reach their destination safely.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Global Port Coverage</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Real-time Tracking</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-slate-800 transition-all duration-300 border border-slate-100 dark:border-slate-700"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={logisticsTruckImage?.imageUrl || ""}
                    alt="Truck Transport"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <Truck className="text-primary h-12 w-12 mb-2" />
                    <h3 className="text-2xl font-bold text-white">Road Transport</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-muted-foreground leading-relaxed">
                    Extensive trucking network for domestic and cross-border delivery. From village collection to central hubs, we manage the entire road network.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Door-to-Door Delivery</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Temperature Controlled</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-slate-800 transition-all duration-300 border border-slate-100 dark:border-slate-700"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={cargoPlaneImage?.imageUrl || ""}
                    alt="Aircraft Freight"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <Plane className="text-primary h-12 w-12 mb-2 scale-x-[-1]" />
                    <h3 className="text-2xl font-bold text-white">Air Freight</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-muted-foreground leading-relaxed">
                    Express air cargo services for time-sensitive deliveries. Rapid transit for perishable food items and high-value crafts to global hubs.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Express Shipping</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Customs Expertise</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Other Services Section */}
        <section id="services" className="py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-widest uppercase text-sm"
            >
              Beyond Logistics
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mt-4"
            >
              How We Support Our Partners
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 transition-all"
              >
                <div className="p-4 bg-primary/10 rounded-xl inline-block mb-6">
                  <Package className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Private Labeling</h3>
                <p className="text-muted-foreground text-sm">
                  Full custom branding solutions. We help you launch your own brand featuring Odisha's finest products.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 transition-all"
              >
                <div className="p-4 bg-primary/10 rounded-xl inline-block mb-6">
                  <Handshake className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Artisan Network</h3>
                <p className="text-muted-foreground text-sm">
                  Direct access to over 250+ certified artisans. Transparent sourcing and deep cultural connections.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 transition-all"
              >
                <div className="p-4 bg-primary/10 rounded-xl inline-block mb-6">
                  <Camera className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Visual Storytelling</h3>
                <p className="text-muted-foreground text-sm">
                  High-quality media assets and village narratives to help you market the impact behind every product.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 transition-all"
              >
                <div className="p-4 bg-primary/10 rounded-xl inline-block mb-6">
                  <Warehouse className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Bulk Procurement</h3>
                <p className="text-muted-foreground text-sm">
                  Efficient supply for hotels, resorts, and international retailers with strict quality control.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-stone-50 dark:bg-stone-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              Voices from Our Community
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Sophia", role: "International Buyer", country: "Germany", text: "The quality of spices is unparalleled. Our customers can taste the authenticity. Knowing it supports women artisans makes it even better.", img: testimonialBuyer },
                { name: "Sita Devi", role: "Dhokra Artisan", country: "Odisha", text: "Working with Bandana Exports changed my life. I can send my children to school now. My craft is respected.", img: testimonialArtisan },
                { name: "David Chen", role: "Retail Partner", country: "USA", text: "Our collaboration has been seamless. The private labeling service is excellent and our customers love the stories behind products.", img: testimonialPartner },
                { name: "ImpactFirst", role: "Social Impact Org", country: "Global", text: "Bandana Exports is a model for social enterprise. Their commitment to fair trade and community empowerment is truly commendable.", img: testimonialImpact }
              ].map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300">
                    <CardContent className="pt-8">
                      <Star className="h-5 w-5 text-primary fill-primary mb-6" />
                      <p className="text-muted-foreground italic mb-8 leading-relaxed">
                        "{t.text}"
                      </p>
                      <div className="flex items-center">
                        {t.img && (
                          <Avatar className="h-12 w-12 mr-4 border-2 border-primary/20">
                            <AvatarImage
                              src={t.img.imageUrl}
                              alt={t.name}
                            />
                            <AvatarFallback>{t.name[0]}</AvatarFallback>
                          </Avatar>
                        )}
                        <div>
                          <CardTitle className="text-base">{t.name}</CardTitle>
                          <CardDescription>{t.role}, {t.country}</CardDescription>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
