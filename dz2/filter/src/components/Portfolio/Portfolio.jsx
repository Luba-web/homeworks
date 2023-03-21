import { Component } from 'react';
import { arr } from '../../utils/utils';
import { ProjectList } from '../ProjectList/ProjectList';
import { Toolbar } from '../Toolbar/Toolbar';
import './portfolio.css';

export class Portfolio extends Component {
  state = { selected: 'All', arr: arr };

  filter = (e) => {
    const select = e.target.textContent;
    if (select === 'All') {
      this.setState({ selected: 'All', arr: arr });
    } else {
      this.setState({
        selected: select,
        arr: arr.filter((item) => item.category === select),
      });
    }
    return this.state;
  };

  render() {
    const filtersList = ['All', 'Websites', 'Flayers', 'Business Cards'];

    return (
      <>
        <Toolbar
          filters={filtersList}
          selected={this.state.selected}
          onSelectFilter={this.filter}
        />
        <ul className='main'>
          {this.state.arr.map((item, index) => {
            return (
              <ProjectList
                projects={item}
                key={index}
                index={index}
                selected={this.state.selected}
              />
            );
          })}
        </ul>
      </>
    );
  }
}
