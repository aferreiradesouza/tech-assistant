import React from 'react';
import './title.scss';

interface IComponent {
    title: string;
    section: string;
}

class TitleComponent extends React.Component<IComponent> {
    render() {
        return (
            <div className="wrapper">
                <span>{this.props.section}</span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default TitleComponent;