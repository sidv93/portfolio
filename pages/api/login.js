export default (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.statusCode = 400;
        return res.json({
            message: 'No username/password',
            status: 'failure'
        });
    }
    if (!(username === 'sid' && password === 'Ramsey')) {
        res.statusCode = 400;
        return res.json({
            message: 'Wrong username/password',
            status: 'failure'
        });
    }
    res.statusCode = 200
    return res.json({
        message: 'Authentication successful',
        status: 'success'
    });
}
