let Notification = (input) => {
    const Notification = document.createElement("p");
    Notification.innerText = input.html;
    Notification.style.top = input.top;
    Notification.style.right = input.right;
    Notification.style.position = "absolute";
    document.body.appendChild(Notification);
}

Notification(
    {
        top: "180px",
        right: "180px",
        html: "Hello Naiman",
        className: "Welcome"
    }
)