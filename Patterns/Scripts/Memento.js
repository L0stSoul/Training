{
    function calculation(x, y)
    {
        var key = x.toString() + y.toString();
        var result = 0;

        if (!calculation.memento[key])
        {
            for (var i = 0; i < y; ++i) result += x;
            calculation.memento[key] = result;
        }
        return calculation.memento[key];
    }
    calculation.memento = {};

    var start = new Date();
    console.log('result:' + calculation(2, 100000000));
    console.log('time passed:' + (new Date().getTime() - start.getTime()) + ' ms');

    var start = new Date();
    console.log('result:' + calculation(2, 100000000));
    console.log('time passed:' + (new Date().getTime() - start.getTime()) + ' ms');

    var start = new Date();
    console.log('result:' + calculation(2, 10000000));
    console.log('time passed:' + (new Date().getTime() - start.getTime()) + ' ms');
}
