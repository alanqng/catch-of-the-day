import React from "react";

export class StorePicker extends React.Component {

    myInput = React.createRef();
    goToStore = (event) => {
        event.preventDefault();
        console.log(this.myInput.current.value)
        this.props.history.push(`/store/${this.myInput.current.value}`)
    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input 
                    ref={this.myInput}
                    type="text" 
                    required 
                    placeholder="Store Name"
                />
                <button type="submit">Visit Store </button>
            </form>
        )
    }
}
