import React, { Component } from 'react';
import { IonButton } from '@ionic/react';

interface IComponent {
    label: string;
}

class ButtonComponent extends React.Component<IComponent> {

    render() {
        return (
            <IonButton>{this.props.label}</IonButton>
        );
    }
}

export default ButtonComponent;