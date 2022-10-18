const React = require('react')

class New extends React.Component {
    render(){
        return (
            <>
            <h1>Create A New Log</h1>
            <nav>
                <a href="/logs"> Go Back To Logs Home Page</a>
            </nav>
            <form method="POST" action="/logs">
                Name: <input type="text" name="name" placeholder='Name of Log Here'></input><br/>
                Color: <input type="text" name="color" placeholder='Color of Log Here'></input><br/>
                Is Ready To Eat: <input type="checkbox" name="shipIsBroken"></input><br/>
                <input type="submit" value="Submit Log"></input>
            </form>
            </>
        )
    }
}

module.exports = New


