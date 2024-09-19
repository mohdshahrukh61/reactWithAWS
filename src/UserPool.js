import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "ap-south-1_2mUl4d3fS",
    ClientId: "7grbo80nvjdqctk554comepbgs"
}   

export default new CognitoUserPool(poolData);