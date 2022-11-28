const Login = (email: string, password: string) => {
    fetch(
        `http://localhost:4000/api/login?email=${email}&password=${password}`,
        {
            method: "GET",
        }
    )
        .then((res) => res.json())
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
};

export default { Login };
