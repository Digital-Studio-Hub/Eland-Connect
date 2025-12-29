import { useState } from "react";
import { Link } from "wouter";
import { Phone, MessageCircle, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/layout";

import img1 from "@assets/stock_images/modern_house_constru_db51e9bd.webp";
import img2 from "@assets/stock_images/modern_house_constru_a41f512d.webp";
import img3 from "@assets/stock_images/home_renovation_inte_262edd13.webp";
import img4 from "@assets/stock_images/home_renovation_inte_db069ffd.webp";
import img5 from "@assets/stock_images/professional_tiling__844d9eae.webp";
import img6 from "@assets/stock_images/professional_tiling__1b92860b.webp";
import img7 from "@assets/stock_images/professional_cleanin_cf048e92.webp";
import img8 from "@assets/stock_images/professional_cleanin_d14a6c79.webp";
import img9 from "@assets/stock_images/beautiful_finished_k_ce541184.webp";
import img10 from "@assets/stock_images/beautiful_finished_k_96565583.webp";
import img11 from "@assets/stock_images/modern_bathroom_tile_8d9c57ac.webp";
import img12 from "@assets/stock_images/modern_bathroom_tile_18924e1f.webp";
import img13 from "@assets/stock_images/exterior_house_paint_ab103317.webp";
import img14 from "@assets/stock_images/office_building_comm_8008a607.webp";

const PHONE_NUMBER = "0845694531";
const WHATSAPP_NUMBER = "27845694531";

const galleryImages = [
  { id: "1", src: img1, alt: "House construction project", category: "Construction" },
  { id: "2", src: img2, alt: "Building site progress", category: "Construction" },
  { id: "3", src: img3, alt: "Living room renovation", category: "Renovation" },
  { id: "4", src: img4, alt: "Home interior remodel", category: "Renovation" },
  { id: "5", src: img5, alt: "Professional floor tiling", category: "Tiling" },
  { id: "6", src: img6, alt: "Ceramic tile installation", category: "Tiling" },
  { id: "7", src: img7, alt: "Office cleaning service", category: "Cleaning" },
  { id: "8", src: img8, alt: "Professional cleaning team", category: "Cleaning" },
  { id: "9", src: img9, alt: "Modern kitchen renovation", category: "Renovation" },
  { id: "10", src: img10, alt: "Kitchen remodel complete", category: "Renovation" },
  { id: "11", src: img11, alt: "Luxury bathroom tiling", category: "Tiling" },
  { id: "12", src: img12, alt: "Bathroom tile work", category: "Tiling" },
  { id: "13", src: img13, alt: "Exterior house finishing", category: "Construction" },
  { id: "14", src: img14, alt: "Commercial building renovation", category: "Renovation" },
];

const categories = ["All", "Construction", "Renovation", "Tiling", "Cleaning"];

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