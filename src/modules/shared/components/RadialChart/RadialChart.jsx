import React from "react";
import * as ReactDOM from "react-dom";
import * as d3 from 'd3';

import COLORS from "src/modules/shared/model/COLORS";

export default class RadialChart extends React.Component {
  componentWillMount() {
    this.radius = 100;
    this.padding = 30;
    this.boxSize = (this.radius + this.padding) * 2;
  }

  componentDidMount() {

    const progress = this.props.progress || 0.5;
    const foregroundColor = this.props.foregroundColor || COLORS.PRIMARY;
    const backgroudColor = this.props.backgroundColor || COLORS.SECONDARY;

    const border = 5;

    var twoPi = Math.PI * 2;
    var formatPercent = d3.format('.0%');

    var arc = d3.arc()
      .startAngle(0)
      .innerRadius(this.radius)
      .outerRadius(this.radius - border);

    var parent = d3.select(ReactDOM.findDOMNode(this));

    var svg = parent.append('svg')
      .attr('width', this.boxSize)
      .attr('height', this.boxSize);

    var g = svg.append('g')
      .attr('transform', 'translate(' + this.boxSize / 2 + ',' + this.boxSize / 2 + ')');

    var meter = g.append('g')
      .attr('class', 'progress-meter');

    meter.append('path')
      .attr('class', 'background')
      .attr('fill', backgroudColor)
      .attr('fill-opacity', 0.5)
      .attr('d', arc.endAngle(twoPi));

    var foreground = meter.append('path')
      .attr('class', 'foreground')
      .attr('fill', foregroundColor)
      .attr('fill-opacity', 1)
      .attr('stroke', foregroundColor)
      .attr('stroke-width', 5)
      .attr('stroke-opacity', 1);

    var front = meter.append('path')
      .attr('class', 'foreground')
      .attr('fill', foregroundColor)
      .attr('fill-opacity', 1);

    var numberText = meter.append('text')
      .attr('fill', foregroundColor)
      .attr('text-anchor', 'middle')
      .attr('dy', '.35em');

    foreground.attr('d', arc.endAngle(twoPi * progress));
    front.attr('d', arc.endAngle(twoPi * progress));
    numberText.text(formatPercent(progress));
  }

  render() {
    const style = {
      width:this.boxSize+"px",
      height:this.boxSize+"px"
    };

    return <div style={style}></div>;
  }
}
