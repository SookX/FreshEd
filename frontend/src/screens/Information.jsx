const Info = (props) => {
    const { name, description } = props.location.state;
    return (
        <div className="info-container">
            <div className="main-info">
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Info