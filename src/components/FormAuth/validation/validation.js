import * as Yup from "yup"

const validation = Yup.object().shape({
    login: Yup.string()
        .required("Поле обязательно для заполнения"),
    password: Yup.string()
        .required("Поле обязательно для заполения")
})

export default validation