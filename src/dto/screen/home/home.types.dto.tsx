import StayFilter from "@/components/screens/home/providers/stay.filter";
import ToursFilter from "@/components/screens/home/providers/tours.filter";
import TransportFilter from "@/components/screens/home/providers/transport.filter";
import FlightFilter from "@/components/screens/home/providers/flight.filter";
import { TabItems } from "@/dto/types/home.types";

export const tabsLists: TabItems[] = [
    {
      key: "stay",
      title: "Stay",
      url: "/stay",
      icon: "/icons/home-filter-icons/stay.svg",
      activeIcon: "/icons/home-filter-icons/stay-selected.svg",
      banner: "bg-[url(/dist/banners/travelliyan-home-stay-banner.png)]",
      component: <StayFilter />,
      bannerTitle: (
        <>
          <span className="font-medium">
            Comfort, Convenience <br />& the
          </span>{" "}
          <strong className="font-extrabold">Best Deals</strong>
        </>
      ),
    },
    {
      key: "tours",
      title: "Tours",
      url: "/tours",
      icon: "/icons/home-filter-icons/tours.svg",
      activeIcon: "/icons/home-filter-icons/tours-selected.svg",
      banner: "bg-[url(/dist/banners/travelliyan-home-tours-banner.png)]",
      component: <ToursFilter />,
      bannerTitle: (
        <>
          <span className="font-medium">
            Your Next Adventure <br />
          </span>{" "}
          <strong className="font-extrabold">Starts Here</strong>
        </>
      ),
    },
    {
      key: "transport",
      title: "Transport",
      url: "/transport",
      icon: "/icons/home-filter-icons/transport.svg",
      activeIcon: "/icons/home-filter-icons/transport-selected.svg",
      banner: "bg-[url(/dist/banners/travelliyan-home-transport-banner.png)]",
      component: <TransportFilter />,
      bannerTitle: (
        <>
          <span className="font-medium">
            Find the Perfect Car <br />
          </span>{" "}
          <strong className="font-extrabold">for the Road Ahead</strong>
        </>
      ),
    },
    // {
    //   key: "flight",
    //   title: "Flight",
    //   url: "/flight",
    //   icon: "/icons/home-filter-icons/flight.svg",
    //   activeIcon: "/icons/home-filter-icons/flight-selected.svg",
    //   banner: "bg-[url(/dist/banners/travelliyan-home-flight-banner.png)]",
    //   component: <FlightFilter />,
    //   bannerTitle: (
    //     <>
    //       <span className="font-medium">
    //         Where do you want <br />
    //       </span>{" "}
    //       <strong className="font-extrabold">to explore?</strong>
    //     </>
    //   ),
    // },
  ];