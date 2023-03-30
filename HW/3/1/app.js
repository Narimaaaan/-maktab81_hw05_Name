function Rock_Paper_Scissors() {
    const hand = ["Rock", "Paper", "Scissors"];
    let k_point = 0;
    let u_point = 0;
    while (true) {
        let _input = prompt("Rock Paper Scissors?:");

        let index = Math.floor(Math.random() * 3) + 1;

        let x = hand[index - 1];
        switch (x) {
            case "Rock":
                switch (_input) {
                    case "Rock":
                        alert("mosavi");
                        break;
                    case "Paper":
                        u_point += 1;
                        alert(`شما ${_input} , کامپیوتر${x} برنده:شما، امتیاز:${u_point},${k_point}`)
                        break;
                    case "Scissors":
                        k_point += 1;
                        alert(`شما ${_input} , کامپیوتر${x} برنده:کامپیوتر، امتیاز:${u_point},${k_point}`)
                        break;

                    default:
                        break;
                }
                break;
            case "kaghaz":
                switch (_input) {
                    case "Paper":
                        alert("mosavi");
                        break;
                    case "Scissors":
                        u_point += 1;
                        alert(`شما ${_input} , کامپیوتر${x} برنده:شما، امتیاز:${u_point},${k_point}`)
                        break;
                    case "Rock":
                        k_point += 1;
                        alert(`شما ${_input} , کامپیوتر${x} برنده:کامپیوتر، امتیاز:${u_point},${k_point}`)
                        break;

                    default:
                        break;
                }
                break;
            case "gheychi":
                switch (_input) {
                    case "Scissors":
                        alert("mosavi");
                        break;
                    case "Rock":
                        u_point += 1;
                        alert(`شما ${_input} , کامپیوتر${x} برنده:شما، امتیاز:${u_point},${k_point}`)
                        break;
                    case "Paper":
                        k_point += 1;
                        alert(`شما ${_input} , کامپیوتر${x} برنده:کامپیوتر، امتیاز:${u_point},${k_point}`)
                        break;

                    default:
                        break;
                }
                break;

            default:
                break;
        }
        if (prompt("Do you want continue?Enter yes or no:") == "no") {
            break;
        }
    }
}

Rock_Paper_Scissors()