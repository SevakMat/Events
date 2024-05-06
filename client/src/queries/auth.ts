export const SignUpGQL = `
    mutation SignUp(
        $email: String!
        $password: String!
        $firstName: String
        $lastName: String
        $phone: String
        $age: Int
        $gender: String
    ) {
        signUp(SignUpFormInput: {
            email: $email
            password: $password
            firstName: $firstName
            lastName: $lastName
            phone: $phone
            age: $age
            gender: $gender
        }) {
            success
        }
    }
`;

export const SignInGQL = `
    mutation SignIn(
        $email: String!
        $password: String!
    ) {
        login(LoginFormInput: {
            email: $email
            password: $password
        }) {
            email
            id
            token
        }
    }
`;

export const CheckOutLoginGQL = `
    query CheckOutLogin(
        $token: String!
    ) {
        checkOutLogin(CheckOutLoginFormInput: {
            token: $token
        }) {
            email
            id
        }
    }
`;
