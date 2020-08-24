import React, { useRef, useEffect } from 'react';
import * as d3 from "d3"

function Treemap({ width, height, data }){
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
            .style("border", "1px solid black")
    }, []);

    useEffect(() => {
        draw();
    }, [data]);

    const draw = () => {
        const svg = d3.select(ref.current);

        // Give the data to this cluster layout:
        var root = d3.hierarchy(data).sum(function(d){ return d.value});

        // initialize treemap
        d3.treemap()
            .size([width, height])
            .paddingTop(0)
            .paddingInner(3)
            (root);
        
        const color = d3.scaleOrdinal()
            .domain([""])
            .range([ "#2c3e50"]);

        const opacity = d3.scaleLinear()
            .domain([10, 30])
            .range([.5,1]);


        // Select the nodes
        var nodes = svg
                    .selectAll("rect")
                    .data(root.leaves())

        // animate new additions
        nodes
            .transition().duration(300)
                .attr('x', function (d) { return d.x0; })
                .attr('y', function (d) { return d.y0; })
                .attr('width', function (d) { return d.x1 - d.x0; })
                .attr('height', function (d) { return d.y1 - d.y0; })
                .style("opacity", function(d){ return opacity(d.data.value)})
                .style("fill", function(d){ return color(d.parent.data.name)} )
        
        // draw rectangles
        nodes.enter()
            .append("rect")
            .attr('x', function (d) { return d.x0; })
            .attr('y', function (d) { return d.y0; })
            .attr('width', function (d) { return d.x1 - d.x0; })
            .attr('height', function (d) { return d.y1 - d.y0; })
            .style("stroke", "black")
            .style("fill", function(d){ return color(d.parent.data.name)} )
            .style("opacity", function(d){ return opacity(d.data.value)})

        nodes.exit().remove()

        // select node titles
        var nodeText = svg
            .selectAll("text")
            .data(root.leaves())

        // animate new additions
        nodeText
            .transition().duration(300)
                .attr("x", function(d){ return d.x0+5})
                .attr("y", function(d){ return d.y0+20})
                .text(function(d){ return d.data.name.replace('mister_','') })

        // add the text
        nodeText.enter()
            .append("text")
            .attr("x", function(d){ return d.x0+5})
            .attr("y", function(d){ return d.y0+20})
            .text(function(d){ return d.data.name.replace('mister_','') })
            .attr("font-size", "19px")
            .attr("fill", "white")

        nodeText.exit().remove()
        
        //select node values
        var nodeVals = svg
            .selectAll("vals")
            .data(root.leaves())  
        
        nodeVals
            .transition().duration(300)
                .attr("x", function(d){ return d.x0+5})
                .attr("y", function(d){ return d.y0+35})
                .text(function(d){ return d.data.value })

        // add the values
        nodeVals.enter()
            .append("text")
            .attr("x", function(d){ return d.x0+5})    
            .attr("y", function(d){ return d.y0+35}) 
            .text(function(d){ return d.data.value })
            .attr("font-size", "11px")
            .attr("fill", "white")

        nodeVals.exit().remove()
    
        // add the parent node titles
        svg
            .selectAll("titles")
            .data(root.descendants().filter(function(d){return d.depth==1}))
            .enter()
            .append("text")
                .attr("x", function(d){ return d.x0})
                .attr("y", function(d){ return d.y0+21})
                .text(function(d){ return d.data.name })
                .attr("font-size", "19px")
                .attr("fill",  function(d){ return color(d.data.name)} )
    
        // Add the chart heading
        svg
        .append("text")
            .attr("x", 0)
            .attr("y", 14)    
            .text("")
            .attr("font-size", "19px")
            .attr("fill",  "gray")
    }


    return (
        <div id="skills" className="chart">
            <div className="heading">
                <h3>Skills Section</h3>
                </div>
            <svg className="vis" ref={ref}>
            </svg>
        </div>
        
    )

}

export default Treemap;

// extends React.Component {
//   constructor(props) {
//     super(props)
//     this.myRef = React.createRef()
//   }

//   componentDidMount(){
//       this.drawChart()
//   }

//   drawChart() {
//     const { w, h } = this.props
//     const data = {"children":[{"name":"boss1","children":[{"name":"mister_a","group":"A","value":28,"colname":"level3"},{"name":"mister_b","group":"A","value":19,"colname":"level3"},{"name":"mister_c","group":"C","value":18,"colname":"level3"},{"name":"mister_d","group":"C","value":19,"colname":"level3"}],"colname":"level2"},{"name":"boss2","children":[{"name":"mister_e","group":"C","value":14,"colname":"level3"},{"name":"mister_f","group":"A","value":11,"colname":"level3"},{"name":"mister_g","group":"B","value":15,"colname":"level3"},{"name":"mister_h","group":"B","value":16,"colname":"level3"}],"colname":"level2"},{"name":"boss3","children":[{"name":"mister_i","group":"B","value":10,"colname":"level3"},{"name":"mister_j","group":"A","value":13,"colname":"level3"},{"name":"mister_k","group":"A","value":13,"colname":"level3"},{"name":"mister_l","group":"D","value":25,"colname":"level3"},{"name":"mister_m","group":"D","value":16,"colname":"level3"},{"name":"mister_n","group":"D","value":28,"colname":"level3"}],"colname":"level2"}],"name":"CEO"};
//     var root = d3.hierarchy(data).sum(function(d) {return d.value}

//     const accessToRef = d3.select(this.myRef.current)
//         .append("svg")
//         .attr("width", w)
//         .attr("height", h)
//         .style("border", "1px solid black")

//     const color = d3.scaleOrdinal()
//         .domain(["boss1", "boss2", "boss3"])
//         .range(["#402D54", "#D18975", "#8FD175"])

//     const opacity = d3.scaleLinear()
//         .domain([10, 30])
//         .range([.5, 1])

//     d3.treemap()
//         .size([w, h])
//         .paddingTop(28)
//         .paddingRight(7)
//         .paddingInner(3)
//         (root)

//     accessToRef.selectAll("rect")
//         .data(root.leaves())
//         .enter()
//         .append("rect")
//         .attr("x", function (d) {return d.x0})
//         .attr("y", function (d) {return d.y0})
//         .attr("width", function (d) {return d.x1 - d.x0})
//         .attr("height", function (d) {return d.x1 - d.x0})
//         .style("stroke", "black")
//         .style("fill", function(d){ return color(d.parent.data.name)}
//         .style("opacity", function(d){ return opacity(d.data.value)})

//   }

//   render() {
//     return (
//       <React.Fragment>
//         <div ref={this.myRef}></div>
//       </React.Fragment>
//     )
//   }
// }

// export default Chart
