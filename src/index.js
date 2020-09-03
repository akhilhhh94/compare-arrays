const compare = function (a1, a2) {
    if (!a2)
        return false;
    if (a1.length != a2.length)
        return false;

    for (var i = 0, l=a1.length; i < l; i++) {
        if (a1[i] instanceof Array && a2[i] instanceof Array) {
            if (!a1[i].equals(a2[i]))
                return false;       
        }           
        else if (a1[i] != a2[i]) { 
            return false;   
        }           
    }       
    return true;
}

export default compare;