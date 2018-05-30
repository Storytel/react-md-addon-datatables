import React, { Component, CSSProperties } from 'react';
import { TableColumn, TableColumnProps } from 'react-md';

export interface State {
  top: number;
  overflows: boolean;
}

export class TruncatedTableColumn extends Component<TableColumnProps, State> {
  ref?: HTMLDivElement;

  constructor(props: TableColumnProps) {
    super(props);
    this.state = {
      top: 0,
      overflows: false,
    };
  }

  getTooltipPosition(): 'bottom' | 'top' {
    const { top } = this.state;
    return top < window.innerHeight * 0.5 ? 'bottom' : 'top';
  }

  setReference = (ref: HTMLDivElement) => {
    this.ref = ref;
  };

  determineOverflow = () => {
    if (!this.ref) {
      return;
    }

    const overflows = this.ref.scrollWidth > this.ref.clientWidth;
    if (overflows === this.state.overflows) {
      return;
    }

    this.setState({ overflows });
  };

  determineTop = () => {
    if (!this.ref) {
      return;
    }

    const top = this.ref.getBoundingClientRect().top;
    if (top === this.state.top) {
      return;
    }

    this.setState({ top });
  };

  calculate = () => {
    this.determineTop();
    this.determineOverflow();
  };

  componentDidMount() {
    window.addEventListener('resize', this.calculate);
    this.calculate();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculate);
  }

  render() {
    const { children, className = '', ...rest } = this.props;
    const { overflows } = this.state;
    const style: CSSProperties = overflows
      ? { overflow: 'hidden', textOverflow: 'ellipsis', textDecoration: 'underline dotted' }
      : { overflow: 'auto' };

    const columnProps: TableColumnProps = {
      className: `truncated-table-column ${className}`,
      tooltipLabel: overflows ? children : undefined,
      tooltipPosition: this.getTooltipPosition(),
      tooltipDelay: 200,
      ...rest,
    };

    return (
      <TableColumn {...columnProps}>
        <div ref={this.setReference} style={style}>
          {children}
        </div>
      </TableColumn>
    );
  }
}
