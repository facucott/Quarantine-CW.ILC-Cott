export default function ItemListContainer (props){
    return(
        <div className="musicos">
        <h6>
            <strong>{props.name}</strong> <br /> <br /> ({props.instrument})
        </h6>
        </div>
    )
}