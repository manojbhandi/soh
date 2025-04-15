import MainTitle from "@/components/Ui/MainTitle";
import * as d3 from "d3";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function WorldMapBanner() {
  // const svgRef = useRef(); // Define the ref here

  // useEffect(() => {
  //   const width = 800;
  //   const height = 500;

  //   const svg = d3
  //     .select(svgRef.current)
  //     .attr("width", width)
  //     .attr("height", height);

  //   d3.json(
  //     "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
  //   ).then((geoData) => {
  //     const projection = d3
  //       .geoMercator()
  //       .scale(100)
  //       .translate([width / 2, height / 1.5]);

  //     const pathGenerator = d3.geoPath().projection(projection);

  //     svg
  //       .selectAll("path")
  //       .data(geoData.features)
  //       .join("path")
  //       .attr("d", pathGenerator)
  //       .attr("fill", "#a87e2b")
  //       .attr("stroke", "#a87e2b");
  //   });
  // }, []);

  return (
    <div className="bg-[#F7F3EA]">
      <div className="container">
        <MainTitle
          title={"Development Update"}
          customClass={"py-5 xl:py-[3vw] text-center"}
        />
        <div className="px-4 pb-4 xl:px-[5vw] xl:pb-[3vw]">
          <Image
            src={"/images/development-update/map.png"}
            width={1920}
            height={1080}
            alt=""
            className={"w-full h-auto"}
          />
        </div>
      </div>
    </div>
  );
}
