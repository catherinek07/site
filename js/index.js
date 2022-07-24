(function(){

    function ProImg(){
        return(
            <img src="../images/blue.jpg" alt="image" />
        )
    }

function ProSize(){
    return(
        <p className="field">
            <label htmlFor="size">Size : </label>
            <select id="size">
                <option value="">7</option>
            </select>
        </p>
    )
}
function ProColor(){
    return(
        <p className="field">
            <label htmlFor="color">Size : </label>
            <select id="color">
                <option value="">blue</option>
            </select>
        </p>
        
    )
}

function App(){
    return(
        <div className="custom">
            <div className="pic">
                <ProImg />
            </div>
            <div className="selector">
            <ProSize />
            <ProColor />
            </div>
        </div>
    )
}


const root = document.querySelector('#root')
ReactDOM.render(
    <App />, root
)
})