import { useState } from "react";
import { Link } from "wouter";
import { Phone, MessageCircle, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/layout";

import img1 from "@assets/20250501_172240_1767173503168.webp";
import img2 from "@assets/1720721021660_1767173503169.webp";
import img3 from "@assets/1726148456276_1767173503173.webp";
import img4 from "@assets/FB_IMG_1733162722713_1767173503176.webp";
import img5 from "@assets/FB_IMG_1733162750411_1767173503177.webp";
import img6 from "@assets/1765016622089_1767173503173.webp";
import img7 from "@assets/1765016622105_1767173503174.webp";
import img8 from "@assets/1765016622117_1767173503174.webp";
import img9 from "@assets/IMG-20240405-WA0046_1767173503179.webp";
import img10 from "@assets/1720013400035_1767173503168.webp";
import img11 from "@assets/Screenshot_2024-12-18_100704_1767173503179.webp";
import img12 from "@assets/1765016622379_1767173503175.webp";
import img13 from "@assets/1720945794991_1767173503170.webp";
import img14 from "@assets/FB_IMG_16612461359325917_1767173503177.webp";
import img15 from "@assets/FB_IMG_16614108620128689_1767173503178.webp";
import img16 from "@assets/FB_IMG_1733127550658_1767173503176.webp";
import img17 from "@assets/1722867457714_1767173503170.webp";
import img18 from "@assets/1722867464884_1767173503171.webp";
import img19 from "@assets/1722867480111_1767173503171.webp";
import img20 from "@assets/1722960435101_1767173503172.webp";

const PHONE_NUMBER = "0845694531";
const WHATSAPP_NUMBER = "27845694531";

const galleryImages = [
  { id: "1", src: img1, alt: "Commercial building construction with scaffolding", category: "Construction" },
  { id: "2", src: img2, alt: "Worker on roof construction site", category: "Construction" },
  { id: "3", src: img3, alt: "Brick wall construction in progress", category: "Construction" },
  { id: "4", src: img4, alt: "Foundation laying for new house", category: "Construction" },
  { id: "5", src: img5, alt: "Block wall building project", category: "Construction" },
  { id: "6", src: img6, alt: "Residential house construction", category: "Construction" },
  { id: "7", src: img7, alt: "New home building progress", category: "Construction" },
  { id: "8", src: img8, alt: "House walls under construction", category: "Construction" },
  { id: "9", src: img9, alt: "Bricklaying and masonry work", category: "Construction" },
  { id: "10", src: img10, alt: "Deck and porch renovation", category: "Renovation" },
  { id: "11", src: img11, alt: "Foundation and retaining wall work", category: "Renovation" },
  { id: "12", src: img12, alt: "Foundation trenching for new build", category: "Construction" },
  { id: "13", src: img13, alt: "Floor tiling in progress", category: "Tiling" },
  { id: "14", src: img14, alt: "Room floor tiling installation", category: "Tiling" },
  { id: "15", src: img15, alt: "Professional tile work", category: "Tiling" },
  { id: "16", src: img16, alt: "Modern kitchen counter with tiles", category: "Tiling" },
  { id: "17", src: img17, alt: "Paving stone installation", category: "Construction" },
  { id: "18", src: img18, alt: "Completed paving work with roller", category: "Construction" },
  { id: "19", src: img19, alt: "Curved kerb stone installation", category: "Construction" },
  { id: "20", src: img20, alt: "Plumbing installation work", category: "Renovation" },
];

const categories = ["All", "Construction", "Renovation", "Tiling"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in your building and cleaning services.`,
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <Layout>
      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-gallery-heading">
              Our Work
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse some of the construction, renovation, tiling, and cleaning work we do. 
              Our gallery shows the quality and care we put into every project.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "" : ""}
                data-testid={`button-filter-${category.toLowerCase()}`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => openLightbox(index)}
                className="relative group overflow-hidden rounded-md aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                data-testid={`button-gallery-image-${image.id}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-white text-xs font-medium">
                    {image.category}
                  </span>
                  <p className="text-white text-sm mt-1">{image.alt}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            data-testid="button-lightbox-close"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 text-white/80 hover:text-white p-2"
            data-testid="button-lightbox-prev"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 text-white/80 hover:text-white p-2"
            data-testid="button-lightbox-next"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          <div className="max-w-5xl max-h-[85vh] px-4">
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
            <div className="text-center mt-4">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded text-white text-sm font-medium">
                {filteredImages[lightboxIndex].category}
              </span>
              <p className="text-white/80 text-sm mt-2">{filteredImages[lightboxIndex].alt}</p>
              <p className="text-white/50 text-xs mt-1">
                {lightboxIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="py-16 lg:py-24 bg-[#1E3A5F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="text-gallery-cta-heading">
            Like What You See?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Let us bring the same quality and attention to detail to your project. Contact us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleCall}
              className="gap-2 bg-[#F39A1E] hover:bg-[#E08A0E] text-white border-[#E08A0E] text-lg px-8"
              data-testid="button-gallery-cta-call"
            >
              <Phone className="h-5 w-5" />
              Call: 084 569 4531
            </Button>
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white border-[#20BD5A] text-lg px-8"
              data-testid="button-gallery-cta-whatsapp"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
