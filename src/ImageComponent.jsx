const ImageComponent = (props) => {
    return (
        <div>
            <img src={props.url} alt={props.alt} />
        </div>

    )

}

export default ImageComponent;