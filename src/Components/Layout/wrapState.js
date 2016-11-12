import React, {Component, PropTypes} from 'react';

function wrapState(ComposedComponent) {
  return class extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      selectedItemStyle: PropTypes.object,
      defaultValue: PropTypes.string.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      const {selectedItemStyle} = this.props;
      return (
        <ComposedComponent
          nestedListStyle={{ paddingTop: 0, paddingBottom: 0 }}
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
          selectedItemStyle={selectedItemStyle}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

export default wrapState;
