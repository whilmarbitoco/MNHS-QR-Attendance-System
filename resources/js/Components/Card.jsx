const Card = ({ cardName, cardContent }) => {
    return (
        <div className="col-md">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{cardName}</h5>
                    <p>{cardContent}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
