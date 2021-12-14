import "./EventBubble.css"

export default function EventBubble(props) {

    return(
        <div className="Bubble">
            <div className="Title">{props.name}</div>
            <div className="Date">{props.date}</div>
        </div>
    );
}