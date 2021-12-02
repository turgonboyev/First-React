import React from "react"

export default class Form extends React.Component{
    state = {
        email : "",
        checkBool: ""
    };
    abc = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };
    ab = (e) => {
        this.setState({[e.target.name]: e.target.checked})
    };
    a = () => {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(this.state.email)){
            alert("Email ERROR")
        }
        else if(!this.state.checkBool){
            alert("Error checkbox")
        }else {
            alert("DONE")
        }
    };
    render() {
        const {email, checkBool} = this.state;

        return(
            <div>
                <form action="#" className="mt-5">
                    <input type="email"
                        placeholder="Email"
                        value={email}
                        name="email"
                        onChange={this.abc}
                    />
                    <br/><br/>
                    <input type="checkbox"
                        checked={checkBool}
                        name="checkBool"
                        onChange={this.ab}
                    />
                    <code className="ml-3">Hamma shartlarga rozimisiz ?</code>
                    <br/><br/>
                    <button className="btn btn-success"
                            onClick={this.a}
                    >Submit</button>
                </form>
            </div>
        )
    }
}