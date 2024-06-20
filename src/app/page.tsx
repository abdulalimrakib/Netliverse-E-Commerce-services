import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your email in seconds and download them right away.",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col max-w-3xl items-center">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-6xl">
            Your marketplace for high-quality{" "}
            <span className="text-blue-600">ecommerce assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to DigitalHippo. Every asset on our platform is verified by
            our team to ensure our highest quality standards.
          </p>
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <Link href={"/products"} className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="outline">Our quality promise &rarr;</Button>
          </div>
        </div>

        {/* TODO: List Products */}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-col-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:text-left md:items-start lg:block lg:text-center"
              >
                <div className="flex justify-center md:flex-shrink-0">
                  <div className="flex justify-center items-center w-16 h-16 rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon/>}
                  </div>
                </div>

                <div className="mt-6 md:mt-0 md:ml-4 lg:ml-0 lg:mt-6">
                  <div className="text-base font-medium">{perk.name}</div>
                  <div className="mt-3 text-sm text-muted-foreground">{perk.description}</div>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
