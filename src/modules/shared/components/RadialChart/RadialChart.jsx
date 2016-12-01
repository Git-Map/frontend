import React from "react";
import * as ReactDOM from "react-dom";
import * as d3 from 'd3';
import COLORS from "../../model/COLORS";

const DOUBLE_PI = Math.PI * 2;

const formatPercent = d3.format('.0%');

export default class RadialChart extends React.Component {
  componentWillMount() {
    this.radius = 100;
    this.padding = 30;
    this.boxSize = (this.radius + this.padding) * 2;
  }

  componentDidMount() {

    const foregroundColor = this.props.foregroundColor || COLORS.PRIMARY;
    const backgroudColor = this.props.backgroundColor || COLORS.SECONDARY;

    const border = 5;

    this.arc = d3.arc()
      .startAngle(0)
      .innerRadius(this.radius)
      .outerRadius(this.radius - border);

    var parent = d3.select(ReactDOM.findDOMNode(this));

    var svg = parent.append('svg')
      .attr('width', this.boxSize)
      .attr('height', this.boxSize);

    var g = svg.append('g')
      .attr('transform', 'translate(' + this.boxSize / 2 + ',' + this.boxSize / 2 + ')');

    var meter = g.append('g');

    meter.append('path')
      .attr('class', 'background')
      .attr('fill', backgroudColor)
      .attr('fill-opacity', 0.5)
      .attr('d', this.arc.endAngle(DOUBLE_PI));

    this.foreground = meter.append('path')
      .attr('class', 'foreground')
      .attr('fill', foregroundColor)
      .attr('fill-opacity', 1)
      .attr('stroke', foregroundColor)
      .attr('stroke-width', 5)
      .attr('stroke-opacity', 1);

    this.front = meter.append('path')
      .attr('class', 'foreground')
      .attr('fill', foregroundColor)
      .attr('fill-opacity', 1);

    this.numberText = meter.append('text')
      .attr('fill', foregroundColor)
      .attr('text-anchor', 'middle')
      .attr('dy', '.35em');
  }

  render() {

    const progress = this.props.progress || 0;
    const label = this.props.label || formatPercent(progress);

    const style = {
      width:this.boxSize+"px",
      height:this.boxSize+"px"
    };

    if(this.foreground){
      this.foreground.attr('d', this.arc.endAngle(DOUBLE_PI * progress));
      this.front.attr('d', this.arc.endAngle(DOUBLE_PI * progress));
      this.numberText.text(label);
    }

    return <div style={style}></div>;
  }
}
