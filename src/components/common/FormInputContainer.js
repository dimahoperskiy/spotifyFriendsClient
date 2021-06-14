import React from "react"
import {setIsWrongLogin} from "../../redux/reducers/authReducer";
import {connect} from "react-redux";
import FormInput from "./FormInput";


const mapStateToProps = (state) => {
    return {
        isWrongLogin: state.auth.isWrongLogin,
    }
}

const mapDispatchToProps = {
    setIsWrongLogin
}

class FormInputContainer extends React.Component {
    render() {
        return (
            <FormInput input={this.props.input}
                       meta={this.props.meta}
                       isWrongLogin={this.props.isWrongLogin}
                       setIsWrongLogin={this.props.setIsWrongLogin}
                       {...this.props}/>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FormInputContainer)