"use client";
import Title from "@/components/common/title";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { testimonialComments } from "@/utils/constants";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section id="testimonial-section" className="bg-secondary-dark/30 py-20">
      <div className="container">
        <Title title="Success Stories" />
        <div className="w-full flex items-center justify-center ">
          <CarouselSpacing />
        </div>
      </div>
    </section>
  );
};
export default TestimonialSection;

export function CarouselSpacing() {
  return (
    <Carousel
      className="w-full "
      opts={{
        loop: true,
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent className="-ml-1">
        {testimonialComments.map((comment, index) => (
          <CarouselItem
            key={index}
            className="pl-1 basis-full md:basis-1/2 lg:basis-1/3 flex"
          >
            <div className="p-1 flex w-full">
              <Card className="bg-text-dark border border-white/10 py-10 px-5  ">
                <CardHeader>
                  <CardTitle className="mb-4">
                    <div className="bg-linear-to-br from-quaternary-dark to-tertiary-dark text-xl flex items-center justify-center w-12 h-12 rounded-full">
                      <span className="text-text-third font-bold">
                        {comment.initial}
                      </span>
                    </div>
                  </CardTitle>
                  <CardDescription className="flex flex-col font-bold text-white">
                    {comment.name}
                    <span className="text-sm text-main-color font-normal">
                      {comment.description}
                    </span>
                  </CardDescription>
                  <CardAction className="flex items-center justify-center gap-1">
                    {Array.from({ length: comment.stars }).map((_, index) => (
                      <Star
                        key={index}
                        className="text-yellow-500 fill-yellow-500"
                        size={17}
                      />
                    ))}
                    {Array.from({ length: 5 - comment.stars }).map(
                      (_, index) => (
                        <Star
                          className="text-yellow-500 "
                          key={index}
                          size={17}
                          strokeWidth={1.7}
                        />
                      )
                    )}
                  </CardAction>
                </CardHeader>
                <CardContent className="grow">
                  <p className="italic text-text-secondary">
                    {comment.comment}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
