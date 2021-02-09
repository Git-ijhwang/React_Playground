import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo'

class PhoneInfoList extends Component {
    static defaultProps = {
        // list: [],
        data:[],
        onRemove: () => console.warn('onRemove not define'),
        onUpdate: () => console.warn('onUpdate not define'),
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
    }

    render() {
        console.log('render PhoneInfoList');
        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(
            info => (
                <PhoneInfo
                    key = {info.id}
                    info = {info}
                    onRemove = {onRemove}
                    onUpdate = {onUpdate}
                />
            )
        );

        return (
            <div>
                {list}
            </div>
        )
    }
}

export default PhoneInfoList