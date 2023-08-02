import style from "./TextBox.module.scss"
import classNames from "classnames";
import {useEffect, useState} from "react";

const TextBox = ({children, sizeTextBox, placeholder, ...props}) => {
    const [size, setSize] = useState()

    useEffect(() => {
        switch (sizeTextBox) {
            case "small":
                setSize(style.small);
                break;
            case "large":
                setSize(style.large);
                break;
            default:
                setSize(style.medium);
                break;
        }
    }, [sizeTextBox]);

    const styles = classNames(style.textbox, size);

    return (
        <input className={styles} type={"text"} placeholder={placeholder} {...props} />
    )
}

export default TextBox