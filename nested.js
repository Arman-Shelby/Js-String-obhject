const college = {
    name: 'VNC',
    class: ['10', '11','12'],
    events: ['Science Fsir','Bijoy Dibos', 'Ekushey FEbr'],
    unique:{
        color: 'Blue',
    result: {
     gpa:   5,
        merit: 'top'
    }

    }
}

// console.log(college.unique.color)
college.unique.result.merit = 'Top top top most';
console.log(college.unique.result.merit);


college.events[1] = '16 December';
console.log(college.events[1]);


delete college.class;
console.log(college)