(function(){

    function ProImg(props){
        return(
            <img src={`../images/${props.color}.jpg`} alt="image" />
        )
    }

function ProSize(props){
    function optionSize(){
        //const sizes = window.data.allSize;
        return props.sizes.map((item, index) => {
        return( <option value={item} key={index}>{item}</option>)
        })
    }
    function onSizeChange(event){
        props.hSizeChange(event.target.value)
    }
    return(
        <p className="field">
            <label htmlFor="size">Size : </label>
            <select id="size" defaultValue = {props.size} onChange={onSizeChange}>
                {optionSize()}
            {/* <option value="">7</option> */}
            </select>
        </p>
    )
}

function ProColor(props){
    function optionColor(){
        //const colors = windows.data.allColor
        return props.colors.map((item, index) => {
            return( <option value={item} key={index}>{item}</option>)
        })
    }
    function onColorChange(event){
        props.hColorChange(event.target.value)
    }
    return(
        <p className="field">
            <label htmlFor="color">Color : </label>
            <select id="color" defaultValue = {props.color} onChange={onColorChange}>
                {optionColor()}
                {/*<option value="">Blue</option>*/}
            </select>
        </p>
        
    )
}


function App(){
    const [color, setColor] = React.useState('red')
    const [colors, setColors] = React.useState(window.data.allColor)
    const [size, setSize] = React.useState('7')
    const [sizes, setSizes] = React.useState(window.data.allSize)


    function hSizeChange(selectSize){
        const ableColors = window.data.bySize[selectSize]
        setColors(ableColors)
        setSize(selectSize)
    }

    function hColorChange(selectColor){
        const ableSizes = window.data.byColor[selectColor]
        setSizes(ableSizes)
        setColor(selectColor)
    }
    return(
        <div className="custom">
            <div className="pic">
                <ProImg 
                color = {color}/>
            </div>
            <div className="selector">
            <ProSize 
            size = {size}
            sizes = {sizes}
            hSizeChange = {hSizeChange}
            />
            <ProColor 
            color = {color}
            colors = {colors}
            hColorChange = {hColorChange}
            />
            </div>
        </div>
    )
}

const root = document.querySelector('#root')
ReactDOM.render(
    <App />, root
)
})()
