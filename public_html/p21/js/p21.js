        var c1 = prompt(" Write the measurement of the first cathetus : ");
        var c2 = prompt(" Write the measurement of the second cathetus : ");
        result=(parseInt(c1)**2)+(parseInt(c2)**2);
        console.log(" hypotenuse = (cathetus1^2) + (cathetus2^2) = "+result);

        hypotenuse=result**(1/2);
        console.log(" the square root is removed, ");
        console.log(" Therefore the result is hypotenuse = "+hypotenuse);