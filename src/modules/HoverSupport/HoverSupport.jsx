import {useState} from "react";
import Button from "../../ui/Button/Button";
import Card from "../../ui/Card/Card";
import {createPortal} from "react-dom";

const HoverSupport = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Button text={"Поддержка"} />
            {isHovering && createPortal(
                <Card>
                    <div>
                        <p>7-999-999-99-99</p>
                    </div>
                    <div>
                        <p>8-234-234-56-64</p>
                    </div>
                </Card>,
                document.body
            )}
        </div>
    );
};

export default HoverSupport