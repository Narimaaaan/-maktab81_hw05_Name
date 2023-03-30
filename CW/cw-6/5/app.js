const topNote = (obj) => {
    const note = [];
    for (let stu of obj) {
        note.push(Math.max(...stu.notes))
    }
    return note;
}

const students = [{
    id: 1,
    name: "Jacek",
    notes: [5, 3, 4, 2, 5, 5]
},
{
    id: 2,
    name: "Ewa",
    notes: [2, 3, 3, 3, 2, 5]
},
{
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
}]

console.log(topNote(students));

