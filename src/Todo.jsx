// export default function ToDo({task, isDone}){
//     return(
//         <li>Task: {task}</li>
//     )
// }

// export default function ToDo({task, isDone}){
//     if(isDone === true){
//         return <li>Done: {task}</li>
//     }
//     else{
//         return <li>Pending: {task}</li>
//     }
// }


// export default function ToDo({task, isDone, time=0}){
//     if(isDone === true){
//         return <li>Done: {task} Duration:{time}</li>
//     }
//     return <li>Pending: {task}</li>
// }


// conditional rendaring: 3 teranry
// condition ? true : false

// export default function ToDo({task, isDone, time=0}){
//     return isDone ? <li>Done: {task} time: {time}</li> : <li>Pending: : {task}</li>
// }


// consditional rendaring: 4 &&

// export default function ToDo({task, isDone, time=0}){
//     return isDone && <li>Done Task: {task} time: {time}</li>
// }


// consditional rendaring: 5 ||

// export default function ToDo({task, isDone, time=0}){
//     return isDone || <li>Pending Task: {task} time: {time}</li>
// }


// export default function ToDo({task, isDone}){
//     if(isDone === true){
//         return null;
//     }
//     else{
//         return <li>Pending: {task}</li>
//     }
// }


// conditional rendaring: 6 use variable
export default function ToDo({task, isDone, time}){

    // const displayTime = time ? time : 100;
    let listItem;

        if(isDone === true){
            listItem = <li>Done: {task} time: {time ? 'I am Done' :  'had not done yet'}</li>
        }
        else{
            listItem = <li>Pending: {task}</li>
        }

        return listItem
}