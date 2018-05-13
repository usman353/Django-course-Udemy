alert('Welcome to the anonymous website')
var f_name=prompt('Please enter first name')
var l_name=prompt('Please enter last name')
var age=prompt('Please enter age')
var height=prompt('Please enter height in cm')
var p_name=prompt('Please enter pet name')
console.log('Input successful')


for (var i = 0 ; i <= f_name.length; i++) {
    if(f_name[0]===l_name[0]){
        if (20<age<30) {
            if (height>=170) {
                if (p_name[-1]==='y'||'Y') {
                    console.log('Peter Norton')
                }
            }
        }
    }
}
