import jwt from 'jsonwebtoken';

const generateToken =  (res, userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: "30d",});

    // set JWT as an http-only cookie
    res.cookie('jwt', token, {httpOnly: true, sameSite: "strict", maxAge: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), secure:process.env.NODE_ENV === 'development'});

    return token;
};


export default generateToken;