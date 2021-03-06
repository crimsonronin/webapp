import React from 'react';

class LoadingIndicator extends React.Component {

    static propTypes = {
        // html component attributes
        type: React.PropTypes.oneOf(['dots', 'circle']),
        inline: React.PropTypes.bool,
        style: React.PropTypes.object,
    };

    static defaultProps = {
        style: {},
    };

    constructor(props) {
        super(props);
        this.state = {progress: 0};
    }

    render() {
        const {type, inline, style} = this.props;
        switch (type) {
            case 'dots':
                return (
                    <div style={style} className="LoadingIndicator three-bounce">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                );
            case 'circle':
                return (
                    <div style={style} className={'LoadingIndicator circle' + (inline ? ' inline' : '')}>
                        <div></div>
                    </div>
                );
            //'strong' may be an evolving load indicator.
            case 'circle-strong':
                return (
                    <div style={style} className={'LoadingIndicator circle circle-strong'}>
                        <div></div>
                    </div>
                );
            default:
                return (
                    <div className={'LoadingIndicator loading-overlay' + ((this.progress > 0) ? ' with-progress' : '')}
                         style={style}>
                        <div className="loading-panel">
                            <div className="spinner">
                                <div className="bounce1"></div>
                                <div className="bounce2"></div>
                                <div className="bounce3"></div>
                            </div>
                            <div className="progress-indicator"><span>{this.state.progress}</span></div>
                        </div>
                    </div>
                );
        }
    }

}

export default LoadingIndicator;
