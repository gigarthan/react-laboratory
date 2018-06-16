import { signout } from "store/actions/authentication";
import {connect} from 'react-redux';

const signOutComponent = props => {
    props.history.push('/');
    props.signout();
    return null;
};

export default connect(null, { signout })(signOutComponent);

