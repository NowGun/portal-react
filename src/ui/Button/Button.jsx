import style from "./Button.module.scss"
import {useEffect, useState} from "react";
import classNames from "classnames";

const Button = ({text, type, size, ...props}) => {
    const [styleButton, setStyleButton] = useState("secondary");
    const [sizeButton, setSizeButton] = useState("medium");

    useEffect(() => {
        switch (type) {
            case "primary":
                setStyleButton(style.primary);
                break;
            case "transparent":
                setStyleButton(style.transparent);
                break;
            case "subtle":
                setStyleButton(style.subtle);
                break;
            default:
                setStyleButton(style.secondary);
                break;
        }
    }, [type]);

    useEffect(() => {
        switch (size) {
            case "small":
                setSizeButton(style.small);
                break;
            case "large":
                setSizeButton(style.large);
                break;
            default:
                setSizeButton(style.medium);
                break;
        }
    }, [size]);

    const buttonStyle = classNames(style.button, styleButton, sizeButton);

    return (
        <button className={buttonStyle} {...props}>{text}</button>
    )
}

export default Button