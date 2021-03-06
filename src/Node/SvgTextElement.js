import React, { Fragment } from 'react';
import T from 'prop-types';
export default class SvgTextElement extends React.PureComponent {
  render() {
    const { id, name, nodeStyle, textLayout, entityType, description } = this.props;
    return (
      <g>
        <text
          className="nodeIdBase"
          style={nodeStyle.id}
          textAnchor={textLayout.textAnchor}
          x={textLayout.x}
          y={textLayout.y}
          transform={textLayout.transform}
          dy=".35em"
        >
          {id}
        </text>
        <text
          className="nodeNameBase"
          style={nodeStyle.name}
          textAnchor={textLayout.textAnchor}
          x={textLayout.x}
          y={textLayout.y}
          transform={textLayout.transform}
          dy=".35em"
        >
          {name}
        </text>
        <text
          className="nodeDescBase"
          style={nodeStyle.description}
          textAnchor={textLayout.textAnchor}
          x={textLayout.x}
          y={textLayout.y}
          transform={textLayout.transform}
          dy=".35em"
        >
          {description}
        </text>
        <g className="nodePropBase">
          {entityType === 'asset' && (
            <Fragment>
              <input type="checkbox" value="review" /> Reviewed <br />
              <button className="assetNode">New Threat</button>
              {/* add comments as popup */}
            </Fragment>
          )}
          {entityType === 'threat' && (
            <Fragment>
              <div>Operator</div>
              <input type="checkbox" value="review" /> Reviewed <br />
              <button className="threatNode">New Vulnerability</button>
            </Fragment>
          )}
        </g>
      </g>
    );
  }
}

SvgTextElement.defaultProps = {
  entityType: undefined,
  name: undefined,
  id: undefined,
  description: undefined,
};

SvgTextElement.propTypes = {
  name: T.string,
  id: T.number,
  description: T.string,
  textLayout: T.object.isRequired,
  nodeStyle: T.object.isRequired,
  entityType: T.string,
};
