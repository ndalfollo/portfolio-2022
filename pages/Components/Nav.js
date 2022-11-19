export default function Nav() {
    let options = {
        timeZone: 'Europe/Zurich',
        hour: 'numeric',
        minute: 'numeric',
      },
      formatter = new Intl.DateTimeFormat('en-GB', options);

    return (
        <div class='navContainer'>
            <div class="title">
                <p class="bold">Nathan Dalfollo</p>
                <p>Portfolio 2022</p>
            </div>
            <div class="time">
                <p class="bold">Sion, Switzerland</p>
                <p>{formatter.format(new Date())}</p>
            </div>
            <div class="about">
                <a href="" class="bold">About</a>
            </div>
        </div>
    )
}