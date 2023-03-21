import { Component } from 'react';
import './projectList.css';
export class ProjectList extends Component {
  render() {
    const { projects, index } = this.props;

    return (
      <li className="list">
        <img
          className="img"
          src={projects.img}
          key={index + 1}
          alt="картинка"
        />
      </li>
    );
  }
}
