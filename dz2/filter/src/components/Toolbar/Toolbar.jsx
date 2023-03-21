import { Component } from 'react';
import './toolbar.css';

export class Toolbar extends Component {
  render() {
    const { filters, onSelectFilter, selected } = this.props;

    return (
      <div className="container">
        {filters.map((item, index) => (
          <button
            onClick={onSelectFilter}
            key={index}
            className={item === selected ? 'active btn' : 'btn'}
          >
            {item}
          </button>
        ))}
      </div>
    );
  }
}
