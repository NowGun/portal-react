import style from "./Avatar.module.scss"

const Avatar = ({text}) => {
    const value = text.split(" ").map(v => v[0]);

    return (
        <div>
            <div className={style.avatar}>
                <p>{value}</p>
            </div>
        </div>
    )
}

export default Avatar