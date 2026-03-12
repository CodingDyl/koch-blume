"use client";

import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MessageSquareQuote,
  Star,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

type GoogleReview = {
  author_name?: string;
  author_url?: string;
  profile_photo_url?: string;
  rating?: number;
  relative_time_description?: string;
  text?: string;
  time?: number;
};

type PlaceDetails = {
  name?: string;
  rating?: number;
  user_ratings_total?: number;
  url?: string;
  reviews?: GoogleReview[];
};

const GOOGLE_MAPS_SCRIPT_ID = "google-maps-places-script";
let googleMapsPromise: Promise<void> | null = null;

function loadGoogleMapsPlacesScript(apiKey: string): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Browser environment required."));
  }

  const win = window as Window & {
    google?: {
      maps?: {
        places?: unknown;
      };
    };
  };

  if (win.google?.maps?.places) {
    return Promise.resolve();
  }

  if (googleMapsPromise) {
    return googleMapsPromise;
  }

  googleMapsPromise = new Promise((resolve, reject) => {
    const existing = document.getElementById(
      GOOGLE_MAPS_SCRIPT_ID,
    ) as HTMLScriptElement | null;

    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error("Failed to load Google Maps script.")),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.id = GOOGLE_MAPS_SCRIPT_ID;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places&loading=async`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Google Maps script."));

    document.head.appendChild(script);
  });

  return googleMapsPromise;
}

function getPlaceDetails(placeId: string): Promise<PlaceDetails> {
  return new Promise((resolve, reject) => {
    const win = window as Window & {
      google?: {
        maps?: {
          places?: {
            PlacesService: new (el: HTMLElement) => {
              getDetails: (
                request: Record<string, unknown>,
                callback: (
                  place: PlaceDetails | null,
                  status: string,
                ) => void,
              ) => void;
            };
          };
        };
      };
    };

    const places = win.google?.maps?.places;
    if (!places) {
      reject(new Error("Google Places API is unavailable."));
      return;
    }

    const service = new places.PlacesService(document.createElement("div"));

    service.getDetails(
      {
        placeId,
        fields: ["name", "rating", "user_ratings_total", "url", "reviews"],
      },
      (place, status) => {
        if (status === "OK" && place) {
          resolve(place);
          return;
        }

        reject(new Error(`Failed to load reviews (${status}).`));
      },
    );
  });
}

function Stars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Rated ${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${star <= Math.round(value) ? "fill-steel-blue text-steel-blue" : "text-deep-navy/20"}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [placeName, setPlaceName] = useState("Kochukov & Blume");
  const [placeRating, setPlaceRating] = useState<number | null>(null);
  const [ratingsTotal, setRatingsTotal] = useState<number | null>(null);
  const [placeUrl, setPlaceUrl] = useState<string | null>(null);
  const [reviews, setReviews] = useState<GoogleReview[]>([]);

  const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

  const leaveReviewUrl = useMemo(() => {
    if (placeId) {
      return `https://search.google.com/local/writereview?placeid=${encodeURIComponent(placeId)}`;
    }
    if (placeUrl) {
      return placeUrl;
    }
    return "https://www.google.com/maps";
  }, [placeId, placeUrl]);

  useEffect(() => {
    const loadReviews = async () => {
      if (!mapsApiKey || !placeId) {
        setLoading(false);
        setError("Google reviews are not configured yet.");
        return;
      }

      try {
        await loadGoogleMapsPlacesScript(mapsApiKey);
        const details = await getPlaceDetails(placeId);
        const fetchedReviews = [...(details.reviews ?? [])].sort(
          (a, b) => (b.time ?? 0) - (a.time ?? 0),
        );

        setPlaceName(details.name || "Kochukov & Blume");
        setPlaceRating(details.rating ?? null);
        setRatingsTotal(details.user_ratings_total ?? null);
        setPlaceUrl(details.url ?? null);
        setReviews(fetchedReviews);
        setError(null);
      } catch (err) {
        const message =
          err instanceof Error
            ? err.message
            : "Unable to load Google reviews at the moment.";
        setError(message);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, [mapsApiKey, placeId]);

  const nextReview = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const previousReview = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    if (!isAutoPlaying || reviews.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      nextReview();
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextReview, reviews.length]);

  const handleManualNavigation = (callback: () => void) => {
    setIsAutoPlaying(false);
    callback();
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const showEmptyState = !loading && reviews.length === 0;

  return (
    <section
      className="py-20 md:py-32 lg:py-40 bg-white relative overflow-hidden"
      id="google-reviews"
    >
      <div className="absolute inset-0 bg-[url('/images/background.png')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20 lg:mb-24"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-steel-blue mb-4">
            Reputation
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-deep-navy tracking-tight">
            Google Reviews
          </h2>

          {placeRating !== null && ratingsTotal !== null && (
            <div className="mt-6 flex items-center justify-center gap-3 text-deep-navy/80">
              <Stars value={placeRating} />
              <span className="text-sm md:text-base">
                {placeRating.toFixed(1)} from {ratingsTotal} review
                {ratingsTotal === 1 ? "" : "s"}
              </span>
            </div>
          )}
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute -top-4 left-0 md:-left-8 z-0"
          >
            <MessageSquareQuote className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-steel-blue/10" />
          </motion.div>

          {loading && (
            <div className="relative z-10 border border-deep-navy/10 bg-white/80 p-8 md:p-12 lg:p-16">
              <div className="h-5 w-36 bg-deep-navy/10 animate-pulse mb-8" />
              <div className="space-y-3">
                <div className="h-4 w-full bg-deep-navy/10 animate-pulse" />
                <div className="h-4 w-[92%] bg-deep-navy/10 animate-pulse" />
                <div className="h-4 w-[85%] bg-deep-navy/10 animate-pulse" />
              </div>
            </div>
          )}

          {!loading && reviews.length > 0 && (
            <motion.div
              key={reviews[currentIndex].time ?? currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="mb-8 flex items-center gap-4">
                <Stars value={reviews[currentIndex].rating ?? 5} />
                <span className="text-sm text-deep-navy/60">
                  {reviews[currentIndex].relative_time_description ?? "Google review"}
                </span>
              </div>

              <div className="mb-12 md:mb-16">
                <p className="text-xl md:text-2xl lg:text-3xl text-deep-navy/90 font-light leading-relaxed tracking-tight">
                  {reviews[currentIndex].text || "No written text was included with this review."}
                </p>
              </div>

              <div className="flex items-center justify-between gap-6 flex-wrap">
                <div className="flex items-center space-x-6">
                  <div className="h-px w-12 md:w-16 bg-steel-blue" />
                  <h3 className="text-base md:text-lg lg:text-xl font-medium text-deep-navy tracking-wide">
                    {reviews[currentIndex].author_name ?? "Google User"}
                  </h3>
                </div>

                <a
                  href={placeUrl || "https://www.google.com/maps"}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-steel-blue hover:text-deep-navy transition-colors"
                >
                  View on Google
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          )}

          {showEmptyState && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative z-10 border border-deep-navy/10 bg-white/80 p-8 md:p-12 lg:p-14"
            >
              <div className="mb-6 flex items-center gap-3">
                <MessageSquareQuote className="h-5 w-5 text-steel-blue" />
                <h3 className="text-xl md:text-2xl font-display font-semibold text-deep-navy">
                  No Google reviews yet
                </h3>
              </div>

              <p className="text-deep-navy/75 text-base md:text-lg w-full max-w-[56rem] leading-relaxed mb-8">
                We are building our public review profile. If you have worked with {placeName}, your feedback helps future clients make informed decisions.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={leaveReviewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-steel-blue text-white hover:bg-steel-blue/90 transition-colors text-sm font-medium"
                >
                  Leave a Google Review
                  <ExternalLink className="h-4 w-4" />
                </a>

                <a
                  href={placeUrl || "https://www.google.com/maps"}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-deep-navy/20 text-deep-navy hover:border-steel-blue transition-colors text-sm font-medium"
                >
                  Open on Google Maps
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {error && (
                <p className="mt-5 text-sm text-deep-navy/50">{error}</p>
              )}
            </motion.div>
          )}

          {!loading && reviews.length > 1 && (
            <div className="flex items-center justify-between mt-12 md:mt-16 lg:mt-20">
              <button
                onClick={() => handleManualNavigation(previousReview)}
                className="group flex items-center space-x-2 text-deep-navy/60 hover:text-deep-navy transition-colors duration-300"
                aria-label="Previous review"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-deep-navy/20 group-hover:border-steel-blue transition-colors duration-300">
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="hidden sm:inline text-sm md:text-base font-medium">Previous</span>
              </button>

              <div className="flex items-center space-x-2 md:space-x-3">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      handleManualNavigation(() => setCurrentIndex(index))
                    }
                    className="group"
                    aria-label={`Go to review ${index + 1}`}
                  >
                    <div
                      className={`transition-all duration-300 ${
                        index === currentIndex
                          ? "w-8 md:w-10 h-1 bg-steel-blue"
                          : "w-1 h-1 bg-deep-navy/20 group-hover:bg-deep-navy/40"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={() => handleManualNavigation(nextReview)}
                className="group flex items-center space-x-2 text-deep-navy/60 hover:text-deep-navy transition-colors duration-300"
                aria-label="Next review"
              >
                <span className="hidden sm:inline text-sm md:text-base font-medium">Next</span>
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-deep-navy/20 group-hover:border-steel-blue transition-colors duration-300">
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </button>
            </div>
          )}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-24 lg:mt-32 h-px bg-gradient-to-r from-transparent via-steel-blue/20 to-transparent origin-center"
        />
      </div>
    </section>
  );
}
