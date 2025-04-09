import * as d3 from "d3";
import { useEffect, useRef } from "react";

export default function WorldMapBanner() {
  const svgRef = useRef(); // Define the ref here

  useEffect(() => {
    const width = 800;
    const height = 500;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    d3.json(
      "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
    ).then((geoData) => {
      const projection = d3
        .geoMercator()
        .scale(100)
        .translate([width / 2, height / 1.5]);

      const pathGenerator = d3.geoPath().projection(projection);

      svg
        .selectAll("path")
        .data(geoData.features)
        .join("path")
        .attr("d", pathGenerator)
        .attr("fill", "#a87e2b")
        .attr("stroke", "#a87e2b");
    });
  }, []);

  return (
    <div className="h-[62vh]  bg-[#F7F3EA] overflow-hidden">
      <svg ref={svgRef} className="development_map"></svg>
    </div>
  );
}
