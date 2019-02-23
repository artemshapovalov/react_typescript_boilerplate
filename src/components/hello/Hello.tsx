import * as React from 'react';
import {GlobalState} from "../../ducks";
import {connect} from "react-redux";
import * as appActions from "../../ducks/app/actions";
import {AppActions} from "../../ducks/app/actions";

interface OwnProps {
    compiler: string;
    framework: string;
}

interface StateProps {
    initialized: boolean;
}

interface DispatchProps {
    init: () => void
}

type Props = StateProps & DispatchProps & OwnProps

class Hello extends React.Component<Props> {
    componentDidMount(): void {
        setTimeout(this.props.init, 3000);
    }

    render() {
        const { compiler, framework, initialized } = this.props;

        return (
            <div>
                <h1>Hello from {compiler} and {framework}!</h1>
                <div>Initialized: {initialized.toString()}</div>
            </div>
        )
    }
}

const mapStateToProps = ({ app }: GlobalState): StateProps => ({
    initialized: app.initialized
});

export default connect(mapStateToProps, { init: AppActions.init })(Hello);
